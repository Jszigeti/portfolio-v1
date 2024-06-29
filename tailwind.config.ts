import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-ibmPlexSans)",
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
        },
      },
      animation: {
        bounce: "bounce 1s infinite",
        "bounce-delay-200": "bounce 1s infinite 0.2s",
        "bounce-delay-400": "bounce 1s infinite 0.4s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
