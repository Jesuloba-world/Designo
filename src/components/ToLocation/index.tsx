import { FC } from "react";
import {
	Container,
	Oval,
	MainFrame,
	Frame,
	Name,
	ovalTypes,
} from "./style/toLocation";
import { Button } from "../../components";

interface button {
	onClick: () => void;
}

interface composition {
	Oval: FC<ovalTypes>;
	MainFrame: FC;
	Frame: FC;
	Name: FC;
	Button: FC<button>;
}

export const ToLocation: FC & composition = ({ children }) => {
	return <Container>{children}</Container>;
};

ToLocation.Oval = ({ children, country }) => {
	return <Oval country={country}>{children}</Oval>;
};

ToLocation.MainFrame = ({ children }) => {
	return <MainFrame>{children}</MainFrame>;
};

ToLocation.Frame = ({ children }) => {
	return <Frame>{children}</Frame>;
};

ToLocation.Name = ({ children }) => {
	return <Name>{children}</Name>;
};

ToLocation.Button = ({ children, onClick }) => {
	return <Button.Dark onClick={onClick}>{children}</Button.Dark>;
};
