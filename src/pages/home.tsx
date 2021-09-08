import { FC } from "react";
import {
	HeroContainer,
	SectionContainer,
	FeatureContainer,
} from "../containers";
import { Page } from "../components";
import {} from "../assets/shared/desktop/bg-pattern-leaf.svg";

export const Home: FC = () => {
	return (
		<Page>
			<HeroContainer />
			<SectionContainer />
			<FeatureContainer />
		</Page>
	);
};
