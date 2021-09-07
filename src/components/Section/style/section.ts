import styled from "styled-components/macro";
import { Heading3, Heading2 } from "../../UI/typography/style/typo";
import { Link as RouterLink } from "react-router-dom";

export interface design {
	type: "web" | "app" | "graphic";
	isBig?: boolean;
	Image?: string;
}

export const Container = styled.div`
	max-width: 111rem;
	height: 64rem;
	margin: 16rem auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	row-gap: 2.4rem;
	column-gap: 3rem;
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
	background-image: url(${({ Image }) => Image});
	background-size: cover;
	background-position: center;
	grid-row: ${({ type }) => (type === "web" ? `span 2` : null)};
	grid-row: ${({ isBig }) => (!isBig ? `span 1` : null)};
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;

	&:hover ${Mask} {
		opacity: 0.8;
	}

	&:hover ${SmallText} svg {
		margin-left: 3rem;
	}
`;

export const BigText = styled(Heading2)`
	color: ${({ theme }) => theme.white};
	text-transform: uppercase;
`;

export const Frame = styled.div`
	height: 9.4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	z-index: 2;
`;
