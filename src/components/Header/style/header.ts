import styled from "styled-components/macro";
import { Link as RouterLink } from "react-router-dom";

export const Padder = styled.div`
	@media (max-width: 111rem) {
		padding: 0 4rem;
	}
`;

export const Container = styled.div`
	max-width: 111rem;
	margin: 0 auto;
	padding: 6.4rem 0;
`;

export const Frame = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
`;
