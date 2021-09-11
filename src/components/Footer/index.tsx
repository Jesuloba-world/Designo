import { FC } from "react";
import {
	Container,
	Frame,
	TopFrame,
	BottomFrame,
	Logo,
	NormalLink,
	Address,
	Contact,
	ContactIcons,
	Text,
	Icon,
	LogoLink,
	TextLight,
	link,
} from "./style/footer";

interface props {
	to: any;
	children?: any;
	src?: string;
}

interface composition {
	Frame: FC<link>;
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

Footer.Frame = ({ children, links }) => {
	return <Frame links={links}>{children}</Frame>;
};

Footer.TopFrame = ({ children }) => {
	return <TopFrame>{children}</TopFrame>;
};

Footer.BottomFrame = ({ children }) => {
	return <BottomFrame>{children}</BottomFrame>;
};

Footer.Logo = ({ to, src }) => {
	return (
		<LogoLink to={to}>
			<Logo src={src} />
		</LogoLink>
	);
};

Footer.Link = ({ to, children }) => {
	return <NormalLink to={to}>{children}</NormalLink>;
};

Footer.Address = ({ children }) => {
	return <Address>{children}</Address>;
};

Footer.Contact = ({ children }) => {
	return <Contact>{children}</Contact>;
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
