"use strict";

import Rule from './Rule';
import isNotEmpty from '../validators/isNotEmpty';

function Radio( options = {} ) {
	let o = Rule( {
					  set: function ( name, form ) {
						  this.name = name;
						  this.form = form;

						  return this;
					  },

					  validate: function () {
						  let c     = this.form.querySelector( '[name=' + this.name + ']:checked' );
						  let value = !!c ? c.value : null;

						  return isNotEmpty( value );
					  }
				  } );

	return Object.assign( o, options );
}

export default Radio;
