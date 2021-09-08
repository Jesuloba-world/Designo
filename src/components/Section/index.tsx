import { FC } from "react";
import {
	Container,
	Design,
	Mask,
	SmallText,
	Frame,
	BigText,
	design,
	section,
} from "./style/section";
import WebImageBig from "../../assets/home/desktop/image-web-design-large.jpg";
import WebImageSmall from "../../assets/home/desktop/image-web-design-small.jpg";
import AppImage from "../../assets/home/desktop/image-app-design.jpg";
import GraphicImage from "../../assets/home/desktop/image-graphic-design.jpg";
import { ReactComponent as Arrow } from "../../assets/shared/desktop/icon-right-arrow.svg";

interface composition {
	Design: FC<design>;
}

export const Section: FC<section> & composition = ({ isHome, children }) => {
	return <Container isHome={isHome}>{children}</Container>;
};

Section.Design = ({ type, isBig }) => {
	let Image;

	switch (type) {
		case "app":
			Image = AppImage;
			break;
		case "graphic":
			Image = GraphicImage;
			break;
		case "web":
			Image = isBig ? WebImageBig : WebImageSmall;
			break;
	}

	console.log(Image);

	return (
		<Design type={type} Image={Image} isBig={isBig} to={`${type}-design`}>
			<Mask />
			<Frame>
				<BigText>{type} design</BigText>
				<SmallText>
					View projects
					<Arrow />
				</SmallText>
			</Frame>
		</Design>
	);
};
