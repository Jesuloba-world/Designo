import styled from "styled-components/macro";
import { Heading3 } from "../../UI/typography/style/typo";

export interface ovalTypes {
	country: "canada" | "australia" | "uk";
}

export const Container = styled.div`
	max-width: 111rem;
	/* height: 36.4rem; */
	margin: 0 auto;
	margin-bottom: 16rem;
	display: flex;
	justify-content: space-between;
`;

export const Oval = styled.div<ovalTypes>`
	position: relative;

	&::after {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(
			90deg,
			rgba(93, 2, 2, 0) 0%,
			rgba(93, 2, 2, 0.5) 100%
		);
		opacity: 0.2;
		border-radius: 50%;
		transform: matrix(
			${({ country }) =>
				country === "australia"
					? "-1, 0, 0, 1, 0, 0"
					: country === "uk"
					? "0, 1, 1, 0, 0, 0"
					: country === "canada"
					? "0, -1, -1, 0, 0, 0"
					: null}
		);
	}

	svg {
		z-index: 2;
	}
`;

export const MainFrame = styled.div`
	width: 35rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4.8rem;
`;

export const Frame = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3.2rem;
`;

export const Name = styled(Heading3)``;
