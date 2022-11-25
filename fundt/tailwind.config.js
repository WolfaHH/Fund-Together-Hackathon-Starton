/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{jsx,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    minHeight: {

      '0': '0',

      '1/4': '25%',

      '1/2': '50%',

      '3/4': '75%',

      'full': '100%',
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms')
  ],
}
