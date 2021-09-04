import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Frame, Logo, NormalLink } from "./style/header";

interface linkProps {
	to: string;
	children?: any;
	src?: string;
}

interface composition {
	Frame: FC;
	Logo: FC<linkProps>;
	Link: FC<linkProps>;
}

export const Header: FC & composition = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Header.Frame = ({ children, ...restProps }) => {
	return <Frame {...restProps}>{children}</Frame>;
};

Header.Logo = ({ to, src }) => {
	return (
		<RouterLink to={to}>
			<Logo src={src} />
		</RouterLink>
	);
};

Header.Link = ({ to, children, ...restProps }) => {
	return (
		<NormalLink to={to} {...restProps}>
			{children}
		</NormalLink>
	);
};
