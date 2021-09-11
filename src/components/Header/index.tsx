import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
	Container,
	Frame,
	Logo,
	NormalLink,
	Padder,
	NavButton,
	BackDrop,
	NavBar,
	clickable,
} from "./style/header";

interface props {
	to: string;
	children?: any;
	src?: string;
}

interface composition {
	Frame: FC;
	Logo: FC<props>;
	Link: FC<props>;
	Button: FC<clickable>;
	BackDrop: FC<clickable>;
	NavBar: FC;
}

export const Header: FC & composition = ({ children }) => {
	return (
		<Padder>
			<Container>{children}</Container>
		</Padder>
	);
};

Header.Frame = ({ children }) => {
	return <Frame>{children}</Frame>;
};

Header.Logo = ({ to, src }) => {
	return (
		<RouterLink to={to}>
			<Logo src={src} />
		</RouterLink>
	);
};

Header.Link = ({ to, children }) => {
	return <NormalLink to={to}>{children}</NormalLink>;
};

Header.Button = ({ onClick, children }) => {
	return <NavButton onClick={onClick}>{children}</NavButton>;
};

Header.BackDrop = ({ onClick, children }) => {
	return <BackDrop onClick={onClick}>{children}</BackDrop>;
};

Header.NavBar = ({ children }) => {
	return <NavBar>{children}</NavBar>;
};
