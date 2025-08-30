import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                'disabled': '#e5e7eb'
            },
            textColor: {
                'disabled': '#9ca3af'
            },
            borderColor: {
                'disabled': '#d1d5db'
            }
        },
    },
    plugins: [],
});
