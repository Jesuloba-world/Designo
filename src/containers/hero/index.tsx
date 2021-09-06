import { useHistory } from "react-router-dom";
import { Hero } from "../../components";
import HeroPhone from "../../assets/home/desktop/image-hero-phone.png";

export const HeroContainer = () => {
	const history = useHistory();

	const redirectToAboutPage = () => {
		history.push("/about");
	};

	return (
		<Hero>
			<Hero.Mask>
				<Hero.Frame>
					<Hero.BigText>
						Award-winning custom designs and digital branding
						solutions
					</Hero.BigText>
					<Hero.SmallText>
						With over 10 years in the industry, we are experienced
						in creating fully responsive websites, app design, and
						engaging brand experiences. Find out more about our
						services.
					</Hero.SmallText>
					<Hero.Button onClick={redirectToAboutPage}>
						Learn More
					</Hero.Button>
				</Hero.Frame>
				<Hero.Image src={HeroPhone} alt={"phone"} />
			</Hero.Mask>
		</Hero>
	);
};
