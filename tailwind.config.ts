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
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          active: "var(--color-text-active)",
          accent: {
            link: {
              base: "var(--color-accent-link-text-base)",
              hover: "var(--color-accent-link-text-hover)",
            },
          },
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
            tertiary: "var(--color-fill-teritiary)",
            accent: {
              base: "var(--color-fill-accent)",
              hover: "var(--color-fill-accent-hover)",
            },
            chart: {
              bar: {
                default: "var(--color-fill-chart-bar)",
              },
            },
            skeleton: {
              item: "var(--color-fill-skeleton-item)",
            },
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
