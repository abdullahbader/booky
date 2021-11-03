import React from "react";
import { DeleteButtonStyled } from "../style";

const DeleteButton = (props) => {
	const handleDelete = () => {
		props.deleteBook(props.book);
	};
	return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};
export default DeleteButton;
