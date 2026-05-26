import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — see ../brand/palette.json for rationale.
        gold: {
          50:  "#fbf5e6",
          100: "#f4e6bf",
          400: "#d8b569",
          500: "#c9a24b",   // primary accent
          600: "#a8862e",
          700: "#8a6a2b",   // accent hover
          900: "#5a4516",
        },
        ink: {
          DEFAULT: "#0c0a08",
          muted:   "#5c5147",
          soft:    "#857a6d",
        },
        paper: {
          DEFAULT: "#f5efe4",
          alt:     "#ece4d3",
        },
        surface: {
          DEFAULT: "#ffffff",
        },
      },
      fontFamily: {
        sans:    ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      borderRadius: {
        xl:   "0.875rem",
        "2xl":"1.25rem",
      },
      boxShadow: {
        card:    "0 1px 2px rgba(12,10,8,0.05), 0 12px 32px rgba(12,10,8,0.08)",
        regal:   "0 20px 60px -20px rgba(201,162,75,0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
