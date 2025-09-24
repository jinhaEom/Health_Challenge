/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: { 
        'blue' : '#0271e3',
        'light-blue' : '#3b82f6',
        'lighest-blue' : '#e0f2fe',
        'gray' : '#6B7280',
        'light-gray' :"#E5E7EB",
        'dark-gray' : "#2d3237",
        'white' : '#ffffff',
        'background' : '#gray-50',
        'red' : '#ef4444',
        'yellow' : '#f59e0b',
      },
    },
  },
  plugins: [],
} 