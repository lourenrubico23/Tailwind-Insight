/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        homeBanner: "url(../dist/img/banner-img.png)",
        project1: "url(../dist/img/projects1.png)",
        project2: "url(../dist/img/projects2.png)",
        project3: "url(../dist/img/projects3.png)",
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

