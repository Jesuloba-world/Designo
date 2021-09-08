import { Feature, Typo } from "../../components";
import { ReactComponent as Passionate } from "../../assets/home/desktop/illustration-passionate.svg";
import { ReactComponent as Friendly } from "../../assets/home/desktop/illustration-friendly.svg";
import { ReactComponent as Resourceful } from "../../assets/home/desktop/illustration-resourceful.svg";

export const FeatureContainer = () => {
	return (
		<Feature>
			<Feature.Frame>
				<Passionate />
				<Typo.H3>PASSIONATE</Typo.H3>
				<Feature.SmallText>
					Each project starts with an in-depth brand research to
					ensure we only create products that serve a purpose. We
					merge art, design, and technology into exciting new
					solutions.
				</Feature.SmallText>
			</Feature.Frame>
			<Feature.Frame>
				<Resourceful />
				<Typo.H3>RESOURCEFUL</Typo.H3>
				<Feature.SmallText>
					Everything that we do has a strategic purpose. We use an
					agile approach in all of our projects and value customer
					collaboration. It guarantees superior results that fulfill
					our clients’ needs.
				</Feature.SmallText>
			</Feature.Frame>
			<Feature.Frame>
				<Friendly />
				<Typo.H3>FRIENDLY</Typo.H3>
				<Feature.SmallText>
					We are a group of enthusiastic folks who know how to put
					people first. Our success depends on our customers, and we
					strive to give them the best experience a company can
					provide.
				</Feature.SmallText>
			</Feature.Frame>
		</Feature>
	);
};
