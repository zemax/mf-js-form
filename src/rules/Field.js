"use strict";

import Rule from './Rule';
import isEmpty from '../validators/isEmpty';
import isNotEmpty from '../validators/isNotEmpty';

function Field( options = {} ) {
	let o = Rule( {
					  required: true,

					  modificator: function ( str ) {
						  return str.trim();
					  },

					  validator: isNotEmpty,

					  set: function ( name, form ) {
						  this.name    = name;
						  this.form    = form;
						  this.element = form.querySelector( '[name=' + name + ']' );

						  return this;
					  },

					  validate: function () {
						  let value = this.element.value;

						  if ( !!value ) {
							  value              = this.modificator( value );
							  this.element.value = value;
						  }

						  // Either (not required and empty) or valid value
						  return (!this.required && isEmpty( value )) || this.validator( value );
					  }
				  } );

	return Object.assign( o, options );
}

export default Field;
