import { Page as Container, LeafContainer, Inner } from "./style/page";
import { ReactComponent as Leaf } from "../../assets/shared/desktop/bg-pattern-leaf.svg";
import { FC } from "react";

interface composition {
	Inner: FC;
}

export const Page: FC & composition = ({ children }) => {
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

Page.Inner = ({ children }) => {
	return <Inner>{children}</Inner>;
};
