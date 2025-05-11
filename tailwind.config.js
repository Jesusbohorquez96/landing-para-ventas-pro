/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'primary-light': '#ffffff',
        'primary-dark': '#121212',
        'secondary-light': '#f8f9fa',
        'secondary-dark': '#1e1e1e',
      },
      textColor: {
        'primary-light': '#212529',
        'primary-dark': '#e9ecef',
        'secondary-light': '#6c757d',
        'secondary-dark': '#adb5bd',
      },
      borderColor: {
        'light': '#dee2e6',
        'dark': '#343a40',
      },
    },
  },
  plugins: [],
};
