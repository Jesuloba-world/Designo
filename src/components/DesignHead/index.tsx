import { FC } from "react";
import { Container, Mask, TextSmall, TextBig, props } from "./style/designHead";
import { ReactComponent as IntroWebBgPattern } from "../../assets/web-design/desktop/bg-pattern-intro-web.svg";
import { ReactComponent as IntroAppBgPattern } from "../../assets/app-design/desktop/bg-pattern-intro-app.svg";
import { ReactComponent as IntroGraphicPattern } from "../../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg";

interface composition {
	TextSmall: FC;
	TextBig: FC;
}

export const DesignHead: FC<props> & composition = ({ children, type }) => {
	return (
		<Container type={type}>
			{type === "web" ? <IntroWebBgPattern /> : null}
			{type === "app" ? <IntroAppBgPattern /> : null}
			{type === "graphic" ? <IntroGraphicPattern /> : null}
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
