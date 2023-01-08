/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f8edeb",
        darkRosa: "#ffb5a7", // Text
        lightRosa: "#fcd5ce", // footer
        gray: "#515151", // text
        lightGray: "#BDBDBD", // form elemente
      },
      boxShadow: {
        standard: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
}
