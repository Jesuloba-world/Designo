import styled from "styled-components/macro";
import { Body } from "../../UI/typography/style/typo";
import { devices } from "../../devices";

export interface ovalTypes {
	type: "passionate" | "resourceful" | "friendly";
}

export const Container = styled.div`
	max-width: 111rem;
	height: 41.2rem;
	margin: 0 auto;
	margin-bottom: 16rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 3rem;

	@media ${devices.tablet} {
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		row-gap: 3.2rem;
		height: auto;
		margin-bottom: 12rem;
	}

	@media ${devices.tablet600} {
		row-gap: 8rem;
	}

	@media ${devices.tablet500} {
		margin-bottom: 9.6rem;
	}
`;

export const Oval = styled.div<ovalTypes>`
	position: relative;

	@media ${devices.tablet} {
	margin-right: 4.8rem;
	}

	@media ${devices.tablet600} {
		margin-right: 0;
	}

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
			${({ type }) =>
				type === "passionate"
					? "-1, 0, 0, 1, 0, 0"
					: type === "resourceful"
					? "0, 1, 1, 0, 0, 0"
					: type === "friendly"
					? "0, -1, -1, 0, 0, 0"
					: null}
		);
	}

	svg {
		z-index: 2;
	}
`;

export const Frame = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media ${devices.tablet} {
		flex-direction: row;
	}

	@media ${devices.tablet600} {
		flex-direction: column;
		row-gap: 4.8rem;
	}
`;

export const Frame2 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 16.2rem;
	justify-content: space-between;

	@media ${devices.tablet} {
		height: 12rem;
		width: auto;
		align-items: flex-start;
	}

	@media ${devices.tablet600} {
		align-items: center;
		height: 16.2rem;
		row-gap: 3.2rem;
		height: auto;
	}
`;

export const SmallText = styled(Body)`
	text-align: center;

	@media ${devices.tablet} {
		text-align: left;
	}

	@media ${devices.tablet600} {
		text-align: center;
	}
`;
