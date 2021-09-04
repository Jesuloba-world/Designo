import styled from "styled-components/macro";

export const Body = styled.p`
	font-size: 1.6rem;
	line-height: 2.6rem;
	font-weight: 400;
	color: ${({ theme }) => theme.darkGrey};
`;

export const Heading1 = styled.h1`
	font-size: 4.8rem;
	line-height: 4.8rem;
	font-weight: 500;
	color: ${({ theme }) => theme.black};
`;

export const Heading2 = styled.h2`
	font-size: 4rem;
	line-height: 4.8rem;
	font-weight: 500;
	letter-spacing: 2px;
	color: ${({ theme }) => theme.black};
`;

export const Heading3 = styled.h3`
	font-size: 2rem;
	line-height: 2.6rem;
	font-weight: 500;
	letter-spacing: 5px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.darkGrey};
`;
