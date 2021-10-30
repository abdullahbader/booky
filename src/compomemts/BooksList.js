import books from "../books";
import { ListWrapper } from "../style";
import BookItem from "./BooksItem";
const BooksList = () => {
	const bookList = books.map((book) => <BookItem book={book} key={book.id} />);
	return <ListWrapper> {bookList}</ListWrapper>;
};

export default BooksList;
