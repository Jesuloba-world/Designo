import styled from "styled-components/macro";
import { Heading1, Body } from "../../UI/typography/style/typo";
import { devices } from "../../devices";

export const Container = styled.div`
	background-color: ${({ theme }) => theme.peach};
	height: 25.2rem;
	max-width: 111rem;
	margin: 0 auto;
	border-radius: 1.5rem;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	position: relative;

	@media ${devices.tablet700} {
		border-radius: 0;
	}
`;

export const Mask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	padding: 6.4rem 19rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media ${devices.tablet} {
		padding: 6.4rem 0;
	}
`;

export const TextBig = styled(Heading1)`
	color: ${({ theme }) => theme.white};
`;

export const TextSmall = styled(Body)`
	color: ${({ theme }) => theme.white};
	max-width: 40rem;
	text-align: center;
`;
