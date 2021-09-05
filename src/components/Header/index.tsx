import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Frame, Logo, NormalLink } from "./style/header";

interface props {
	to: string;
	children?: any;
	src?: string;
}

interface composition {
	Frame: FC;
	Logo: FC<props>;
	Link: FC<props>;
}

export const Header: FC & composition = ({ children }) => {
	return <Container>{children}</Container>;
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
