/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        homeBanner: "url(../dist/img/banner-img.png)"
      },
      colors:{
        light: "#ffffff",
        dark: "#2b2b2b",
        lightred: "#ff4041",
        lightyellow: "#faab33",
        lightblue: "#487be3",
        darkblue: "#2d55cc",
        lightgray: "#9a9a9a",
      }
    },
  },
  plugins: [],
}

