/** @type {import('tailwindcss').Config} */

export default {
	image: {
		domains: [ "https://randomfox.ca/"],
	},
	
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				lato: "Lato, Arial, consolas",
			},
			colors: {
				primary: "#00A3FF",
				secondary: "#FFB800",
				postman: "#FF6C37",
				docker: "#f2f2f2"
			},
			gridTemplateColumns: {
				contact_me: "40% auto",
				project: "40% 5% auto",
			}
		},
		screens: {
			'2xl': { 'max': '1535px' },
			// => @media (max-width: 1535px) { ... }

			'xl': { 'max': '1279px' },
			// => @media (max-width: 1279px) { ... }

			'lg': { 'max': '1023px' },
			// => @media (max-width: 1023px) { ... }

			'md': { 'max': '767px' },
			// => @media (max-width: 767px) { ... }

			'sm': { 'max': '639px' },
			// => @media (max-width: 639px) { ... }

			'xm': { 'max': '319px' },
			// => @media (max-width: 639px) { ... }
		},
	},
	plugins: [],
	darkMode: ['class', '[data-mode="dark"]'],
}
