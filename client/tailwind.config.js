/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPurple: "#241229",
        lightPurple: "#D375B9",
        darkSlate: "#25273D",
        mediumSlate: "#404363",
      },
      fontFamily: {
        sans: ['"Josefin Sans"', "sans-serif"], // Default for body text
        josefin: ['"Josefin Sans"', "sans-serif"], // Custom class
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
