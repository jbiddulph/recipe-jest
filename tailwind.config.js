module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "jet-orange": "#ff8000",
        "jet-dark-gray": "#242e30",
        "jet-light-gray": "#fafafa"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
