import { useState } from "react";
import { Link } from "react-router-dom";
import { Title, BookImage, BookWrapper, DeleteButtonStyled } from "../style";
import BookDetails from "./BookDetails";
import DeleteButton from "./DeleteButton";
const BookItem = (props) => {
	const book = props.book;

	return (
		<BookWrapper>
			<Link to={`/books/${book.slug}`}>
				<BookImage
					onClick={() => props.setBookDetail(book)}
					alt={book.name}
					src={book.image}
				/>
			</Link>
			<Title className="text">{book.name}</Title>
			<book-price className="book-price">{book.price} KD</book-price>
			<DeleteButton book={book.id} deleteBook={props.deleteBook}>
				DELTE
			</DeleteButton>
		</BookWrapper>
	);
};
export default BookItem;
