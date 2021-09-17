import { Page as Container, LeafContainer, Inner } from "./style/page";
import { ReactComponent as Leaf } from "../../assets/shared/desktop/bg-pattern-leaf.svg";
import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface composition {
	Inner: FC;
}

export const Page: FC & composition = ({ children }) => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
		console.log("I'm supposed to scroll to top");
	}, []);

	return (
		<Container>
			{children}
			<LeafContainer path={location.pathname}>
				<Leaf />
				<Leaf />
			</LeafContainer>
		</Container>
	);
};

Page.Inner = ({ children }) => {
	return <Inner>{children}</Inner>;
};
