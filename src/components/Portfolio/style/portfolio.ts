import styled from "styled-components/macro";
import { Link as RouterLink } from "react-router-dom";
import { Heading3, Body } from "../../UI/typography/style/typo";
import { devices } from "../../devices";

export const Container = styled.div`
	max-width: 111rem;
	margin: 16rem auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 3rem;
	row-gap: 3.2rem;

	@media ${devices.tablet} {
		grid-template-columns: 100%;
		grid-auto-rows: 31rem;
		margin: 12rem auto;
	}

	@media ${devices.tablet500} {
		margin: 9.6rem auto;
		grid-auto-rows: auto;
	}
`;

export const Frame = styled.div`
	height: 15.8rem;
	padding: 3.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.whitePeach};
	/* gap: 1.5rem; */
	transition: all 0.3s;

	@media ${devices.tablet} {
		height: 100%;
		justify-content: center;
	}

	@media ${devices.tablet500} {
		height: 15.8rem;
		padding: 3.2rem 2.4rem;
	}
`;

export const ImageContainer = styled.div`
	overflow: hidden;
`;

export const Image = styled.img`
	width: 100%;
	height: 32rem;
	object-fit: cover;
	transition: all 0.7s;

	@media ${devices.tablet} {
		height: 100%;
	}

	@media ${devices.tablet500} {
		height: 32rem;
	}
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

	@media ${devices.tablet} {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${devices.tablet500} {
		display: block;
	}

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
