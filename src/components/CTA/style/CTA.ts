import styled from "styled-components/macro";
import { Heading2, Body } from "../../UI/typography/style/typo";

export interface frame {
	isLeft: boolean;
}

export const Padder = styled.div`
	@media (max-width: 111rem) {
		padding: 0 4rem;
	}
`;

export const Container = styled.div`
	height: 29.2rem;
	max-width: 111rem;
	background-color: ${({ theme }) => theme.peach};
	margin: 0 auto;
	border-radius: 1.5rem;
	transform: translateY(7.2rem);
	display: flex;
	align-items: center;
	justify-content: flex-end;
	overflow: hidden;
	position: relative;
`;

export const Overlay = styled.div`
	position: absolute;
	z-index: 5;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	padding: 7.2rem 9.5rem 4.6rem 9.5rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

export const Frame = styled.div<frame>`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	${({ isLeft }) => (!isLeft ? "align-items: flex-end" : null)};
`;

export const BigText = styled(Heading2)`
	color: ${({ theme }) => theme.white};
	line-height: 4rem;
	width: 30rem;
`;

export const SmallText = styled(Body)`
	color: ${({ theme }) => theme.white};
`;
