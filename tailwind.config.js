/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite
  ],
}

