import styled from "styled-components/macro";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
	background-color: ${({ theme }) => theme.black};
	width: 100%;
	padding: 14.4rem 0 7.2rem 0;
	height: 100%;

	@media (max-width: 111rem) {
		padding: 14.4rem 4rem 7.2rem 4rem;
	}
`;

export const Frame = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
	}
`;

export const BottomFrame = styled.div`
	max-width: 111rem;
	margin: 0 auto;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
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

		&:not(:last-child) {
			margin-right: 4.2rem;
		}
	}

	&:hover,
	&:active {
		text-decoration: underline;
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
`;

export const Icon = styled(RouterLink)`
	&:not(:last-of-type) {
		margin-right: 1.6rem;
	}
`;
