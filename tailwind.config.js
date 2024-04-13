/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
/* const defaultTheme = require('tailwindcss/defaultTheme') */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
'node_modules/flowbite-react/lib/esm/**/*.js'],
darkMode: 'media',

  theme: {
    extend: {
   fontFamily: {

      'Roboto-LightItalic': ['Roboto-LightItalic', 'serif'],
      'Roboto-Regular': ['Roboto-Regular', 'serif'],
      'Roboto-Medium': ['Roboto-Medium', 'serif'],
      'Roboto-Bold': ['Roboto-Bold', 'serif'],
      'Roboto-Black': ['Roboto-Black', 'serif'],
      'Roboto-BlackItalic': ['Roboto-BlackItalic', 'serif'],
      'Roboto-Light': ['Roboto-Light', 'serif'],
      'Roboto-ThinItalic': ['Roboto-ThinItalic', 'serif'],
      'Roboto-Thin': ['Roboto-Thin', 'serif'],
      'Roboto-MediumItalic': ['Roboto-MediumItalic', 'serif'],
                            
      
    },
      colors: {
        'primary': '#d1c7c7ff',
        'secondary': '#FAF5F3',
        'tertiary': '#BAC0CA',
        'quaternary': '#362B23',
        'quinary': '#D9D9D9',
        'dark-pink':'#9e8689ff',
        'dark-mode': '#0f1729ff',
        'darks':'#1e293bff'
      }
    },
  },
  plugins: [
     require('flowbite/plugin')
  ],
}

