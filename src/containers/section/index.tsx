import { Section } from "../../components";
import { useLocation } from "react-router-dom";

export const SectionContainer = () => {
	const location = useLocation();

	let isHome,
		isBig = false;

	if (location.pathname === "/") {
		isHome = true;
		isBig = true;
	}

	return (
		<Section isHome={isHome}>
			<Section.Design type={"web"} isBig={isBig} />
			<Section.Design type={"app"} />
			<Section.Design type={"graphic"} />
		</Section>
	);
};
