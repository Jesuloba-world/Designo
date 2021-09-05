import { FC } from "react";
import { Button } from "../index";
import {
	Container,
	BigText,
	SmallText,
	Frame,
	frame,
	Overlay,
} from "./style/CTA";
import { ReactComponent as CTAsvg } from "../../assets/shared/desktop/bg-pattern-call-to-action.svg";

interface button {
	onClick: () => void;
}

interface composition {
	Overlay: FC;
	Frame: FC<frame>;
	BigText: FC;
	SmallText: FC;
	Button: FC<button>;
}

export const CTA: FC & composition = ({ children }) => {
	return (
		<Container>
			<CTAsvg />
			{children}
		</Container>
	);
};

CTA.Overlay = ({ children }) => {
	return <Overlay>{children}</Overlay>;
};

CTA.Frame = ({ children, isLeft }) => {
	return <Frame isLeft={isLeft}>{children}</Frame>;
};

CTA.BigText = ({ children }) => {
	return <BigText>{children}</BigText>;
};

CTA.SmallText = ({ children }) => {
	return <SmallText>{children}</SmallText>;
};

CTA.Button = ({ children, onClick }) => {
	return <Button.Light onClick={onClick}>{children}</Button.Light>;
};
