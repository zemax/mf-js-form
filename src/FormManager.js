"use strict";

require( 'core-js/fn/object/assign' );

import Field from './rules/Field';

const css = require( 'mf-js/modules/dom/cssClass' );

class Messenger {
	constructor( elementt ) {

	}

	hide() {

	}

	show( message ) {
		console.log( message );
	}
}

class FormManager {
	constructor( form, options = {} ) {
		this.form    = form;
		this.rules   = [];
		this.options = Object.assign( {}, options );

		this.messenger = new Messenger();

		this.form.addEventListener( 'submit', this.check.bind( this ) );
	}

	/**
	 * add
	 * @param name
	 * @param options
	 */
	add( name, options = {} ) {
		let fieldContainer = false;
		if ( !!options.fieldContainer ) {
			fieldContainer = options.fieldContainer;
		}
		else {
			fieldContainer = this.form.querySelector( '[name=' + name + ']' );
			fieldContainer = !!fieldContainer ? fieldContainer.parentNode : false;
		}

		let errorContainer = false;
		if ( !!options.errorContainer ) {
			errorContainer = options.errorContainer;
		}
		else {
			errorContainer = fieldContainer.querySelector( '.error-container' );
			errorContainer = !!errorContainer ? errorContainer : false;
		}

		options = Object.assign( {}, {
			type:           Field,
			fieldContainer: fieldContainer,
			errorContainer: errorContainer,
			errorMessage:   "Merci de remplir ce champ."
		}, options );

		this.rules.push( options.type( options ).set( name, this.form ) );

		return (this);
	}

	/**
	 *
	 * @param e
	 */
	check( e ) {
		this.messenger.hide();

		let ok = true;
		for ( let i = 0, l = this.rules.length; i < l; i++ ) {
			let rule  = this.rules[ i ];
			let valid = rule.validate();

			if ( !valid ) {
				if ( !!rule.messenger ) {
					rule.messenger.show( rule.name );
				}
				else {
					this.messenger.show( rule.name );
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

			/*
			 options.currentStatus = ok;

			 if ( (options.required || !isNotEmpty( value, options )) && !options.validate( value, options ) ) {
			 ok = false;

			 if ( options.errorContainer != undefined ) {
			 if ( options.errorMessageContainer != undefined ) {
			 options.errorMessageContainer.html( options.errorMessage );
			 }
			 else {
			 options.errorContainer.html( options.errorMessage );
			 }
			 options.errorContainer.show();
			 }
			 else {
			 this.messenger.show( options.errorMessage );
			 }

			 }
			 else {
			 if ( options.errorContainer != undefined ) {
			 options.errorContainer.hide();
			 }

			 }
			 */
		}

		if ( ok ) {
			this.messenger.hide();
		}
		else {
			e.preventDefault();
		}
	}
}

export default function ( form, options = {} ) {
	return new FormManager( form, options );
}
