module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        'black-t-50': 'rgba(0,0,0,0.5)',
      },
      gridTemplateColumns: {
        'small': 'repeat(4, 30%)',
        'md': 'repeat(5, 22%)',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
