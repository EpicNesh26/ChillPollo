// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx,html}',
//   ],
//   theme: {
//     screens:{
//       'sm':'300px'

//     },
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px', // Custom small screen breakpoint
        '3xl':'1500px',
        '4xl': '2500px'
      },
    },
  },
  plugins: [],
}
