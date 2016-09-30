"use strict";

function isEmpty( str ) {
	return ( (str === undefined) || (str === null) || (str === false) || (str === "") || (str === 0) || (str === "0") );
}

export default isEmpty;
