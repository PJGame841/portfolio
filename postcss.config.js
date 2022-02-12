const additionnalPlugins = [];

// if (process.env.NODE_ENV === "production") {
// 	additionnalPlugins["@fullhuman/postcss-purgecss"] = {
// 		content: [
// 			"./pages/**/*.{js,jsx,ts,tsx}",
// 			"./components/**/*.{js,jsx,ts,tsx}",
// 		],
// 		defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
// 	};
// }

module.exports = {
	plugins: {
		tailwindcss: {},
		"postcss-preset-env": {},
		autoprefixer: {},
		...additionnalPlugins,
	},
};
