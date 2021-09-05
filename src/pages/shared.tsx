import { FC } from "react";
import { HeaderContainer, FooterContainer } from "../containers";

export const Shared: FC = ({ children }) => {
	return (
		<>
			<HeaderContainer />
			{children}
			<FooterContainer></FooterContainer>
		</>
	);
};
