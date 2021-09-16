import styled from "styled-components/macro";
import { Heading2, Body } from "../../UI/typography/style/typo";

interface reverse {
	reverse: boolean | undefined;
}

export const Container = styled.div<reverse>`
	max-width: 111rem;
	height: 64rem;
	margin: 0 auto;
	border-radius: 1.5rem;
	overflow: hidden;
	margin-bottom: 16rem;
	position: relative;
	background-color: ${({ theme }) => theme.whitePeach};
	display: flex;
	align-items: flex-end;
	justify-content: center;
	${({ reverse }) =>
		reverse
			? "justify-content: flex-start"
			: `svg {
		position: absolute;
		bottom: 0;
		right: 19.7rem;
	}`};
`;

export const Mask = styled.div<reverse>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	${({ reverse }) => (reverse ? "flex-direction: row-reverse" : null)};
`;

export const Image = styled.img`
	width: 42.88%;
	object-fit: cover;
`;

export const Frame = styled.div`
	padding: 0 9.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2.4rem;
`;

export const Title = styled(Heading2)`
	color: ${({ theme }) => theme.peach};
`;

export const Subtitle = styled(Body)``;
