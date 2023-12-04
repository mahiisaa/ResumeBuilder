/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "2XL": "50px",
        XL: "40px",
        L: "32px",
        M: "24px",
        S: "16px",
        XS: "8px",
      },
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors:{

      "bgColor":"#dee2e6",
      "primary":"#3a0ca3",
      "secondary":"#4361ee",
      "myblack":"#0d0d0f",
      "mygray":"#999ca9"
    },
    fontSize: {
      xs: ["12px", "20.73px"],
      sm: ["14px", "24.18px"],
      base: ["16px", "27.64px"],
      xl: ["20px", "34.55px"],
      "2xl": ["24px", "41.45px"],
      "3xl": ["32px", "41.45px"],
    },
    fontFamily: {
      vazir: ["Vazir"],
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#3a0ca3",
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}

