import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import "../index.css";
import "./NavBar.css";

function NavBar() {
	return (
		<nav className="navBar">
			<NavLink to="/" className="navLink">
				HOME
			</NavLink>
			<NavLink to="/projects" className="navLink">
				PROJECTS
			</NavLink>
			<NavLink to="/contact" className="navLink">
				CONTACT
			</NavLink>
			<DarkModeToggle />
		</nav>
	);
}

export default NavBar;
