/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Add custom colors for light and dark mode
        primary: {
          light: '#f59e0b', // light mode primary color
          dark: '#d97706',  // dark mode primary color
        },
        background: {
          light: '#ffffff', // light mode background
          dark: '#1f2937',  // dark mode background
        },
        text: {
          light: '#111827', // light mode text
          dark: '#f3f4f6',  // dark mode text
        }
      },
    },
  },
  plugins: [],
}

