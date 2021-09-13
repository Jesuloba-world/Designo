import styled from "styled-components/macro";
import { Heading3, Heading2 } from "../../UI/typography/style/typo";
import { Link as RouterLink } from "react-router-dom";
import { devices } from "../../devices";

export interface section {
	isHome?: boolean;
}
export interface design {
	type?: "web" | "app" | "graphic";
	isbig?: boolean;
	image?: string;
}

export const Container = styled.div<section>`
	max-width: 111rem;
	margin: 16rem auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	row-gap: 2.5rem;
	column-gap: 3rem;
	${({ isHome }) =>
		isHome
			? `
	grid-template-rows:repeat(2, 1fr);
	height: 64rem;
	`
			: `
			grid-template-rows: 1fr;
			height: 30.8rem;
			`}

	@media ${devices.tablet} {
		grid-template-columns: 100%;
		grid-template-rows: auto;
		height: auto;
		margin: 12rem auto;
	}

	@media ${devices.tablet500} {
		margin: 9.6rem auto;
	}
`;

export const Mask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: ${({ theme }) => theme.peach};
	opacity: 0;
	transition: all 0.2s;
`;

export const SmallText = styled(Heading3)`
	color: ${({ theme }) => theme.white};
	font-size: 1.5rem;
	line-height: 2.2rem;

	& svg {
		margin-left: 2rem;
		transition: all 0.5s;
	}
`;

export const Design = styled(RouterLink)<design>`
	position: relative;
	border-radius: 1.5rem;
	background-image: url(${({ image }) => image});
	background-size: cover;
	background-position: center;
	grid-row: ${({ type }) => (type === "web" ? `span 2` : null)};
	grid-row: ${({ isbig }) => (!isbig ? `span 1` : null)};
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;

	@media ${devices.tablet} {
		grid-row: span 1;
		height: 20rem;
	}

	@media ${devices.tablet500} {
		height: 25rem;
	}

	&:hover ${Mask} {
		opacity: 0.6;
	}

	&:hover ${SmallText} svg {
		margin-left: 3rem;
	}
`;

export const BigText = styled(Heading2)`
	color: ${({ theme }) => theme.white};
	text-transform: uppercase;

	@media ${devices.tablet500} {
		font-size: 2.8rem;
		line-height: 3.6rem;
		letter-spacing: 1.4px;
	}
`;

export const Frame = styled.div`
	height: 9.4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	z-index: 2;
`;
