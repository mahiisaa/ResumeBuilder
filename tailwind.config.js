/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        "2XL": "50px",
        XL: "40px",
        L: "32px",
        M: "24px",
        S: "16px",
        XS: "8px",
        XXS: "4px",
      },
      width: {
        A4: "210mm",
      },
      height: {
        A4: "297mm",
      },
      spacing: {
        "2XL": "50px",
        XL: "40px",
        L: "32px",
        M: "24px",
        S: "16px",
        XS: "8px",
      },
      scale: {
        "-100": "-1",
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
    colors: {
      bgColor: "#dee2e6",
      bgColorLight: "#edeff1",
      primary: "#2B58C4",
      primaryDark: "#1e3d7d",
      primaryLight: "#dee6f7",
      secondColor: "#ffb703",
      errorColor: "#d90429",
      errorColorLight: "#ef233c",
      myblack: "#0d0d0f",
      successColor: "#2ecc71",
      mygray: "#999ca9",
    },
    fontSize: {
      xs: ["12px", "20.73px"],
      sm: ["14px", "24.18px"],
      base: ["16px", "27.64px"],
      xl: ["20px", "34.55px"],
      "2xl": ["24px", "41.45px"],
      "3xl": ["32px", "55.26px"],
      "4xl": ["48px", "82.09px"],
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
          primary: "#2B58C4",
          successColor: "#2ecc71",
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

