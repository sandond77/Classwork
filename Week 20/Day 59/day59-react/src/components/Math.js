// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360

import React from "react";

const Math = (props) => {

	let value;

	console.log('props', props)

	switch (props.operator) {
		case "+":
			value = props.num1 + props.num2;
			break;
		case "-":
			value = props.num1 - props.num2;
			break;
		case "*":
			value = props.num1 * props.num2;
			break;
		case "/":
			value = props.num1 / props.num2;
			break;
		default:
			value = NaN;
	}



	return <span className="value">{value}</span>
}

export default Math;
