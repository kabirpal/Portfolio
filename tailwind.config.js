/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{html,js,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				burtons: "burtons",
			},
		},
	},
	plugins: [
		require('tailwindcss-animated')
	  ],
};
