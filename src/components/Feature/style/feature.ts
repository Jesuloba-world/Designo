import styled from "styled-components/macro";
import { Body } from "../../UI/typography/style/typo";

export const Container = styled.div`
	max-width: 111rem;
	height: 41.2rem;
	margin: 0 auto;
	margin-bottom: 8.8rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 3rem;
`;

export const Frame = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const SmallText = styled(Body)`
	text-align: center;
`;
