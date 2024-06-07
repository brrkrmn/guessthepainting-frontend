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
      tablet: "600px",
      laptop: "1024px",
    },
    extend: {
      colors: {
        background: {
          light: "#f3f2ea",
          dark: "#ebe7de",
          transparent: "#f3f2ea66",
        },
        blue: {
          light: "#96a6bc",
          dark: "#879bb5",
        },
        brown: {
          light: "#73664fb8",
          dark: "#73664f",
        },
        black: "#45484c",
        success: {
          foreground: "#2E6331",
          background: "#628a5d5f",
        },
        danger: {
          foreground: "#A0372D",
          background: "#6204045f",
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
      keyframes: {
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
