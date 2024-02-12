/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				CRed: "#FC5252",
				ClRed: "#FFA3A3",
				CBlue: "#381DDB",
				CDark: "#222222",
				CDark03: "rgba(34,34,34,0.03)",
				CDark2: "rgba(34,34,34,0.2)",
				CDark3: "rgba(34,34,34,0.3)",
				CDark7: "rgba(34,34,34,0.7)",
			},
		},
	},
	plugins: [],
};
