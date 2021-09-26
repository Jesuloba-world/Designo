import { FC } from "react";
import { Page } from "../components";
import { ToLocationContainer, ContactContainer } from "../containers";

const Contact: FC = ({ children }) => {
	return (
		<Page>
			<ContactContainer />
			<ToLocationContainer />
		</Page>
	);
};

export default Contact;
