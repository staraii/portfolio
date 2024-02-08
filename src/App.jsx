import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home.jsx";
import Projects from "./views/Projects.jsx";
import Contact from "./views/Contact.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
	return (
		<Router>
			<div className="background-container">
				<NavBar />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/portfolio" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
