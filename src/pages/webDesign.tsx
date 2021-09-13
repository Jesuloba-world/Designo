import { Page } from "../components";
import { SectionContainer, DesignHeadContainer } from "../containers";

export const WebDesign = () => {
	return (
		<Page>
			<DesignHeadContainer type="web" />
			<Page.Inner>
				<SectionContainer />
			</Page.Inner>
		</Page>
	);
};
