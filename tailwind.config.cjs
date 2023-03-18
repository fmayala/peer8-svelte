const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#112E51',
				secondary: '#FDB736',
				inactiveButton: '#F0F0F0',
				inactiveText: '#A0AEC0'
			}
		}
	},
	// Only add this if you installed the Tailwind CSS plugins:
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};

module.exports = config;