import styled from "styled-components/macro";
import { Link as RouterLink } from "react-router-dom";
import { devices } from "../../devices";

export interface clickable {
	onClick: () => void;
}

export const Padder = styled.div`
	@media ${devices.desktopL} {
		padding: 0 4rem;
	}

	@media ${devices.tablet700} {
		padding: 0 2.4rem;
	}
`;

export const Container = styled.div`
	max-width: 111rem;
	margin: 0 auto;
	padding: 6.4rem 0;

	@media ${devices.tablet600} {
		padding: 3.5rem 0;
	}
`;

export const Frame = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	svg {
		display: none;
	}

	@media ${devices.tablet600} {
		svg {
			display: block;
		}
	}
`;

export const Logo = styled.img`
	height: 2.4rem;
	width: 19.6rem;
`;

export const NormalLink = styled(RouterLink)`
	&:link,
	&:visited {
		font-size: 1.4rem;
		line-height: 1.4rem;
		font-weight: 400;
		text-decoration: none;
		color: ${({ theme }) => theme.darkGrey};
		text-transform: uppercase;

		&:not(:last-child) {
			margin-right: 4.2rem;
		}
	}

	&:hover,
	&:active {
		text-decoration: underline;
	}

	@media ${devices.tablet600} {
		display: none;
	}
`;

export const NavButton = styled.button<clickable>`
	background-color: transparent;
	border: none;

	&:focus-visible {
		outline: none;
	}
`;

export const BackDrop = styled.div<clickable>`
	position: absolute;
	bottom: 0;
	left: 0;
	height: calc(100% - 9.6rem);
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
`;

export const NavBar = styled.div`
	box-sizing: content-box;
	background-color: ${({ theme }) => theme.black};
	padding: 4.8rem 2.4rem;
	height: 14rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	${NormalLink} {
		display: block;
		font-size: 2.4rem;
		line-height: 2.5rem;
		letter-spacing: 2px;
		color: ${({ theme }) => theme.white};
	}
`;
