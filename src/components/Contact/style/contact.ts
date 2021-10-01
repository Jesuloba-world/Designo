import styled from "styled-components/macro";
import { Heading1, Body } from "../../UI/typography/style/typo";
import { devices } from "../../devices";
import { Light } from "../../UI/button/style/button";

export const Container = styled.div`
	max-width: 111rem;
	margin: 0 auto;
	height: 48rem;
	margin-bottom: 16rem;
	background-color: ${({ theme }) => theme.peach};
	border-radius: 1.5rem;
	overflow: hidden;
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	position: relative;

	@media ${devices.desktopS} {
		height: 71.1rem;

		svg {
			position: absolute;
			top: -8.3rem;
			left: -12.15rem;
		}
	}

	@media ${devices.tablet} {
		margin-bottom: 12rem;
	}

	@media ${devices.tablet700} {
		border-radius: 0;
	}

	@media ${devices.tablet500} {
		height: 76.4rem;
	}
`;

export const Mask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	@media ${devices.desktopS} {
		flex-direction: column;
		padding-inline: 5.8rem;
		justify-content: center;
		gap: 4rem;
	}

	@media ${devices.tablet500} {
		padding-inline: 2.4rem;
		gap: 4.8rem;
	}
`;

export const Info = styled.div`
	width: 44.5rem;
	display: flex;
	flex-direction: column;
	gap: 3.2rem;

	@media ${devices.desktopS} {
		width: 100%;
	}

	@media ${devices.tablet500} {
		gap: 2.4rem;
	}
`;

export const Form = styled.form`
	width: 38rem;
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	align-items: flex-end;

	@media ${devices.desktopS} {
		width: 100%;
	}

	@media ${devices.tablet500} {
		align-items: center;
	}
`;

export const Title = styled(Heading1)`
	color: ${({ theme }) => theme.white};

	@media ${devices.tablet500} {
		text-align: center;
	}
`;

export const SubTitle = styled(Body)`
	color: ${({ theme }) => theme.white};

	@media ${devices.tablet500} {
		font-size: 1.5rem;
		line-height: 2.5rem;
		text-align: center;
	}
`;

export const Input = styled.input`
	width: 100%;
	background: transparent;
	border: none;
	height: 3.8rem;
	border-bottom: 1px solid ${({ theme }) => theme.white};
	padding: 0 1.6rem;
	padding-bottom: 1.2rem;
	color: ${({ theme }) => theme.white};
	font-family: Jost;
	font-weight: 500;
	font-size: 15px;
	line-height: 26px;

	&:focus {
		outline: none;
		border-width: 3px;
	}

	&::placeholder {
		text-transform: capitalize;
		color: ${({ theme }) => theme.white};
		opacity: 0.5;
	}
`;

export const TextArea = styled.textarea`
	width: 100%;
	max-width: 100%;
	background: transparent;
	border: none;
	height: 10.2rem;
	border-bottom: 1px solid ${({ theme }) => theme.white};
	padding: 0 1.6rem;
	padding-bottom: 1.2rem;
	color: ${({ theme }) => theme.white};
	font-family: Jost;
	font-weight: 500;
	font-size: 15px;
	line-height: 26px;

	&:focus {
		outline: none;
		border-width: 3px;
	}

	&::placeholder {
		text-transform: capitalize;
		color: ${({ theme }) => theme.white};
		opacity: 0.5;
	}
`;

export const InputContainer = styled.div`
	position: relative;
	width: 100%;
`;

export const Label = styled.label`
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	display: flex;
	align-items: center;
`;

export const ErrorMessage = styled.span`
	font-family: Jost;
	font-size: 1.2rem;
	font-style: italic;
	font-weight: 400;
	line-height: 2.6rem;
	color: ${({ theme }) => theme.white};
	margin-right: 8px;
`;

export const Button = styled(Light)`
	@media ${devices.tablet500} {
		margin-top: 1.6rem;
	}
`;
