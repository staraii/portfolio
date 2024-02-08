import ContentHeader from "../components/ContentHeader.jsx";
import "./views.css";

function Home() {
	return (
		<main className="view-main home-main">
			<ContentHeader title="<Welcome>" subtitle="to my portfolio" />
			<section className="view-content-section welcome-section">
				<p className="welcome-p">
					Welcome to my portfolio. I am currently studying Frontend
					development where I get to learn HTML, CSS, JavaScript and
					the use of libraries and frameworks such as React and Sass.
					I am also learning to design and implement user
					interfaces(UI) and optimizing its use for better user
					experience(UX). Since before I have also worked quite alot
					in Photoshop, designing for both print and web and photo
					editing. <br></br>
					<br></br>
					&#47;&#47;Staffan Björk
				</p>
			</section>
		</main>
	);
}

export default Home;
