import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          black: "#181818",
          charcoal: "#191919",
          panel: "#232323",
          green: "#76ff8b",
          mist: "#ecffef",
          particle: "#7c7c7c",
        },
      },
      fontFamily: {
        mono: ["var(--font-inconsolata)", "Inconsolata", "monospace"],
        monofonto: ["var(--font-monofonto)", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      letterSpacing: {
        portfolio: "1.2px",
      },
    },
  },
  plugins: [],
};

export default config;
