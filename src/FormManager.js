"use strict";

require( 'core-js/fn/object/assign' );

import Field from './rules/Field';

const css = require( 'mf-js/modules/dom/cssClass' );

class Messenger {
	constructor( errorContainer = false ) {
		this.errorContainer = errorContainer;

		if ( !!errorContainer ) {
			this.errorContainer.addEventListener( 'click', this.hide.bind( this ) );
		}
	}

	clear() {
		if ( !!this.errorContainer ) {
			this.errorContainer.innerHTML = '';
		}
	}

	hide() {
		this.errorContainer.setAttribute( 'aria-hidden', 'true' );
	}

	show( message ) {
		console.log( message );

		if ( !!this.errorContainer ) {
			this.errorContainer.innerHTML += `<div>${message}</div>`;
			this.errorContainer.setAttribute( 'aria-hidden', 'false' );
		}
	}
}

class FormManager {
	constructor( form, options = {} ) {
		this.form    = form;
		this.rules   = [];
		this.options = Object.assign( {}, options );

		let errorContainer = !!options.errorContainer ? options.errorContainer : this.form.querySelector( '.main-error-container' );
		this.messenger     = new Messenger( errorContainer );

		this.form.addEventListener( 'submit', this.check.bind( this ) );
	}

	/**
	 * add
	 * @param name
	 * @param options
	 */
	add( name, options = {} ) {
		// Search for fieldContainer

		let fieldContainer = false;
		if ( !!options.fieldContainer ) {
			fieldContainer = options.fieldContainer;
		}
		else {
			fieldContainer = this.form.querySelector( '[name=' + name + ']' );
			fieldContainer = !!fieldContainer ? fieldContainer.parentNode : false;
		}

		// Search for error messenger

		if ( !options.messenger && !!options.errorContainer ) {
			options.messenger = new Messenger( options.errorContainer );
		}

		if ( !options.messenger && !!fieldContainer && !!fieldContainer.querySelector( '.error-container' ) ) {
			options.messenger = new Messenger( fieldContainer.querySelector( '.error-container' ) );
		}

		options = Object.assign( {}, {
			type:           Field,
			fieldContainer: fieldContainer,
			messenger:      this.messenger,
			errorMessage:   "Merci de remplir ce champ."
		}, options );

		this.rules.push( options.type( options ).set( name, this.form ) );

		return (this);
	}

	submit( f ) {
		this.options.submit = f;
		return (this);
	}

	/**
	 *
	 * @param e
	 */
	check( e ) {
		for ( let i = 0, l = this.rules.length; i < l; i++ ) {
			let rule = this.rules[ i ];

			if ( !!rule.messenger ) {
				rule.messenger.clear();
			}
		}

		let ok = true;
		for ( let i = 0, l = this.rules.length; i < l; i++ ) {
			let rule  = this.rules[ i ];
			let valid = rule.validate();

			if ( !valid ) {
				if ( !!rule.messenger ) {
					rule.messenger.show( rule.getError() );
				}

				if ( !!rule.fieldContainer ) {
					css.addClass( rule.fieldContainer, 'error' );
				}
			}
			else {
				if ( !!rule.messenger ) {
					rule.messenger.hide();
				}

				if ( !!rule.fieldContainer ) {
					css.removeClass( rule.fieldContainer, 'error' );
				}
			}

			ok = valid && ok;
		}

		if ( !ok ) {
			e.preventDefault();
			return;
		}

		this.messenger.hide();

		if ( !!this.options.submit ) {
			e.preventDefault();

			this.options.submit( this );
		}
	}
}

export default function ( form, options = {} ) {
	return new FormManager( form, options );
}
