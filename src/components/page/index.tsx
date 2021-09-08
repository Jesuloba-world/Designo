import { Page as Container, LeafContainer } from "./style/page";
import { ReactComponent as Leaf } from "../../assets/shared/desktop/bg-pattern-leaf.svg";

export const Page: React.FC = ({ children }) => {
	return (
		<Container>
			{children}
			<LeafContainer>
				<Leaf />
				<Leaf />
			</LeafContainer>
		</Container>
	);
};
