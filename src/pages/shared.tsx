import { FC } from "react";
import { HeaderContainer, FooterContainer, CTAContainer } from "../containers";
import { useLocation } from "react-router";

export const Shared: FC = ({ children }) => {
	const location = useLocation();

	return (
		<>
			<HeaderContainer />
			{children}
			{location.pathname === "/contact" ? null : <CTAContainer />}
			<FooterContainer />
		</>
	);
};
