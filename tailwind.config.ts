import type { Config } from "tailwindcss";


/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: { center: true, padding: "2rem" },
    extend: {
      
      colors: {
        primaryText: "var(--primaryText)",
        secondaryText: "var(--secondaryText)",
        primaryBg: "var(--primaryBg)",
        secondaryBg: "var(--secondaryBg)",
        yes: "var(--yes)",
        no: "var(--no)",

        
      },
      borderRadius: {
        primary: "4px",
        secondary: "6px",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;