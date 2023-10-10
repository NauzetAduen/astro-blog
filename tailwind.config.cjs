/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{ 'custom': ["Atkinson"]},
			backgroundSize: {
				visible3: "100% 15px",
				invisible0: "0% 15px"
			  },
		},
	},
	plugins: [],
}
