/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#BCD9A0",
        backgroundDark: "#94be83",
        dark: "#2F3160", // Text
        dark2: "#1C1D3C",
        light: "#4C53A8", // footer
        gray: "#1C1D3C", // text
        white: '#ebede6',
        blackLight: '#29292b',
        rot: '#e95253',
        // lightGray: "#BDBDBD", // form elemente
      },
      fontFamily: {
        'body': ['"Amatic SC"']
      },
      boxShadow: {
        standard: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        'small' : '450px',
        'medium': '560px',
        'large' : '940px',
      },
    },
  },
  plugins: [],
}
