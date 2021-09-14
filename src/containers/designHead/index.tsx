import { DesignHead } from "../../components";
import { headings } from "../../portfolio";

interface props {
	type: "web" | "app" | "graphic";
}

export const DesignHeadContainer: React.FC<props> = ({ type }) => {
	const { title, subtitle } = headings[type];

	return (
		<DesignHead type={type}>
			<DesignHead.TextBig>{title}</DesignHead.TextBig>
			<DesignHead.TextSmall>{subtitle}</DesignHead.TextSmall>
		</DesignHead>
	);
};
