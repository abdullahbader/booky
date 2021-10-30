import { Title, BookImage, BookWrapper } from "../style";
const BookItem = (props) => {
	const book = props.book;
	return (
		<BookWrapper>
			<BookImage alt={book.name} src={book.image} />
			<Title className="text">{book.name}</Title>
			<book-price className="book-price">{book.price} KD</book-price>
		</BookWrapper>
	);
};
export default BookItem;
