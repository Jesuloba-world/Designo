const size = {
	desktopL: "68.75em", // 1100px
	desktopS: "62.5em", //1000px
	tablet: "50em", //800px
	mobile: "25em", //400px
};

export const devices = {
	desktopL: `(max-width: ${size.desktopL})`,
	desktopS: `(max-width: ${size.desktopS})`,
	tablet: `(max-width: ${size.tablet})`,
	mobile: `(max-width: ${size.mobile})`,
};
