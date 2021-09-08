import { FC } from "react";
import { Container, Frame, SmallText } from "./style/feature";

interface composition {
	Frame: FC;
	SmallText: FC;
}

export const Feature: FC & composition = ({ children }) => {
	return <Container>{children}</Container>;
};

Feature.Frame = ({ children }) => {
	return <Frame>{children}</Frame>;
};

Feature.SmallText = ({ children }) => {
	return <SmallText>{children}</SmallText>;
};
