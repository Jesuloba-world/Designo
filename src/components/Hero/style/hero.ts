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

	@media ${devices.tablet700} {
		padding: 0 2.4rem;
		padding-top: 8rem;
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

	@media ${devices.tablet700} {
		height: 31.2rem;
	}

	@media ${devices.tablet600} {
		height: 32.6rem;
	}
`;

export const BigText = styled(Heading1)`
	color: ${({ theme }) => theme.white};

	@media ${devices.tablet} {
		text-align: center;
	}

	@media ${devices.tablet600} {
		font-size: 4rem;
		line-height: 112.5%;
	}

	@media ${devices.tablet500} {
		font-size: 3.2rem;
		line-height: 3.6rem;
	}
`;

export const SmallText = styled(Body)`
	color: ${({ theme }) => theme.white};
	width: 44.5rem;

	@media ${devices.tablet} {
		text-align: center;
	}

	@media ${devices.tablet600} {
		font-size: 1.5rem;
		line-height: 2.5rem;
		width: auto;
	}
`;

export const ImageHolder = styled.div`
	@media ${devices.tablet} {
		position: absolute;
		bottom: -18.5rem;
	}

	@media ${devices.tablet500} {
		bottom: -20rem;
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
