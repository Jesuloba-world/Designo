import { FC } from "react";
import { Page } from "../components";
import {
	DesignHeadContainer,
	PortfolioContainer,
	SectionContainer,
} from "../containers";

const AppDesign: FC = () => {
	return (
		<Page>
			<DesignHeadContainer type="app" />
			<Page.Inner>
				<PortfolioContainer type="app" />
				<SectionContainer />
			</Page.Inner>
		</Page>
	);
};

export default AppDesign;
