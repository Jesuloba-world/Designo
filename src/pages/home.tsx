import { FC } from "react";
import {
	HeroContainer,
	SectionContainer,
	FeatureContainer,
} from "../containers";
import { Page } from "./style/page";

export const Home: FC = () => {
	return (
		<Page>
			<HeroContainer />
			<SectionContainer />
			<FeatureContainer />
		</Page>
	);
};
