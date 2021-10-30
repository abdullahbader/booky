import styled, { createGlobalStyle } from "styled-components";

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
