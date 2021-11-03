import { useState } from "react";
import books from "../books";
import { ListWrapper } from "../style";
import BookItem from "./BooksItem";
import SearchBar from "./SearchBar";

const BooksList = (props) => {
	const [query, setQuery] = useState("");

	const bookList = props.books
		.filter((book) => book.name.includes(query))
		.map((book) => (
			<BookItem
				book={book}
				setBookDetail={props.setBookDetail}
				key={book.id}
				deleteBook={props.deleteBook}
			/>
		));
	return (
		<>
			<SearchBar setQuery={setQuery} />
			<ListWrapper> {bookList}</ListWrapper>;
		</>
	);
};

export default BooksList;
