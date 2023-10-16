/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{ 'custom': ["Atkinson"]},
			backgroundSize: {
				visibleSmall: "100% 15px",
				visibleBig: "100% 100%",
				invisibleSmall: "0% 15px",
				invisibleBig: "0% 100%"
			  },
			  colors: {
				richBlack: "#0D1F2D",
				payneGrey: "#546a7b",
				whiteSmoke: "#F6F4F4",
				springGreen: "#37FF8B",
				fireEngineRed: "#D62828"


			  }
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
