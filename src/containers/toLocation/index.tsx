import { useHistory } from "react-router-dom";
import { ToLocation } from "../../components";
import { ReactComponent as Australia } from "../../assets/shared/desktop/illustration-australia.svg";
import { ReactComponent as Canada } from "../../assets/shared/desktop/illustration-canada.svg";
import { ReactComponent as UK } from "../../assets/shared/desktop/illustration-united-kingdom.svg";

export const ToLocationContainer = () => {
	const history = useHistory();

	const redirectToLocationPage = () => {
		history.push("/locations");
	};

	return (
		<ToLocation>
			<ToLocation.MainFrame>
				<ToLocation.Oval country={"canada"}>
					<Canada />
				</ToLocation.Oval>
				<ToLocation.Frame>
					<ToLocation.Name>Canada</ToLocation.Name>
					<ToLocation.Button onClick={redirectToLocationPage}>
						See location
					</ToLocation.Button>
				</ToLocation.Frame>
			</ToLocation.MainFrame>
			<ToLocation.MainFrame>
				<ToLocation.Oval country={"australia"}>
					<Australia />
				</ToLocation.Oval>
				<ToLocation.Frame>
					<ToLocation.Name>Australia</ToLocation.Name>
					<ToLocation.Button onClick={redirectToLocationPage}>
						See location
					</ToLocation.Button>
				</ToLocation.Frame>
			</ToLocation.MainFrame>
			<ToLocation.MainFrame>
				<ToLocation.Oval country={"uk"}>
					<UK />
				</ToLocation.Oval>
				<ToLocation.Frame>
					<ToLocation.Name>united kingdom</ToLocation.Name>
					<ToLocation.Button onClick={redirectToLocationPage}>
						See location
					</ToLocation.Button>
				</ToLocation.Frame>
			</ToLocation.MainFrame>
		</ToLocation>
	);
};
