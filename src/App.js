import logo from "./logo.svg";
import "./App.css";
import Home from "./compomemts/Home";
import BooksList from "./compomemts/BooksList";
import books from "./books";
import { GlobalStyle, ThemeButton } from "./style";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import BookDetails from "./compomemts/BookDetails";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import NavBar from "./compomemts/NavBar";

function App() {
	const [_books, setBooks] = useState(books);

	const [bookDetail, setBookDetail] = useState("");
	const [currentTheme, setCurrentTheme] = useState("light");

	const theme = {
		light: {
			mainColor: "#242424", // main font color
			backgroundColor: "#fefafb", // main background color
			pink: "#ff85a2",
			red: "#ff3232",
		},
		dark: {
			mainColor: "#fefafb", // main font color
			backgroundColor: "#242424", // main background color
			pink: "#ff85a2",
			red: "#ff3232",
		},
	};

	const toggleTheme = () =>
		setCurrentTheme(currentTheme === "light" ? "dark" : "light");

	const deleteBook = (bookId) => {
		const updatedBooks = books.filter((book) => book.id !== bookId);
		setBooks(updatedBooks);
	};
	return (
		<>
			<ThemeProvider theme={theme[currentTheme]}>
				<GlobalStyle />
				<ThemeButton onClick={toggleTheme}>
					{currentTheme === "light" ? "Dark mode" : "light mode"}
				</ThemeButton>
				<Switch>
					<Route path="/books/:bookSlug">
						<BookDetails books={_books} deleteBook={deleteBook} />
					</Route>
					<Route path="/books">
						<BooksList
							setBookDetail={setBookDetail}
							books={_books}
							deleteBook={deleteBook}
						/>
					</Route>
					<Route path="/">
						<Home />
					</Route>

					<NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
				</Switch>
			</ThemeProvider>
		</>
	);
}

export default App;
