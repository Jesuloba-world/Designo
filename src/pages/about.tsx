import { FC } from "react";
import { AboutHeadContainer } from "../containers";
import { Page } from "../components";

export const About: FC = () => {
	return (
		<Page>
			<AboutHeadContainer />
			<Page.Inner></Page.Inner>
		</Page>
	);
};
