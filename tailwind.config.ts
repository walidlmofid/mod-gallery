import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#00ffcc",
          dark: "#121212",
          card: "#1a1a1a",
          border: "#2a2a2a",
        },
      },
      fontFamily: {
        exo: ['"Exo 2"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
