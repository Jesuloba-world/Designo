import styled from "styled-components/macro";
import { Link as RouterLink } from "react-router-dom";
import { Heading3, Body } from "../../UI/typography/style/typo";

export const Container = styled.div`
	max-width: 111rem;
	margin: 16rem auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 3rem;
	row-gap: 3.2rem;
`;

export const Frame = styled.div`
	height: 15.8rem;
	padding: 3.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.whitePeach};

	transition: all 0.3s;
`;

export const ImageContainer = styled.div`
	overflow: hidden;
`;

export const Image = styled.img`
	width: 100%;
	height: 32rem;
	object-fit: cover;
	transition: all 0.7s;
`;

export const Title = styled(Heading3)`
	color: ${({ theme }) => theme.peach};
`;

export const Subtitle = styled(Body)`
	text-align: center;
`;

export const Project = styled(RouterLink)`
	border-radius: 1.5rem;
	overflow: hidden;
	text-decoration: none;

	&:hover ${Frame} {
		background-color: ${({ theme }) => theme.peach};
	}

	&:hover ${Title} {
		color: ${({ theme }) => theme.white};
	}

	&:hover ${Subtitle} {
		color: ${({ theme }) => theme.white};
	}

	&:hover ${Image} {
		transform: scale(1.1);
	}
`;
