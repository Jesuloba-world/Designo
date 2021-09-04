import { FC } from "react";
import { Body, Heading1, Heading2, Heading3 } from "./style/typo";

interface composition {
	H1: FC;
	H2: FC;
	H3: FC;
}

export const Typo: FC & composition = ({ children, ...restProps }) => {
	return <Body {...restProps}>{children}</Body>;
};

Typo.H1 = ({ children, ...restProps }) => {
	return <Heading1 {...restProps}>{children}</Heading1>;
};

Typo.H2 = ({ children, ...restProps }) => {
	return <Heading2 {...restProps}>{children}</Heading2>;
};

Typo.H3 = ({ children, ...restProps }) => {
	return <Heading3 {...restProps}>{children}</Heading3>;
};
