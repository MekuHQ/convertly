/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./App.jsx",
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            mono: ['Roboto Mono', 'monospace'],
          },
          animation: {
            'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          },
        },
      },
      plugins: [],
    }