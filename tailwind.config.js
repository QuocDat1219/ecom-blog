
module.exports = {
  content: [

    "./src/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'title-color': '#00FFFF',
        'text-color': '#FFF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}