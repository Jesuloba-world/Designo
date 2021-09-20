import { FC } from "react";
import {
	Container,
	Place,
	Frame,
	Map,
	Mask,
	MapImage,
	InnerFrame,
	Country,
	Address,
	Contact,
	TextBold,
	TextNormal,
	place,
} from "./style/location";
import { ReactComponent as TwoCircles } from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import AustraliaMap from "../../assets/locations/desktop/image-map-australia.png";
import CanadaMap from "../../assets/locations/desktop/image-map-canada.png";
import UKMap from "../../assets/locations/desktop/image-map-united-kingdom.png";

interface where {
	place: "canada" | "australia" | "uk";
}

interface composition {
	Place: FC<place>;
	Frame: FC;
	Map: FC<where>;
	Country: FC;
	Address: FC;
	Contact: FC;
	TextBold: FC;
	TextNormal: FC;
}

export const Location: FC & composition = ({ children }) => {
	return <Container>{children}</Container>;
};

Location.Place = ({ children, reverse }) => {
	return <Place reverse={reverse}>{children}</Place>;
};

Location.Frame = ({ children }) => {
	return (
		<Frame>
			<TwoCircles />
			<Mask>
				<InnerFrame>{children}</InnerFrame>
			</Mask>
		</Frame>
	);
};

Location.Map = ({ place }) => {
	let image = "";

	switch (place) {
		case "australia":
			image = AustraliaMap;
			break;
		case "canada":
			image = CanadaMap;
			break;
		case "uk":
			image = UKMap;
			break;
	}

	return (
		<Map>
			<MapImage src={image} alt={place} />
		</Map>
	);
};

Location.Country = ({ children }) => {
	return <Country>{children}</Country>;
};

Location.Address = ({ children }) => {
	return <Address>{children}</Address>;
};

Location.Contact = ({ children }) => {
	return <Contact>{children}</Contact>;
};

Location.TextBold = ({ children }) => {
	return <TextBold>{children}</TextBold>;
};

Location.TextNormal = ({ children }) => {
	return <TextNormal>{children}</TextNormal>;
};
