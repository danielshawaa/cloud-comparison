/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'aws-orange': '#FF9900',
        'aws-orange-dark': '#e68900',
        'aws-dark': '#232F3E',
        'aws-dark-light': '#37475A',
      },
    },
  },
  plugins: [],
}
