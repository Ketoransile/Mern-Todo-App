/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Josefin Sans"', "sans-serif"], // Default for body text
        josefin: ['"Josefin Sans"', "sans-serif"], // Custom class
      },
    },
  },
  plugins: [],
};
