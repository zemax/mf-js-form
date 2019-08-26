import manager from './FormManager';
import Rule from './rules/Rule';
import Field from './rules/Field';
import Radio from './rules/Radio';
import isEmpty from './validators/isEmpty';
import isNotEmpty from './validators/isNotEmpty';
import isEmail from './validators/isEmail';

const x = {
	manager:    manager,
	rules:      {
		Rule:  Rule,
		Field: Field,
		Radio: Radio
	},
	validators: {
		isEmpty:    isEmpty,
		isNotEmpty: isNotEmpty,
		isEmail:    isEmail
	}
};

export default x;

if ( typeof exports === 'object' ) {
	module.exports = x;
}
