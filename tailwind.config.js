// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      scale: {
        '102': '1.02',
      },
      fontFamily: {
        arial :["Arial","sans-serif"],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
        wix: ['"Wix Madefor Display"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        bauhaus: ['Bauhaus', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
