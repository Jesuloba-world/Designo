import { FC } from "react";
import {
	Container,
	BigText,
	SmallText,
	Frame,
	HeroImage,
	Mask,
	image,
} from "./style/hero";
import { Button } from "../../components";
import { ReactComponent as HeroBGpattern } from "../../assets/home/desktop/bg-pattern-hero-home.svg";

interface button {
	onClick: () => void;
}

interface composition {
	Mask: FC;
	Frame: FC;
	Image: FC<image>;
	BigText: FC;
	SmallText: FC;
	Button: FC<button>;
}

export const Hero: FC & composition = ({ children }) => {
	return (
		<Container>
			<HeroBGpattern />
			{children}
		</Container>
	);
};

Hero.Mask = ({ children }) => {
	return <Mask>{children}</Mask>;
};

Hero.Frame = ({ children }) => {
	return <Frame>{children}</Frame>;
};

Hero.Image = ({ src, alt }) => {
	return <HeroImage src={src} alt={alt} />;
};

Hero.BigText = ({ children }) => {
	return <BigText>{children}</BigText>;
};

Hero.SmallText = ({ children }) => {
	return <SmallText>{children}</SmallText>;
};

Hero.Button = ({ children, onClick }) => {
	return <Button.Light onClick={onClick}>{children}</Button.Light>;
};
