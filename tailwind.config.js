/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#1D2530",
        secondary: "#42B883",
        dark: "#111A25",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
