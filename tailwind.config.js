/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        common: "#5C98F2",
        header: "#F8F8F8",
        hover: "#5393f3",
      },
      colors: {
        common: "#5C98F2",
      },
      borderColor: {
        common: "#5C98F2",
      },
      backgroundImage: {
        "resort-banner": "url('/images/resort1.jpg')",
      },
    },
  },
  plugins: [],
});
