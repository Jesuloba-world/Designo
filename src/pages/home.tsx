import { FC } from "react";
import {
	HeroContainer,
	SectionContainer,
	FeatureContainer,
} from "../containers";
import { Page } from "../components";
import {} from "../assets/shared/desktop/bg-pattern-leaf.svg";

const Home: FC = () => {
	return (
		<Page>
			<HeroContainer />
			<Page.Inner>
				<SectionContainer />
				<FeatureContainer />
			</Page.Inner>
		</Page>
	);
};

export default Home;
