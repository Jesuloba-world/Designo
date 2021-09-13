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
			{!(location.pathname === "/web-design") ? (
				<Section.Design type={"web"} isbig={isBig} />
			) : null}
			{!(location.pathname === "/app-design") ? (
				<Section.Design type={"app"} />
			) : null}
			{!(location.pathname === "/graphic-design") ? (
				<Section.Design type={"graphic"} />
			) : null}
		</Section>
	);
};
