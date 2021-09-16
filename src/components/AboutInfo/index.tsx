import { FC } from "react";
import {
	Container,
	Image,
	Frame,
	Title,
	Subtitle,
	Mask,
} from "./style/aboutInfo";
import { ReactComponent as ThreeCircles } from "../../assets/shared/desktop/bg-pattern-three-circles.svg";
import { ReactComponent as TwoCircles } from "../../assets/shared/desktop/bg-pattern-two-circles.svg";

interface props {
	reverse?: boolean;
	title: string;
	subtitle: string;
	image: {
		src: string;
		alt: string;
	};
}

export const AboutInfo: FC<props> = ({ reverse, title, subtitle, image }) => {
	const subs = subtitle.split("/");

	return (
		<Container reverse={reverse}>
			{reverse ? <TwoCircles /> : <ThreeCircles />}
			<Mask reverse={reverse}>
				<Image src={image.src} alt={image.alt} />
				<Frame>
					<Title>{title}</Title>
					<Subtitle>{subs[0]}</Subtitle>
					<Subtitle>{subs[1]}</Subtitle>
				</Frame>
			</Mask>
		</Container>
	);
};
