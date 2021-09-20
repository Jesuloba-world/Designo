import styled from "styled-components/macro";
import { Heading2, Body } from "../../UI/typography/style/typo";

export interface place {
	reverse?: boolean;
}

export const Container = styled.div`
	max-width: 111rem;
	margin: 0 auto;
	margin-bottom: 16rem;
	display: grid;
	grid-template-rows: repeat(3, 32.6rem);
	row-gap: 3.2rem;
`;

export const Place = styled.div<place>`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 3rem;
	grid-template-areas: ${({ reverse }) =>
		reverse ? `"map frame frame"` : `"frame frame map"`};
`;

export const Frame = styled.div`
	background-color: ${({ theme }) => theme.whitePeach};
	grid-area: frame;
	border-radius: 1.5rem;
	overflow: hidden;
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	position: relative;
`;

export const Mask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const InnerFrame = styled.div`
	height: 15rem;
	width: 54rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 3rem;
	grid-template-rows: auto auto;
	row-gap: 2.4rem;
`;

export const Map = styled.div`
	grid-area: map;
	border-radius: 1.5rem;
	overflow: hidden;
`;

export const MapImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const Country = styled(Heading2)`
	grid-column: 1 / span 2;
	color: ${({ theme }) => theme.peach};
`;

export const Address = styled.div``;

export const Contact = styled.div``;

export const TextBold = styled(Body)`
	font-size: 1.6rem;
	font-weight: bold;
	line-height: 2.6rem;
	color: ${({ theme }) => theme.darkGrey};
	opacity: 0.5;
`;

export const TextNormal = styled(TextBold)`
	font-weight: normal;
`;
