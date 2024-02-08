import "./ContentHeader.css";
import ViewTitle from "../components/ViewTitle.jsx";
import ViewSubTitle from "../components/ViewSubTitle.jsx";
import PropTypes from "prop-types";
import "../index.css";

function ContentHeader(props) {
	return (
		<section className="content-header">
			{/* Sidans titel, skickar prop med textinnehåll */}
			<ViewTitle title={props.title} />
			{/* Sidans undertitel, skicar prop med textinnehåll */}
			<ViewSubTitle subtitle={props.subtitle} />
		</section>
	);
}

ContentHeader.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};

export default ContentHeader;
