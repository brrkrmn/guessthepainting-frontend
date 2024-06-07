import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "425px",
      tablet: "512px",
      laptop: "1024px",
    },
    extend: {
      colors: {
        background: "#f3f2ea",
        blue: {
          light: "#96a6bc",
          dark: "#879bb5",
        },
        brown: {
          main: "#73664fb8",
        },
      },
      fontFamily: {
        fairplay: ["var(--font-fairplay)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
