import styled from "styled-components/macro";

export const Page = styled.div`
	position: relative;
	/* z-index: 1; */

	@media (max-width: 111rem) {
		padding: 0 4rem;
	}
`;

export const LeafContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: -1;

	svg {
		position: absolute;
	}

	svg:first-of-type {
		top: 32rem;
		left: 0;
	}

	svg:last-of-type {
		right: 0;
		bottom: -30rem;
		transform: rotate(180deg);
	}
`;
