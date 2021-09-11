import { useState } from "react";
import { Header } from "../../components";
import Logo from "../../assets/shared/desktop/logo-dark.png";
import { ReactComponent as Hamburger } from "../../assets/shared/mobile/icon-hamburger.svg";
import { ReactComponent as Close } from "../../assets/shared/mobile/icon-close.svg";

export const HeaderContainer = () => {
	const [showNavBar, setShowNavBar] = useState(false);

	return (
		<>
			<Header>
				<Header.Frame>
					<Header.Logo to={"/"} src={Logo} />
					<Header.Frame>
						<Header.Button
							onClick={() => {
								setShowNavBar((prev) => !prev);
							}}
						>
							{showNavBar ? <Close /> : <Hamburger />}
						</Header.Button>
						<Header.Link to={"/about"}>Our Company</Header.Link>
						<Header.Link to={"/locations"}>Locations</Header.Link>
						<Header.Link to={"/contact"}>Contact</Header.Link>
					</Header.Frame>
				</Header.Frame>
			</Header>
			{showNavBar ? (
				<Header.BackDrop
					onClick={() => {
						setShowNavBar(false);
					}}
				>
					<Header.NavBar>
						<Header.Link to={"/about"}>Our Company</Header.Link>
						<Header.Link to={"/locations"}>Locations</Header.Link>
						<Header.Link to={"/contact"}>Contact</Header.Link>
					</Header.NavBar>
				</Header.BackDrop>
			) : null}
		</>
	);
};
