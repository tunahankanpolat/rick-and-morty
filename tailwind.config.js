export const colors = {
  primary: '#FF9800',
  black: '#333',
  white: '#fff',
  backBlack: '#202329',
  gray: '#9E9E9E',
  whitesmoke: '#f5f5f5',
  lightgray: 'rgba(46, 41, 51, 0.08)',
  red: '#d63d2e',
  green: '#55cc44',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'phone': {'max': '650px'},
      'mobile': {'max': '890px'},
    },
    extend: {
      flex: {
        '2': '2 1 0%',
        '3': '3 1 0%'
      },
      height: {
        nav: '60px',
      },
      minHeight: {
        nav: '60px',
        nav2x: '120px',
      },
      width: {
        content: '960px',
        sidebar: '260px'
      },
      maxWidth: {
        content: '960px',
        sidebar: '260px'
      },
      maxHeight: {
        content: '960px',
        sidebar: '260px'
      },
      
      margin: {
        nav: '60px',
      },
      colors: {
        primary: colors.primary,
        black: colors.black,
        white: colors.white,
        backBlack: colors.backBlack,
        gray: colors.gray,
        whitesmoke: colors.whitesmoke,
        lightgray: colors.lightgray,
        red: colors.red,
        green: colors.green,
      },
      boxShadow: {
        lg: 'rgba(0, 0, 0, 0.08) 0px 5px 20px',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}