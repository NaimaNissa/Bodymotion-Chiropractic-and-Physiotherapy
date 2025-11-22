import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Light blue from logo (body text and icon)
          50: '#e6f4fd',
          100: '#cce9fb',
          200: '#99d3f7',
          300: '#66bdf3',
          400: '#33a7ef',
          500: '#0091eb', // Main light blue
          600: '#0074bc',
          700: '#00578d',
          800: '#003a5e',
          900: '#001d2f',
        },
        secondary: {
          // Teal/darker blue from logo (motion text)
          50: '#e6f7f5',
          100: '#ccefeb',
          200: '#99dfd7',
          300: '#66cfc3',
          400: '#33bfaf',
          500: '#00af9b', // Main teal
          600: '#008c7c',
          700: '#00695d',
          800: '#00463e',
          900: '#00231f',
        },
        accent: {
          // Complementary teal-blue
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Accent blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
};
export default config;
