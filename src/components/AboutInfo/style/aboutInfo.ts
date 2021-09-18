import styled from "styled-components/macro";
import { Heading2, Body } from "../../UI/typography/style/typo";
import { devices } from "../../devices";

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

	@media ${devices.tablet} {
		height: 73.6rem;
		margin-bottom: 12rem;
	}

	@media ${devices.tablet700} {
		border-radius: 0;
	}

	@media ${devices.tablet500} {
		height: 86.5rem;
	}
`;

export const Mask = styled.div<reverse>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	${({ reverse }) => (reverse ? "flex-direction: row-reverse" : null)};

	@media ${devices.tablet} {
		flex-direction: column;
	}
`;

export const Image = styled.img`
	width: 42.88%;
	object-fit: cover;

	@media ${devices.tablet} {
		width: 100%;
		height: 32rem;
	}
`;

export const Frame = styled.div`
	padding: 0 9.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2.4rem;

	@media ${devices.tablet} {
		padding: 0 5.8rem;
		align-items: center;
		height: 100%;
	}

	@media ${devices.tablet500} {
		padding: 0 2.4rem;
	}
`;

export const Title = styled(Heading2)`
	color: ${({ theme }) => theme.peach};

	@media ${devices.tablet500} {
		font-size: 3.2rem;
		line-height: 3.6rem;
	}
`;

export const Subtitle = styled(Body)`
	@media ${devices.tablet} {
		text-align: center;
	}

	@media ${devices.tablet500} {
		font-size: 15px;
		line-height: 25px;
	}
`;
