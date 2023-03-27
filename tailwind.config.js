module.exports = {
  content: ["./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "color-basic": "#C9EEFF",
        "text-color": "black",
        "color-title": "#6698FF",
        "color-card": "#FFF",
        "color-button": "#6698FF ",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
