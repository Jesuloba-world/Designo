import { Footer } from "../../components";
import Logo from "../../assets/shared/desktop/logo-light.png";
import { ReactComponent as FacebookLogo } from "../../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/shared/desktop/icon-instagram.svg";
import { ReactComponent as PinterestLogo } from "../../assets/shared/desktop/icon-pinterest.svg";
import { ReactComponent as TwitterLogo } from "../../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as YoutubeLogo } from "../../assets/shared/desktop/icon-youtube.svg";

export const FooterContainer: React.FC = ({ children }) => {
	return (
		<Footer>
			{/* {children} */}
			<Footer.TopFrame>
				<Footer.Frame>
					<Footer.Logo to={"/"} src={Logo} />
					<Footer.Frame>
						<Footer.Link to={"/about"}>Our Company</Footer.Link>
						<Footer.Link to={"/locations"}>Locations</Footer.Link>
						<Footer.Link to={"/contact"}>Contact</Footer.Link>
					</Footer.Frame>
				</Footer.Frame>
			</Footer.TopFrame>
			<Footer.BottomFrame>
				<Footer.Address>
					<Footer.Text>Designo Central Office</Footer.Text>
					<Footer.TextLight>3886 Wellington Street</Footer.TextLight>
					<Footer.TextLight>
						Toronto, Ontario M9C 3J5
					</Footer.TextLight>
				</Footer.Address>
				<Footer.Contact>
					<Footer.Text>Contact Us (Central Office)</Footer.Text>
					<Footer.Text>P : +1 253-863-8967</Footer.Text>
					<Footer.Text>M : contact@designo.co</Footer.Text>
				</Footer.Contact>
				<Footer.ContactIcons>
					<Footer.Icon to={"/facebook"}>
						<FacebookLogo />
					</Footer.Icon>
					<Footer.Icon to={"/instagram"}>
						<InstagramLogo />
					</Footer.Icon>
					<Footer.Icon to={"/pinterest"}>
						<PinterestLogo />
					</Footer.Icon>
					<Footer.Icon to={"/twitter"}>
						<TwitterLogo />
					</Footer.Icon>
					<Footer.Icon to={"/youtube"}>
						<YoutubeLogo />
					</Footer.Icon>
				</Footer.ContactIcons>
			</Footer.BottomFrame>
		</Footer>
	);
};
