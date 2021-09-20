import { Location } from "../../components";

export const LocationContainer = () => {
	return (
		<Location>
			<Location.Place>
				<Location.Map place={"canada"} />
				<Location.Frame>
					<Location.Country>Canada</Location.Country>
					<Location.Address>
						<Location.TextBold>
							Designo Central Office
						</Location.TextBold>
						<Location.TextNormal>
							3886 Wellington Street
						</Location.TextNormal>
						<Location.TextNormal>
							Toronto, Ontario M9C 3J5
						</Location.TextNormal>
					</Location.Address>
					<Location.Contact>
						<Location.TextBold>Contact</Location.TextBold>
						<Location.TextNormal>
							P : +1 253-863-8967
						</Location.TextNormal>
						<Location.TextNormal>
							M : contact@designo.co
						</Location.TextNormal>
					</Location.Contact>
				</Location.Frame>
			</Location.Place>
			<Location.Place reverse>
				<Location.Map place={"australia"} />
				<Location.Frame>
					<Location.Country>Australia</Location.Country>
					<Location.Address>
						<Location.TextBold>Designo AU Office</Location.TextBold>
						<Location.TextNormal>
							19 Balonne Street
						</Location.TextNormal>
						<Location.TextNormal>
							New South Wales 2443
						</Location.TextNormal>
					</Location.Address>
					<Location.Contact>
						<Location.TextBold>Contact</Location.TextBold>
						<Location.TextNormal>
							P : (02) 6720 9092
						</Location.TextNormal>
						<Location.TextNormal>
							M : contact@designo.au
						</Location.TextNormal>
					</Location.Contact>
				</Location.Frame>
			</Location.Place>
			<Location.Place>
				<Location.Map place={"uk"} />
				<Location.Frame>
					<Location.Country>United Kingdom</Location.Country>
					<Location.Address>
						<Location.TextBold>Designo UK Office</Location.TextBold>
						<Location.TextNormal>
							13 Colorado Way
						</Location.TextNormal>
						<Location.TextNormal>
							Rhyd-y-fro SA8 9GA
						</Location.TextNormal>
					</Location.Address>
					<Location.Contact>
						<Location.TextBold>Contact</Location.TextBold>
						<Location.TextNormal>
							P : 078 3115 1400
						</Location.TextNormal>
						<Location.TextNormal>
							M : contact@designo.uk
						</Location.TextNormal>
					</Location.Contact>
				</Location.Frame>
			</Location.Place>
		</Location>
	);
};
