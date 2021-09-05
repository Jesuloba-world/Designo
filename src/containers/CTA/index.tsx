import { CTA } from "../../components";
import { useHistory } from "react-router";

export const CTAContainer = () => {
	const history = useHistory();

	const redirectToContactPage = () => {
		history.push("/contact");
		// console.log("redirecting...");
	};

	return (
		<CTA>
			<CTA.Overlay>
				<CTA.Frame isLeft>
					<CTA.BigText>Let's talk about your project</CTA.BigText>
					<CTA.SmallText>
						Ready to take it to the next level? Contact us today and
						find out how our expertise can help your business grow.
					</CTA.SmallText>
				</CTA.Frame>
				<CTA.Frame isLeft={false}>
					<CTA.Button onClick={redirectToContactPage}>
						GET IN TOUCH
					</CTA.Button>
				</CTA.Frame>
			</CTA.Overlay>
		</CTA>
	);
};
