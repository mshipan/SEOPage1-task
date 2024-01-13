/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      lemon: ["Lemon", "serif"],
      openSans: ["Open Sans", "sans-serif"],
      notoSansJP: ["Noto Sans JP", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
