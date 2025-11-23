import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.1', fontWeight: '400' }], // Hero headings - large and bold
        'h2': ['40px', { lineHeight: '1.2', fontWeight: '400' }], // Section headings
        'h3': ['32px', { lineHeight: '1.3', fontWeight: '400' }], // Subsection headings
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '400' }], // Card titles
        'h5': ['20px', { lineHeight: '1.4', fontWeight: '400' }], // Small headings
        'h6': ['18px', { lineHeight: '1.5', fontWeight: '400' }], // Smallest headings
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }], // Body text - matches Pure Sports Medicine
      },
      colors: {
        primary: {
          // Blue gradient palette from darkest to lightest
          50: '#e6f2ff',   // Very light pastel blue (far right)
          100: '#b3d9ff',  // Light sky blue (fourth stripe)
          200: '#4da6ff',  // Medium royal blue (middle stripe)
          300: '#0066cc',  // Dark muted blue (second stripe)
          400: '#003366',  // Very dark navy (far left)
          500: '#0066cc', // Main medium blue
          600: '#0052a3',
          700: '#003d7a',
          800: '#002952',
          900: '#001429', // Darkest navy
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
