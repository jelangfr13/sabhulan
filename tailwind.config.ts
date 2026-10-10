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
        sabhulan: {
          cream: "#FAF6F0",
          creamLight: "#FFFDF9",
          creamDark: "#F1E8DC",
          brown: "#4A2311",
          brownDark: "#34170A",
          brownLight: "#6B371E",
          gold: "#F59E0B",
          goldHover: "#D97706",
          goldLight: "#FEF3C7",
          goldMuted: "#FDE68A",
        },
        brand: {
          wa: "#25D366",
          waHover: "#1EA952",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        warm: "0 4px 20px -2px rgba(74, 35, 17, 0.08)",
        "warm-lg": "0 10px 25px -3px rgba(74, 35, 17, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
