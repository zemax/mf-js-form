"use strict";

function Rule( options = {} ) {
	let o = {
		required: false,

		set: function ( name, form ) {
			this.name = name;
			this.form = form;

			return this;
		},

		validate: function () {
			return !this.required;
		},
	};

	return Object.assign( o, options );
}

export default Rule;
