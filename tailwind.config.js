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
            400: "#333333",
            500: "#242424",
          },
          light: {
            500: "#EFEFEF",
          },
        },
        primary: {
          dark: {
            500: "#74A4BC",
          },
        },
        "text-color": { dark: "#C0C0C0", light: "#0A0A0A" },
      },
    },
  },
  plugins: [],
};
