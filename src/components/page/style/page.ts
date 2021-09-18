import styled from "styled-components/macro";
import { devices } from "../../devices";

interface leaf {
	path: string;
}

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

	@media ${devices.tablet700} {
		padding: 0 2.4rem;
	}
`;

export const LeafContainer = styled.div<leaf>`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: -1;
	${({ path }) => (path === "/about" ? "overflow: hidden;" : null)}

	svg {
		position: absolute;

		@media ${devices.desktopS} {
			display: none;
		}
	}

	svg:first-of-type {
		top: 32rem;
		left: 0;
		${({ path }) =>
			path === "/web-design" ||
			path === "/app-design" ||
			path === "/graphic-design"
				? `top: 12.6rem`
				: null}
	}

	svg:last-of-type {
		right: 0;
		bottom: -30rem;
		transform: rotate(180deg);
		${({ path }) => (path !== "/" ? "display: none;" : null)}
		${({ path }) =>
			path === "/about"
				? `
				display: block; 
				transform: rotate(0) translateX(50%);
				bottom: 38.8rem;

				@media ${devices.desktopS} {
					display: none;
				}
				`
				: null}
	}
`;
