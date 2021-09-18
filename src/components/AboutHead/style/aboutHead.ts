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

	@media ${devices.tablet} {
		height: 63.2rem;
		margin-bottom: 12rem;
	}

	@media ${devices.tablet700} {
		border-radius: 0;
	}

	@media ${devices.tablet500} {
		height: 71.5rem;
		margin-bottom: 0;
	}
`;

export const Mask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 4fr 3fr;

	@media ${devices.tablet} {
		grid-template-columns: 100%;
		grid-template-rows: 32rem auto;
	}
`;

export const Frame = styled.div`
	padding: 0 8.2rem 0 9.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 3.2rem;

	@media ${devices.tablet} {
		padding: 0 5.8rem;
		grid-row: 2;
		align-items: center;
	}

	@media ${devices.tablet500} {
		gap: 2.4rem;
		padding: 0 2.4rem;
	}
`;

export const Title = styled(Heading1)`
	color: ${({ theme }) => theme.white};

	@media ${devices.tablet500} {
		font-size: 3.2rem;
		line-height: 3.6rem;
	}
`;

export const Subtitle = styled(Body)`
	color: ${({ theme }) => theme.white};

	@media ${devices.tablet} {
		text-align: center;
	}

	@media ${devices.tablet500} {
		font-size: 15px;
		line-height: 25px;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;

	@media ${devices.tablet} {
		height: 32rem;
	}
`;
