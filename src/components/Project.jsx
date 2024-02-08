import "./Project.css";
import PropTypes from "prop-types";

function Project({ id, dsc, repoUrl }) {
	return (
		// Artikel - för varje repo
		<article className="project-article">
			{/* Hämtar bild tillhörande repot */}
			<img
				className="project-img"
				src={`https://github.com/staraii/${id}/blob/main/repo-img.png?raw=true`}
			></img>
			{/* Repots namn */}
			<h3 className="project-name">{id}</h3>
			{/* Reots beskrivning */}
			<p className="project-dsc">{dsc}</p>
			{/* Container för länkarna */}
			<span className="project-links">
				{/* Länk till repot */}
				<a
					href={repoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="project-link project-repo-link"
				>
					GitHub Repo
				</a>
				{/* Länk till repots github page */}
				<a
					href={`https://staraii.github.io/${id}/`}
					target="_blank"
					rel="noopener noreferrer"
					className="project-link project-page-link"
				>
					GitHub Page
				</a>
			</span>
		</article>
	);
}

// Validerar props, alla propsen i denna komponent kräver props i string format
Project.propTypes = {
	id: PropTypes.string.isRequired,
	dsc: PropTypes.string.isRequired,
	repoUrl: PropTypes.string.isRequired,
};

export default Project;
