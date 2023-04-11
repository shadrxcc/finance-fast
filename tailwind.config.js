/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgrey: "hsla(0, 0%, 58%, 0.5);",
      },
    },
  },
  plugins: [],
};