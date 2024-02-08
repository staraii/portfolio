import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toggleTheme } from "../store/slice.jsx";
import "./DarkModeToggle.css";

function DarkModeToggle() {
	// Ger en variabel värdet av funktionen useDispatch(), som används för att kalla på reducern som i sin tur ändrar värdet på state.
	const dispatch = useDispatch();
	// Variabeln isDarkMode får sitt värde genom useSelector som hämtar värdet från state och aktivt uppdaterar värdet om state förändras.
	const isDarkMode = useSelector((content) => content.theme.isDarkMode);

	// Vid första rendering(när sidan först laddas) sätts en data-attribut på "body"
	// Värdet hämtas från initialState som i sin tur hämtats från localStorage om det funnits ett tidigare val lagrat, annars default
	useEffect(() => {
		document
			.querySelector("body")
			.setAttribute("data-theme", `${isDarkMode ? "dark" : "light"}`);
	}, []);

	return (
		<div className="darkmode-toggle" id="darkmode-toggle-div">
			<input
				className="darkmode-toggle-checkbox"
				type="checkbox"
				id="darkmode-toggle"
				onChange={() => dispatch(toggleTheme())}
				checked={isDarkMode}
				aria-label="Dark mode toggle"
			></input>
			<label
				className="darkmode-toggle-label"
				htmlFor="darkmode-toggle"
			></label>
		</div>
	);
}

export default DarkModeToggle;
