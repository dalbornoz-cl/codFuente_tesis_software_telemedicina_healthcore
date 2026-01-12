/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        'node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
        'node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
        './node_modules/react-tailwindcss-select/dist/index.esm.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
