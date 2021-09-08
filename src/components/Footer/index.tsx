import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
	Container,
	Frame,
	TopFrame,
	BottomFrame,
	Logo,
	NormalLink,
	ContactIcons,
	Text,
	Icon,
	TextLight,
} from "./style/footer";

interface props {
	to: any;
	children?: any;
	src?: string;
}

interface composition {
	Frame: FC;
	TopFrame: FC;
	BottomFrame: FC;
	Logo: FC<props>;
	Link: FC<props>;
	Address: FC;
	Contact: FC;
	ContactIcons: FC;
	Icon: FC<props>;
	Text: FC;
	TextLight: FC;
}

export const Footer: FC & composition = ({ children }) => {
	return <Container>{children}</Container>;
};

Footer.Frame = ({ children }) => {
	return <Frame>{children}</Frame>;
};

Footer.TopFrame = ({ children }) => {
	return <TopFrame>{children}</TopFrame>;
};

Footer.BottomFrame = ({ children }) => {
	return <BottomFrame>{children}</BottomFrame>;
};

Footer.Logo = ({ to, src }) => {
	return (
		<RouterLink to={to}>
			<Logo src={src} />
		</RouterLink>
	);
};

Footer.Link = ({ to, children }) => {
	return <NormalLink to={to}>{children}</NormalLink>;
};

Footer.Address = ({ children }) => {
	return <div>{children}</div>;
};

Footer.Contact = ({ children }) => {
	return <div>{children}</div>;
};

Footer.ContactIcons = ({ children }) => {
	return <ContactIcons>{children}</ContactIcons>;
};

Footer.Icon = ({ to, children }) => {
	return (
		<Icon target="_blank" to={to}>
			{children}
		</Icon>
	);
};

Footer.Text = ({ children }) => {
	return <Text>{children}</Text>;
};

Footer.TextLight = ({ children }) => {
	return <TextLight>{children}</TextLight>;
};
