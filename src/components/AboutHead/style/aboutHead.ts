import styled from "styled-components/macro";
import { devices } from "../../devices";
import { Heading1, Body } from "../../../components/UI/typography/style/typo";

export const Container = styled.div`
	background-color: ${({ theme }) => theme.peach};
	height: 48rem;
	max-width: 111rem;
	margin: 0 auto;
	border-radius: 1.5rem;
	overflow: hidden;
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	margin-bottom: 16rem;
	position: relative;

	@media ${devices.tablet700} {
		border-radius: 0;
	}

	/* @media ${devices.mobile} {
		height: 32rem;
	} */
`;

export const Mask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 4fr 3fr;
`;

export const Frame = styled.div`
	padding: 0 8.2rem 0 9.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 3.2rem;
`;

export const Title = styled(Heading1)`
	color: ${({ theme }) => theme.white};
`;

export const Subtitle = styled(Body)`
	color: ${({ theme }) => theme.white};
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
