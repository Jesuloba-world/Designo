import { FC } from "react";
import {
	Container,
	Mask,
	Frame,
	Title,
	Subtitle,
	Image,
} from "./style/aboutHead";
import { ReactComponent as HeroSvg } from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";
import { ReactComponent as HeroSvgMobile } from "../../assets/about/mobile/bg-pattern-hero-about-mobile.svg";

interface imageProps {
	src: string;
	alt: string;
}

interface composition {
	Frame: FC;
	Title: FC;
	Subtitle: FC;
	Image: FC<imageProps>;
}

export const AboutHead: FC & composition = ({ children }) => (
	<Container>
		<HeroSvg />
		<Mask>{children}</Mask>
	</Container>
);

AboutHead.Frame = ({ children }) => <Frame>{children}</Frame>;

AboutHead.Title = ({ children }) => <Title>{children}</Title>;

AboutHead.Subtitle = ({ children }) => <Subtitle>{children}</Subtitle>;

AboutHead.Image = ({ src, alt }) => <Image src={src} alt={alt} />;
