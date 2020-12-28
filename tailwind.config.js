module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: '#842eff', // TEMP
        DEFAULT: '#6900ff',
        dark: '#3d0094', // TEMP
      },
      secondary: '#1b0041',
      background: '#12002b',
      error: '#ed3939',
      black: '#0B001A',
      white: '#fff',
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'footer-background': "url('/dark-purple-slime.svg')",
      },
      backgroundSize: {
        '30%': '30%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
