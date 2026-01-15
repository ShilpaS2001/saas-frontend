/** @type {import('tailwindcss').Config} */
module.exports = {
  // This is the absolute requirement for the toggle to work
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // This links your CSS variables to Tailwind utility classes
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
}