import { FC } from "react";
import { Container, Mask, TextSmall, TextBig } from "./style/designHead";
import { ReactComponent as IntroWebBgPattern } from "../../assets/web-design/desktop/bg-pattern-intro-web.svg";

interface composition {
	TextSmall: FC;
	TextBig: FC;
}

export const DesignHead: FC & composition = ({ children }) => {
	return (
		<Container>
			<IntroWebBgPattern />
			<Mask>{children}</Mask>
		</Container>
	);
};

DesignHead.TextBig = ({ children }) => {
	return <TextBig>{children}</TextBig>;
};

DesignHead.TextSmall = ({ children }) => {
	return <TextSmall>{children}</TextSmall>;
};
