import { Title, BookImage, DetailWrapper } from "../style";
import DeleteButton from "./DeleteButton";
import { useParams, Redirect } from "react-router-dom";

const BookDetails = (props) => {
	// const book = props.books[0];
	const bookSlug = useParams().bookSlug;
	const book = props.books.find((book) => book.slug === bookSlug);
	if (!book) return <Redirect to="/books" />;
	return (
		<DetailWrapper>
			<BookImage alt={book.name} src={book.image} />
			<Title className="text">{book.name}</Title>
			<book-price className="book-price">{book.price} KD</book-price>
			<p>{book.describtion}</p>
			<DeleteButton book={book.id} deleteBook={props.deleteBook}>
				DELTE
			</DeleteButton>{" "}
		</DetailWrapper>
	);
};
export default BookDetails;
