import { FC } from "react";
import { HeaderContainer, FooterContainer, CTAContainer } from "../containers";
import { useLocation } from "react-router";
import styled from "styled-components/macro";

const Everything = styled.div`
	position: relative;
`;

export const Shared: FC = ({ children }) => {
	const location = useLocation();

	return (
		<Everything>
			<HeaderContainer />
			{children}
			{location.pathname === "/contact" ? null : <CTAContainer />}
			<FooterContainer />
		</Everything>
	);
};
