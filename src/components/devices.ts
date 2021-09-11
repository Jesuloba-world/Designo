const size = {
	desktopL: "68.75em", // 1100px
	desktopS: "62.5em", //1000px
	tablet: "50em", //800px
	tablet700: "43.75em", //700px
	tablet600: "37.5em", //600px
	tablet500: "31.25em", //500px
	mobile: "25em", //400px
	mobileS: "21.875em", //350px
};

export const devices = {
	desktopL: `(max-width: ${size.desktopL})`,
	desktopS: `(max-width: ${size.desktopS})`,
	tablet: `(max-width: ${size.tablet})`,
	tablet700: `(max-width: ${size.tablet700})`,
	tablet600: `(max-width: ${size.tablet600})`,
	tablet500: `(max-width: ${size.tablet500})`,
	mobile: `(max-width: ${size.mobile})`,
	mobileS: `(max-width: ${size.mobileS})`,
};
