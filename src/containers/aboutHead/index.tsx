import { AboutHead } from "../../components";
import AboutImage from "../../assets/about/desktop/image-about-hero.jpg";
import AboutImageTablet from "../../assets/about/tablet/image-about-hero.jpg";
import AboutImageMobile from "../../assets/about/mobile/image-about-hero.jpg";

export const AboutHeadContainer = () => {
	return (
		<AboutHead>
			<AboutHead.Frame>
				<AboutHead.Title>About Us</AboutHead.Title>
				<AboutHead.Subtitle>
					Founded in 2010, we are a creative agency that produces
					lasting results for our clients. We’ve partnered with many
					startups, corporations, and nonprofits alike to craft
					designs that make real impact. We’re always looking forward
					to creating brands, products, and digital experiences that
					connect with our clients’ audiences.
				</AboutHead.Subtitle>
			</AboutHead.Frame>
			<AboutHead.Image src={AboutImage} alt={"About Image"} />
		</AboutHead>
	);
};
