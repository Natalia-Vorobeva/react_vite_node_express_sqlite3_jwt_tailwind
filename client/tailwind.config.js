/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/**/**/*.{js,jsx,ts,tsx,css}",
	],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#ffffff',
				midnight: '#0e0402',
				silver: {
					100: '#ecebff',
					200: '#8c8170',
					300: '#c2c3c3',
					400: '#a1aaaa',
				},
				metal: '#8c8170',
				orange: '#c37a50',
				brown: '#825b3e',
				darkbrown: '#3e2f20',
				midbrown: '#7c7062',
				midgreen: '#a4a94e',
				midgray: '#8c8170',
			},
		},
	},
	safelist: [
		{
			pattern:
				/(from|via|to|bg|text|border)-(transparent|current|white|midnight|metal|silver|orange|brown|midbrown|darkbrown|midgreen|midgray)/,
		},
		{
			pattern: /(from|via|to|bg|text|border)-(silver)-(100|200|300|400)/,
		},
	],
	plugins: ["tailwindcss-animate"]
}

