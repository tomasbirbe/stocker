/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./app/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4f6bed",
          dark: "#4f6bed",
        },
        secondary: {
          light: "#50D5ED",
          dark: "#50D5ED",
        },
        accent: {
          light: "#9B50ED",
          dark: "#9B50ED",
        },
        light: "#fff",
        dark: "#000",
      },
    },
  },
  plugins: [],
};
