import { Header } from "../../components";
import Logo from "../../assets/shared/desktop/logo-dark.png";

export const HeaderContainer = () => {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo to={"/"} src={Logo} />
				<Header.Frame>
					<Header.Link to={"/about"}>Our Company</Header.Link>
					<Header.Link to={"/locations"}>Locations</Header.Link>
					<Header.Link to={"/contact"}>Contact</Header.Link>
				</Header.Frame>
			</Header.Frame>
		</Header>
	);
};
