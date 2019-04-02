import ready from 'mf-js/modules/dom/ready' ;

const form_manager = require( '../dist/mf-js-form' );

const manager    = form_manager.manager;
const rules      = form_manager.rules;
const validators = form_manager.validators;

ready( function () {
	let o = manager( document.querySelector( '.form-1' ) )
		.add( 'civility', {
			type:           rules.Radio,
			errorMessage:   'Merci de remplir votre civilité',
			fieldContainer: document.querySelector( '.form-1 .civility' )
		} )
		.add( 'firstname', {
			errorMessage: 'Merci de remplir votre prénom',
			modificator:  function ( str ) {
				return str.trim().toLocaleUpperCase().substr( 0, 1 ) + str.trim().toLocaleLowerCase().substr( 1 );
			}
		} )
		.add( 'user[lastname]', {
			errorMessage: 'Merci de remplir votre nom',
			modificator:  function ( str ) {
				return str.trim().toLocaleUpperCase();
			}
		} )
		.add( 'email', {
			errorMessage: 'Merci de remplir votre email',
			modificator:  function ( str ) {
				return str.trim().toLocaleLowerCase();
			},
			validator:    validators.isEmail
		} )
		.add( 'mobile', { required: false } )
		.add( 'phone', { required: false } )
		.add( 'one-phone', {
			type:         rules.Rule,
			errorMessage: 'Merci de remplir au moins un numéro de téléphone',
			validate:     function () {
				let v = (!!this.form.querySelector( '[name=mobile]' ).value || !!this.form.querySelector( '[name=phone]' ).value);
				return v;
			}
		} )
		.add( 'country', {
			errorMessage: 'Merci de remplir votre pays',
		} )
		.submit( _ => {
			console.log( 'Submitting...' );
		} );
} );
