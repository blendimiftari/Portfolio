/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"]
export const theme = {
  extend: {
    colors: {
      primary: "#5C5470",
      bgc: "#352F44",
      textPrimary: "#FAF0E6",
      paragraph: "#B9B4C7",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"], // Set Inter as the default sans-serif font
    },
    fontSize: {
      paragraphSize: "20px",
      huge: "65px",
      h2: "30px", // Custom font size named 'huge'
    },
  },
}
export const plugins = []
