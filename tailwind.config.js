module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	safelist: ["max-h-[33%]"],
	theme: {
		extend: {
			transitionProperty: {
				height: "max-height",
			},
			spacing: {
				"5pe": "5%",
				"90pe": "90%",
			},
		},
	},
	plugins: [],
};
