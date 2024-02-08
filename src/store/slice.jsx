import { createSlice } from "@reduxjs/toolkit";

// Ursprungsvärdet för redux/state
const initialState = {
	isDarkMode:
		// Kontrollerar om det finns tidigare val lagrat i localstorage
		localStorage.getItem("isDarkMode") != undefined
			? // Finns det; används parse-funktionen för att omvandla datan från json till string-format
			JSON.parse(localStorage.getItem("isDarkMode"))
			: // Fanns inget tidigare val lagrat, då sätts  state till false vilket ger light mode som default.
			false,
};
// En slice skapat med hjälp utav redux toolkit, förenklar processen, skapar automatiskt actions mm.
export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		// reducer som utgör funktionen som redux kallar på.
		toggleTheme: (state) => {
			// ändrar state-värdet till det motsatta av vad det är
			(state.isDarkMode = !state.isDarkMode),
				localStorage.setItem("isDarkMode", state.isDarkMode);
			// beroende på vad state(isDarkMode) har för värde sätts attributen "data-theme" på body-elementet till dark respektive light
			document
				.querySelector("body")
				.setAttribute(
					"data-theme",
					`${state.isDarkMode ? "dark" : "light"}`
				);
		},
	},
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
