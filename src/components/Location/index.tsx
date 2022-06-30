import { FC } from "react";
import {
	Container,
	Place,
	Frame,
	Map,
	Mask,
	// MapImage,
	InnerFrame,
	Country,
	Address,
	Contact,
	TextBold,
	TextNormal,
	place,
} from "./style/location";
import { ReactComponent as TwoCircles } from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

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

interface location {
	[key: string]: {
		name: string;
		point: LatLngExpression;
	};
}

const locations: location = {
	canada: {
		name: "Canada",
		point: [45.42059625118941, -75.70491530237184],
	},
	uk: {
		name: "UK",
		point: [53.709839233540485, -1.3431766732264647],
	},
	australia: {
		name: "Australia",
		point: [-30.323827491902072, 149.78558246855954],
	},
};

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
	return (
		<Map>
			<MapContainer
				center={locations[place].point}
				zoom={16}
				zoomControl={false}
				scrollWheelZoom={false}
				closePopupOnClick={true}
				dragging={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={locations[place].point}>
					<Popup>
						Designo <br /> {locations[place].name} branch
					</Popup>
				</Marker>
			</MapContainer>
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
