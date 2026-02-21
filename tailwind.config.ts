import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        foreground: "#ffffff",
        accent: "#f83200",
        muted: "#999999",
        border: "#333333",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        clash: ["Clash Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
