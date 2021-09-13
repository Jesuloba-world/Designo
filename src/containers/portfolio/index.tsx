import { Portfolio } from "../../components";
import { projects } from "../../portfolio";

interface props {
	type: "web" | "app" | "graphic";
}

export const PortfolioContainer: React.FC<props> = ({ type }) => {
	return (
		<Portfolio>
			{projects[type].map((project) => (
				<Portfolio.Project
					image={project.image}
					title={project.name}
					subtitle={project.description}
				/>
			))}
		</Portfolio>
	);
};
