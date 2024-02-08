import PropTypes from "prop-types";

function ViewSubTitle({ subtitle }) {
	return <h3 className="h3-ViewSubTitle">{subtitle}</h3>;
}

ViewSubTitle.propTypes = {
	subtitle: PropTypes.string.isRequired,
};

export default ViewSubTitle;
