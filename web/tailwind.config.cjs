/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  	'./src/**/*.tsx',
  	'./index.html',
  ],
  theme: {
  	fontFamily: {
  		sans: ['Inter', 'sans-serif'],
  	},
    extend: {
    	backgroundImage: {
    		galaxy: "url('/images/galaxy-background.png')",
    		'nlw-gradient': 'linear-gradient(89.85deg, #9572FC, #43E7AD, #E1D55D)',
    		'game-gradient': 'linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.9) 67.88%)',
    	}
    },
  },
  plugins: [],
}
