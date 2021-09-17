import { FC } from "react";
import { AboutHeadContainer, ToLocationContainer } from "../containers";
import { Page, AboutInfo } from "../components";
import worldClassTalentImg from "../assets/about/desktop/image-world-class-talent.jpg";
import realDealImg from "../assets/about/desktop/image-real-deal.jpg";

const About: FC = () => {
	return (
		<Page>
			<AboutHeadContainer />
			<AboutInfo
				title={"World-class talent"}
				subtitle={
					"We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. \nOur team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
				}
				image={{
					src: worldClassTalentImg,
					alt: "World Class Talent Image",
				}}
			/>
			<ToLocationContainer />
			<AboutInfo
				reverse
				title={"The real deal"}
				subtitle={
					"As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. \nWe are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
				}
				image={{
					src: realDealImg,
					alt: "Real Deal Image",
				}}
			/>
		</Page>
	);
};

export default About;
