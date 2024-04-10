import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#063627",
        Secondary: "#FF3C00",
        Bg_navbar: "#F2F1F0",
      },
      fontFamily: {
        Garmond: ["var(--Garamond-font)"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        vmd: "930px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
export default config;
