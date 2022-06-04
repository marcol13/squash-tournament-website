module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        advent: ["Advent Pro", "sans-serif"],
      },
      colors: {
        "custom-white": "#FEFEFE",
        "custom-black": "#333237",
        "custom-dark-gray": "#525055",
        "custom-light-gray": "#828991",
        "custom-blue": "#3DC8DC",
        "custom-gradient-green": "#00ef90",
        "custom-gradient-blue": "#00a5f4",
      },
      zIndex: {
        n1: "-1",
      },
    },
  },
  plugins: [],
};
