import { FC } from "react";
import { HeaderContainer } from "../containers";

export const Shared: FC = ({ children }) => {
	return (
		<>
			<HeaderContainer />
			{children}
		</>
	);
};
