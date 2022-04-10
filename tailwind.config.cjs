module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'Overpass': ['Overpass', 'sans-serif'] 
      },
      colors: {
        "primary": "#fb7413",
        "light-grey": "#959eac",
        'medium-grey': "#7c8798",
        'dark-blue': "#252d37",
        'very-dark-blue': "#131518",
        "dark": "#232A34",
        "darker": "#181E27",
      }
    },
  },
  plugins: [],
}
