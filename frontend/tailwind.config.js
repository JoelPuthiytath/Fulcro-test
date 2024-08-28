/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"
export default withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'custom-blue': '#001B94',
          },
          fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
          },
        },
      },
  plugins: [],
})
