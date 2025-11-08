import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Warm neutrals - spiritual & thoughtful
        warm: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e4dd',
          300: '#d6d0c4',
          400: '#b8afa0',
          500: '#9d9280',
          600: '#7a6f5f',
          700: '#5f5649',
          800: '#4a4339',
          900: '#3d372f',
          950: '#1f1c17',
        },
        // Accent colors - creative tech energy
        accent: {
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#fececa',
          300: '#fdaba5',
          400: '#fb7a70',
          500: '#f85547',
          600: '#e6392a',
          700: '#c12d20',
          800: '#9f281e',
          900: '#84271e',
          950: '#47100a',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(135deg, #faf9f7 0%, #e8e4dd 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1f1c17 0%, #3d372f 100%)',
      },
    },
  },
  plugins: [],
};
export default config;

