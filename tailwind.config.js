/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#292a2d",
          "200": "#131313",
          "300": "rgba(0, 0, 0, 0.9)",
          "400": "rgba(255, 255, 255, 0.9)",
          "500": "rgba(0, 0, 0, 0)",
        },
        silver: "#c2beb6",
        black: "#000",
        indianred: "#a75e5d",
        "gray-2": "#4f4f4f",
        whitesmoke: "#f8f9fb",
        darkslategray: "#18574a",
        "gray-1": "#828282",
        divider: "#c4c4c4",
        "main-color": "#e6f1fa",
        "light-blue-hover": "#f0f2f2",
        "black-2": "#3f3f3f",
        "main-color-2": "#eb5757",
        linen: "#f3ece2",
        slategray: "#666689",
        darkgray: "#aaaba7",
        pink: {
          "100": "#facbce",
          "200": "#dab1b1",
        },
        lightsteelblue: "#88abcb",
        brown: "#971e34",
        darkcyan: "#2b9fa7",
        steelblue: {
          "100": "#5884aa",
          "200": "#24426a",
        },
        darkgoldenrod: "#cba13e",
        "gray-4": "#bdbdbd",
        dimgray: "#73513c",
        link: "#0f6db1",
        palevioletred: "#c35c71",
      },
      fontFamily: {
        "oswald-medium-14": "Oswald",
        "roboto-light": "'Roboto Light'",
        "roboto-regular-14-aa": "Roboto",
        "roboto-medium-14": "'Roboto Medium'",
      },
    },
    fontSize: {
      sm: "14px",
      "3xl": "22px",
      xs: "12px",
      lg: "18px",
      "6xl": "25px",
      xl: "20px",
      "29xl": "48px",
      "5xl": "24px",
      "7xl": "26px",
      smi: "13px",
      base: "16px",
      "37xl": "56px",
      "13xl": "32px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
