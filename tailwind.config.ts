import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
      },
      textColor: {
        skin: {
          base: "var(--text-color-base)",
          muted: "var(--text-color-muted)",
        },
      },
      backgroundColor: {
        skin: {
          fill: {
            primary: "var(--color-fill-primary)",
            secondary: {
              default: "var(--color-fill-secondary)",
              active: "var(--color-fill-secondary-active)",
            },
            accent: "var(--color-fill-accent)",
          },
        },
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
