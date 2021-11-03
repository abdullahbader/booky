import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }`;

export const Title = styled.h1`
	text-align: center;
	color: purple;
`;

export const BookImage = styled.img`
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 10%;
`;

export const ListWrapper = styled.div`
	align-items: center;
	justify-content: center;
	display: flex;
`;

export const BookWrapper = styled.div`
	margin: 20px;
	img {
		width: 200px;
		height: 200px;
	}
	p {
		text-align: center;
	}
`;

export const ThemeButton = styled.button`
	font-size: 1em;
	margin: 1.25em;
	padding: 0.25em 1em;
	border-radius: 3px;
	background-color: ${(props) => props.theme.pi};
	color: ${(props) => props.theme.backgroundColor};
`;

export const SearchBarStyled = styled.input`
	padding: 0.5rem;
	margin: 1rem auto;
	display: block;
	width: 40%;
`;

export const DetailWrapper = styled.div`
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 80%;
	img {
		width: 40%;
		float: left;
	}
	p {
		vertical-align: middle;
	}
`;
export const DeleteButtonStyled = styled.button`
	font-size: 1em;
	margin: 1.25em;
	padding: 0.25em 1em;
	border-radius: 3px;
	color: ${(props) => props.theme.red};
`;
export const Logo = styled(Link)`
	padding: 0.75em;

	img {
		width: 8rem;
	}
`;

export const NavItem = styled(NavLink)`
	padding: 0.25em 1em;
	color: ${(props) => props.theme.mainColor};

	&.active {
		color: ${(props) => props.theme.pink};
		background-color: green;
	}
`;
