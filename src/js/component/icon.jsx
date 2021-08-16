import React from "react";
import PropTypes from "prop-types";

const Icon = props => {
	return (
		<div className={props.copiesColor}>
			<i className="fas fa-clock"></i>
		</div>
	);
};

Icon.propTypes = {
	copiesColor: PropTypes.string
};

export default Icon;
