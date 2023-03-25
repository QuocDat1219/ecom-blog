
module.exports = {
  content: [

    "./src/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'color-basic': '#C9EEFF',
        'text-color': 'black',
        'color-title': '#6698FF',
        'color-card': "#FFF"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
