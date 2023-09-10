/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      colors: {
        common: "#5C98F2",
      },
    },
  },
  plugins: [],
};
