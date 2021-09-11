import { FC } from "react";
import {
	Container,
	Oval,
	Frame,
	Frame2,
	SmallText,
	ovalTypes,
} from "./style/feature";

interface composition {
	Frame: FC;
	Frame2: FC;
	SmallText: FC;
	Oval: FC<ovalTypes>;
}

export const Feature: FC & composition = ({ children }) => {
	return <Container>{children}</Container>;
};

Feature.Oval = ({ type, children }) => {
	return <Oval type={type}>{children}</Oval>;
};

Feature.Frame = ({ children }) => {
	return <Frame>{children}</Frame>;
};

Feature.Frame2 = ({ children }) => {
	return <Frame2>{children}</Frame2>;
};

Feature.SmallText = ({ children }) => {
	return <SmallText>{children}</SmallText>;
};
