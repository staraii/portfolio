import PropTypes from "prop-types";

function ViewTitle({ title }) {
	return <h1 className="h1-ViewTitle">{title}</h1>;
}

ViewTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

export default ViewTitle;
