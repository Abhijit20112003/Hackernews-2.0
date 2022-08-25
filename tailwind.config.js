/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hacker': '#FF7600',
        'hlight': '#E7FBFF',
      },
  },
},
  plugins: [],
}