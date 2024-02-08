import "../index.css";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
	return (
		<footer className="footer-container">
			<section className="footer-waves">
				<figure className="footer-wave"> </figure>
				<figure className="footer-wave"> </figure>
				<figure className="footer-wave"> </figure>
			</section>

			<div className="socials-container">
				<NavLink to="/contact">
					<img
						src="./287692_mail_icon.svg"
						className="footer-mail"
						alt="Email"
					/>
				</NavLink>
				<a
					href="http://www.linkedin.com/in/staffan-björk-8055332b3"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="./287697_linkedin_icon.svg"
						className="footer-linkedin"
						alt="LinkedIn"
					/>
				</a>
				<a
					href="https://github.com/staraii/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="./317712_code_repository_github_repository_resource_icon.svg"
						className="footer-github"
						alt="GitHub"
					/>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
