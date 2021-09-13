import { FC } from "react";
import {
	Container,
	Project,
	Image,
	Frame,
	Title,
	Subtitle,
	ImageContainer,
} from "./style/portfolio";

interface project {
	image: string;
	title: string;
	subtitle: string;
}

interface composition {
	Project: FC<project>;
}

export const Portfolio: FC & composition = ({ children }) => {
	return <Container>{children}</Container>;
};

Portfolio.Project = ({ image, title, subtitle }) => {
	return (
		<Project to="#">
			<ImageContainer>
				<Image src={image} alt={title + " image"} />
			</ImageContainer>
			<Frame>
				<Title>{title}</Title>
				<Subtitle>{subtitle}</Subtitle>
			</Frame>
		</Project>
	);
};
