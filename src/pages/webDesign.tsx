import { Page } from "../components";
import {
	SectionContainer,
	DesignHeadContainer,
	PortfolioContainer,
} from "../containers";

export const WebDesign = () => {
	return (
		<Page>
			<DesignHeadContainer type="web" />
			<Page.Inner>
				<PortfolioContainer type="web" />
				<SectionContainer />
			</Page.Inner>
		</Page>
	);
};
