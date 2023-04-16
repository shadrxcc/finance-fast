/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgrey: "hsla(0, 0%, 58%, 0.5);",
        trpborder: "rgba(148, 148, 148, 0.5);",
        cardbg: "rgba(234, 231, 255, 0.7)",
        pinkbg: "rgba(241, 221, 255, 0.7)",
      },
    },
  },
  plugins: [],
};