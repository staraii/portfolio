import { useEffect, useState } from "react";
import Project from "../components/Project.jsx";
import "./views.css";
import ContentHeader from "../components/ContentHeader.jsx";

function Projects() {
	// Address för att hämta repos för mitt användarnamn genom GitHubs REST API
	const URL = "https://api.github.com/users/staraii/repos";
	// Initialiserar state, tom variabel.
	const [data, setData] = useState([]);

	useEffect(() => {
		// Hämtar data genom api.
		fetch(URL)
			// Omvandlar datan till JSON format
			.then((resp) => resp.json())
			// Lagrar datan i data variabeln(useState)
			.then((data) => {
				setData(data);
			});
		// Denna funktion körs bara en gång vid sidladdning.
	}, []);

	return (
		<main className="view-main projects-main">
			{/* Komponent för titel och undertitel, skickar props vidare till child-komponenter. */}
			<ContentHeader
				title="<Projects>"
				subtitle="html/css/javascript/ui"
			/>
			{/* Sektion för sidans innehåll */}
			<section className="view-content-section projects-section">
				{/* Map funktionen itererar igenom data-arrayen med repos */}
				{data.map((repo) => (
					// Renderar en "Project"-komponent för varje iteration/repo, skickar props unika för enskilt repo
					<Project
						key={repo.id}
						id={repo.name}
						dsc={repo.description}
						repoUrl={repo.html_url}
					/>
				))}
			</section>
		</main>
	);
}

export default Projects;
