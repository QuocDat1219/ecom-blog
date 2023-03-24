
module.exports = {
  content: [

    "./src/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'color-basic': '#0B1A4A',
        'text-color': '#FFF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}