// Web Images
import expressImage from "./assets/web-design/desktop/image-express.jpg";
import blogrImage from "./assets/web-design/desktop/image-blogr.jpg";
import builderImage from "./assets/web-design/desktop/image-builder.jpg";
import campImage from "./assets/web-design/desktop/image-camp.jpg";
import photonImage from "./assets/web-design/desktop/image-photon.jpg";
import transferImage from "./assets/web-design/desktop/image-transfer.jpg";
// App Images
import airfilterImage from "./assets/app-design/desktop/image-airfilter.jpg";
import eyecamImage from "./assets/app-design/desktop/image-eyecam.jpg";
import faceitImage from "./assets/app-design/desktop/image-faceit.jpg";
import loopImage from "./assets/app-design/desktop/image-loopstudios.jpg";
import todoImage from "./assets/app-design/desktop/image-todo.jpg";
// Graphics Images
import waterImage from "./assets/graphic-design/desktop/image-boxed-water.jpg";
import changeImage from "./assets/graphic-design/desktop/image-change.jpg";
import scienceImage from "./assets/graphic-design/desktop/image-science.jpg";

interface project {
	name: string;
	description: string;
	image: string;
}

interface composition {
	web: project[];
	app: project[];
	graphic: project[];
}

interface head {
	web: { title: string; subtitle: string };
	app: { title: string; subtitle: string };
	graphic: { title: string; subtitle: string };
}

export const headings: head = {
	web: {
		title: "Web Design",
		subtitle:
			"We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
	},
	app: {
		title: "App Design",
		subtitle:
			"Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
	},
	graphic: {
		title: "Graphics Design",
		subtitle:
			"We deliver eye-catching branding materials that are tailored to meet your business objectives.",
	},
};

export const projects: composition = {
	web: [
		{
			name: "Express",
			description:
				"A multi-carrier shipping website for ecommerce businesses",
			image: expressImage,
		},
		{
			name: "Transfer",
			description:
				"Site for low-cost money transfers and sending money within seconds",
			image: transferImage,
		},
		{
			name: "Photon",
			description:
				"A state-of-the-art music player with high-resolution audio and DSP effects",
			image: photonImage,
		},
		{
			name: "Builder",
			description:
				"Connects users with local contractors based on their location",
			image: builderImage,
		},
		{
			name: "Blogr",
			description:
				"Blogr is a platform for creating an online blog or publication",
			image: blogrImage,
		},
		{
			name: "Camp",
			description:
				"Get expert training in coding, data, design, and digital marketing",
			image: campImage,
		},
	],
	app: [
		{
			name: "Airfilter",
			description:
				"Solving the problem of poor indoor air quality by filtering the air",
			image: airfilterImage,
		},
		{
			name: "Eyecam",
			description:
				"Product that lets you edit your favorite photos and videos at any time",
			image: eyecamImage,
		},
		{
			name: "FaceIt",
			description:
				"Get to meet your favorite internet superstar with the faceit app",
			image: faceitImage,
		},
		{
			name: "Todo",
			description:
				"A todo app that features cloud sync with light and dark mode",
			image: todoImage,
		},
		{
			name: "Loopstudios",
			description: "A VR experience app made for Loopstudios",
			image: loopImage,
		},
	],
	graphic: [
		{
			name: "Tim Brown",
			description:
				"A book cover designed for Tim Brown’s new release, ‘Change’",
			image: changeImage,
		},
		{
			name: "Boxed Water",
			description: "A simple packaging concept made for Boxed Water",
			image: waterImage,
		},
		{
			name: "Science!",
			description:
				"A poster made in collaboration with the Federal Art Project",
			image: scienceImage,
		},
	],
};
