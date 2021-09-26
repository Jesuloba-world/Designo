import styled from "styled-components/macro";
import { Link as RouterLink } from "react-router-dom";
import { devices } from "../../devices";

export interface link {
	links?: boolean;
}

interface footer {
	path: string;
}

export const Container = styled.div<footer>`
	background-color: ${({ theme }) => theme.black};
	width: 100%;
	padding: 14.4rem 0 7.2rem 0;
	height: 100%;
	${({ path }) => (path === "/contact" ? `padding-top: 7.2rem;` : null)}

	@media ${devices.desktopL} {
		padding: 14.4rem 4rem 7.2rem 4rem;
		${({ path }) => (path === "/contact" ? `padding-top: 7.2rem;` : null)}
	}

	@media ${devices.tablet700} {
		padding: 14.4rem 2.4rem 7.2rem 2.4rem;
		${({ path }) => (path === "/contact" ? `padding-top: 7.2rem;` : null)}
	}

	@media ${devices.tablet500} {
		padding: 25.3rem 2.4rem 7.2rem 2.4rem;
		${({ path }) => (path === "/contact" ? `padding-top: 7.2rem;` : null)}
	}
`;

export const Frame = styled.div<link>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media ${devices.tablet600} {
		display: block;
		text-align: center;
		margin-bottom: 4rem;
	}

	@media ${devices.tablet500} {
		${({ links }) =>
			links
				? `display: flex;
		flex-direction: column;
		width: 100%;
		align-items: stretch;
		row-gap: 3.2rem`
				: null}
	}
`;

export const LogoLink = styled(RouterLink)`
	display: block;

	&::after {
		content: "";
		display: none;
		height: 1px;
		background-color: ${({ theme }) => theme.white};
		opacity: 0.1;
		margin: 3.2rem 0;

		@media ${devices.tablet600} {
			display: block;
		}
	}
`;

export const TopFrame = styled.div`
	max-width: 111rem;
	margin: 0 auto;

	&::after {
		content: "";
		display: block;
		height: 1px;
		background-color: ${({ theme }) => theme.white};
		opacity: 0.1;
		margin-top: 4rem;
		margin-bottom: 3rem;

		@media ${devices.tablet600} {
			display: none;
		}
	}
`;

export const BottomFrame = styled.div`
	max-width: 111rem;
	margin: 0 auto;

	display: grid;
	grid-template-columns: repeat(3, 1fr);

	@media ${devices.tablet700} {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
		row-gap: 4rem;
	}

	@media ${devices.tablet500} {
		grid-template-columns: 1fr;
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
		color: ${({ theme }) => theme.white};
		text-transform: uppercase;
		width: auto;

		&:not(:last-child) {
			margin-right: 4.2rem;

			@media ${devices.tablet500} {
				margin-right: 0;
			}
		}
	}

	&:hover,
	&:active {
		text-decoration: underline;
	}
`;

export const Address = styled.div`
	@media ${devices.tablet700} {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const Contact = styled(Address)`
	@media ${devices.tablet500} {
		grid-row: 2;
	}
`;

export const Text = styled.p`
	font-size: 1.6rem;
	font-weight: bold;
	line-height: 2.6rem;
	color: ${({ theme }) => theme.white};
	opacity: 0.5;
`;

export const TextLight = styled(Text)`
	font-weight: normal;
`;

export const ContactIcons = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;

	@media ${devices.tablet700} {
		align-items: center;
		justify-content: center;
		grid-column: span 2;
	}
`;

export const Icon = styled(RouterLink)`
	&:not(:last-of-type) {
		margin-right: 1.6rem;
	}
`;
