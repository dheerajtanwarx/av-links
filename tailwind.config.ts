import type { Config } from "tailwindcss";

/**
 * Brand palette is derived from the AV logo (coral / rose / terracotta)
 * paired with royal maroon and soft gold over a warm cream canvas.
 * Edit these tokens to re-skin the entire page.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF6EE",
        ivory: "#FFFDF8",
        sand: "#F3E7D6",
        maroon: {
          DEFAULT: "#6E1226",
          deep: "#4E0C1B",
          soft: "#8A2638",
        },
        coral: {
          DEFAULT: "#E2735C",
          light: "#EFA290",
          deep: "#CF5A44",
        },
        rose: {
          DEFAULT: "#E89A8C",
        },
        terracotta: "#C46B4F",
        gold: {
          DEFAULT: "#C29A45",
          soft: "#D8B96A",
          deep: "#A87E2C",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(110, 18, 38, 0.18)",
        card: "0 8px 30px -10px rgba(110, 18, 38, 0.15)",
        glow: "0 0 0 1px rgba(216, 185, 106, 0.35), 0 12px 32px -14px rgba(207, 90, 68, 0.45)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
