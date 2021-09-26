import styled from "styled-components/macro";

const Button = styled.button`
	border-radius: 8px;
	border: none;
	height: 5.6rem;
	width: 15.2rem;
	font-weight: 500;
	font-size: 1.5rem;
	line-height: 2.2rem;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: all 0.15s;
	cursor: pointer;

	&:hover {
		background: ${({ theme }) => theme.lightPeach};
		color: ${({ theme }) => theme.white};
	}
`;

export const Light = styled(Button)`
	background: ${({ theme }) => theme.white};
	color: ${({ theme }) => theme.darkGrey};
`;

export const Dark = styled(Button)`
	background: ${({ theme }) => theme.peach};
	color: ${({ theme }) => theme.white};
`;
