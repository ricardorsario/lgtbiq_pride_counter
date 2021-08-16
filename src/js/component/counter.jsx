import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Counter = props => {
	const [number, setNumber] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			if (number == 9) {
				setNumber(0);
			} else {
				setNumber(number + 1);
			}
		}, 1000 * props.copiesContent);

		return () => {
			clearInterval(interval);
		};
	}, [number]);

	useEffect(() => {
		setNumber(0);
		return () => clearTimeout(number);
	}, [props.stop]);

	return (
		<div className="counter-class">
			<span className={props.copiesColor}>{number % 10}</span>
		</div>
	);
};

Counter.propTypes = {
	copiesContent: PropTypes.number,
	copiesColor: PropTypes.string,
	stop: PropTypes.bool
};

export default Counter;
