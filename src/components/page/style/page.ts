import styled from "styled-components/macro";
import { devices } from "../../devices";

export const Page = styled.div`
	position: relative;

	@media ${devices.desktopL} {
		padding: 0 4rem;
	}

	@media ${devices.tablet700} {
		padding: 0;
	}
`;

export const Inner = styled.div`
	position: relative;

	@media ${devices.desktopL} {
		padding: 0 4rem;
	}

	@media ${devices.tablet700} {
		padding: 0 2.4rem;
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

		@media ${devices.desktopS} {
			display: none;
		}
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
