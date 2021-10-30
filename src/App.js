import logo from "./logo.svg";
import "./App.css";
import Home from "./compomemts/Home";
import BooksList from "./compomemts/BooksList";
import books from "./books";
import { GlobalStyle, ThemeButton } from "./style";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
	const theme = {
		light: {
			mainColor: "#242424", // main font color
			backgroundColor: "#fefafb", // main background color
			pink: "#ff85a2",
		},
		dark: {
			mainColor: "#fefafb", // main font color
			backgroundColor: "#242424", // main background color
			pink: "#ff85a2",
		},
	};
	const [currentTheme, setCurrentTheme] = useState("light");
	const toggleTheme = () =>
		setCurrentTheme(currentTheme === "light" ? "dark" : "light");

	return (
		<div>
			<ThemeProvider theme={theme[currentTheme]}>
				<GlobalStyle />
				<ThemeButton onClick={toggleTheme}>
					{currentTheme === "light" ? "Dark mode" : "light mode"}
				</ThemeButton>
				<Home />
				<BooksList />
			</ThemeProvider>
		</div>
	);
}

export default App;
