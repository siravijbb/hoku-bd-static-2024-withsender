/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  important: '#__next',
  theme: {
    extend: {}
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}
