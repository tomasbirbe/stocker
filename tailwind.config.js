/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./app/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#645DD7",
          dark: "#645DD7",
        },
        secondary: {
          light: "#D6625C",
          dark: "#D6625C",
        },
        accent: {
          light: "#5CD662",
          dark: "#5CD662",
        },
        light: "#fff",
        dark: "#000",
      },
    },
  },
  plugins: [],
};
