/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter"', "sans-serif"],
        //'inter': ["Inter", "sans-serif"],
        //'display': ['Inter', "sans-serif"],
      //'body': ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
}

