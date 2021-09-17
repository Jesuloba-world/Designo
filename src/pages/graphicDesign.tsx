import { FC } from "react";
import { Page } from "../components";
import {
	DesignHeadContainer,
	PortfolioContainer,
	SectionContainer,
} from "../containers";

const GraphicDesign: FC = () => {
	return (
		<Page>
			<DesignHeadContainer type="graphic" />
			<Page.Inner>
				<PortfolioContainer type="graphic" />
				<SectionContainer />
			</Page.Inner>
		</Page>
	);
};

export default GraphicDesign;
