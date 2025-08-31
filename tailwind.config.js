import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: ['disabled'],
            textColor: ['disabled'],
            borderColor: ['disabled']
        },
    },
    plugins: [],
});
