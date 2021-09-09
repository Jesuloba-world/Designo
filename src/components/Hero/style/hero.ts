import styled from "styled-components/macro";
import { Heading1, Body } from "../../UI/typography/style/typo";
import { devices } from "../../devices";

export interface image {
	src: string;
	alt: string;
}

export const Container = styled.div`
	background-color: ${({ theme }) => theme.peach};
	height: 64rem;
	max-width: 111rem;
	margin: 0 auto;
	border-radius: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	overflow: hidden;
	position: relative;

	@media ${devices.tablet} {
		height: 84rem;
	}
`;

export const Mask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	padding: 0 9.6rem;
	display: flex;
	justify-content: space-between;

	@media ${devices.desktopS} {
		padding: 0 5.8rem;
	}

	@media ${devices.tablet} {
		padding-top: 6rem;
		flex-direction: column;
		align-items: center;
	}
`;

export const Frame = styled.div`
	height: 35rem;
	width: 54rem;
	margin: auto 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media ${devices.tablet} {
		margin: 0;
		align-items: center;
		width: 100%;
		height: 32.6rem;
	}
`;

export const BigText = styled(Heading1)`
	color: ${({ theme }) => theme.white};

	@media ${devices.tablet} {
		text-align: center;
	}
`;

export const SmallText = styled(Body)`
	color: ${({ theme }) => theme.white};
	width: 44.5rem;

	@media ${devices.tablet} {
		text-align: center;
	}
`;

export const ImageHolder = styled.div`
	@media ${devices.tablet} {
		position: absolute;
		top: 45.5rem;
	}
`;

export const HeroImage = styled.img<image>`
	height: 57.3rem;
	width: 28.4rem;
	object-fit: none;
	box-shadow: 20px -40px 80px 0px #5d02027f;
	position: absolute;
	top: 14rem;
	right: 9.6rem;

	@media ${devices.desktopS} {
		right: 5.8rem;
	}

	@media ${devices.tablet} {
		position: relative;
		top: 0;
		left: 0;
	}
`;
