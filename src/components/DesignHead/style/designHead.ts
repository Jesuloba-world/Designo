import styled from "styled-components/macro";
import { Heading1, Body } from "../../UI/typography/style/typo";
import { devices } from "../../devices";

export interface props {
	type: "web" | "app" | "graphic";
}

export const Container = styled.div<props>`
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

	${({ type }) => (type !== "web" ? `justify-content: flex-start;` : null)}

	@media ${devices.tablet700} {
		border-radius: 0;
	}

	@media ${devices.mobile} {
		height: 32rem;
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

	@media ${devices.mobile} {
		padding: 0 1.2rem;
		justify-content: center;
		gap: 2.4rem;
	}
`;

export const TextBig = styled(Heading1)`
	color: ${({ theme }) => theme.white};

	@media ${devices.mobile} {
		font-size: 3.2rem;
		line-height: 3.6rem;
	}
`;

export const TextSmall = styled(Body)`
	color: ${({ theme }) => theme.white};
	max-width: 40rem;
	text-align: center;

	@media ${devices.mobile} {
		font-size: 1.5rem;
		line-height: 2.5rem;
	}
`;
