import { Section } from "../../components";

export const SectionContainer = () => {
	return (
		<Section>
			<Section.Design type={"web"} isBig />
			<Section.Design type={"app"} />
			<Section.Design type={"graphic"} />
		</Section>
	);
};
