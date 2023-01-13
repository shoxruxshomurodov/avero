/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "primary-blue": "#043785",
        "primary-red": "#FF354D",
        "primary-gray": "#484F53",
        "secondary-gray": "#7c7c7c",
      },
    },

    container: {
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
