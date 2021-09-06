import styled from "styled-components/macro";
import { Heading1, Body } from "../../UI/typography/style/typo";

export interface image {
	src: string;
	alt: string;
}

export const Container = styled.div`
	background-color: ${({ theme }) => theme.peach};
	height: 64rem;
	width: 111rem;
	margin: 0 auto;
	border-radius: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	overflow: hidden;
	position: relative;
`;

export const Mask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	padding-left: 9.6rem;
	display: flex;
	align-items: center;
`;

export const Frame = styled.div`
	height: 35rem;
	width: 54rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const BigText = styled(Heading1)`
	color: ${({ theme }) => theme.white};
`;

export const SmallText = styled(Body)`
	color: ${({ theme }) => theme.white};
	width: 44.5rem;
`;

export const HeroImage = styled.img<image>`
	position: absolute;
	top: -3.2rem;
	left: 56rem;
`;
