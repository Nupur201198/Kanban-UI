/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}","./node_modules/flowbite/**/*.js","node_modules/flowbite-react/lib/esm/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}
