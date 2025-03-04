import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bd: ["Abril Fatface", "cursive"],
        sm: ["Kode Mono", "sans-serif"],
        system: ["poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#C2410C", // Dark Orange
          light: "#EA580C", // Medium-Dark Orange
          dark: "#9A3412", // Deeper Orange
        },
        secondary: {
          DEFAULT: "#F97316", // Vibrant Orange
          light: "#FB923C", // Light Orange
          dark: "#EA580C", // Deep Orange
        },
        accent: {
          DEFAULT: "#FB923C", // Bright Orange
          light: "#FED7AA", // Light Orange
          dark: "#F97316", // Medium Orange
        },
        background: {
          DEFAULT: "#FFFFFF", // Pure White
          light: "#FAFAFA", // Subtle Off-White
          dark: "#F8FAFC", // Very Light Gray
        },
        text: {
          DEFAULT: "#1F2937", // Dark Gray
          light: "#4B5563", // Medium Gray
          dark: "#111827", // Almost Black
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
