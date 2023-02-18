/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backfill: {
          dark: {
            200: "#535353",
            300: "#434343",
            400: "#333333",
            500: "#242424",
          },
          light: {
            500: "#EFEFEF",
          },
        },
        primary: {
          dark: {
            100: "#9DBFD0",
            200: "#93B8CB",
            300: "#89B2C6",
            400: "#7FABC1",
            500: "#74A4BC",
            600: "#679BB6",
            700: "#5892AE",
            800: "#4E86A2",
            900: "#477A94",
          },
        },
        color: {
          dark: {
            base: "#C0C0C0",
            inverted: "#0A0A0A",
          },
          light: {
            base: "##0A0A0A",
            inverted: "#C0C0C0",
          },
        },
      },
    },
  },
  plugins: [],
};
