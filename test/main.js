"use strict";

const ready = require( 'mf-js/modules/dom/ready' );

const manager    = require( '../dist/mf-js-form' ).manager;
const rules      = require( '../dist/mf-js-form' ).rules;
const validators = require( '../dist/mf-js-form' ).validators;

ready( function () {
	let o = manager( document.querySelector( '.form-1' ) )
		.add( 'civility', {
			type:           rules.Radio,
			fieldContainer: document.querySelector( '.form-1 .civility' )
		} )
		.add( 'firstname', {
			modificator: function ( str ) {
				return str.trim().toLocaleUpperCase().substr( 0, 1 ) + str.trim().toLocaleLowerCase().substr( 1 );
			}
		} )
		.add( 'lastname', {
			modificator: function ( str ) {
				return str.trim().toLocaleUpperCase();
			}
		} )
		.add( 'email', {
			modificator: function ( str ) {
				return str.trim().toLocaleLowerCase();
			},
			validator:   validators.isEmail
		} )
		.add( 'mobile', { required: false } )
		.add( 'phone', { required: false } )
		.add( 'one-phone', {
			type:     rules.Rule,
			validate: function () {
				let v = (!!this.form.querySelector( '[name=mobile]' ).value || !!this.form.querySelector( '[name=phone]' ).value);
				return v;
			}
		} )
		.add( 'country' );
} );
