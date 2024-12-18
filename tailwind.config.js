/** @type {import('tailwindcss').Config} */
// import './index.css'; 

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bell: ['ChristmasBell'],
        clouts: ['Clouts'],
        christmasBox: ['Christmas-box'],
        playful: ['Playful'],
      }
    },
  },
  plugins: [],
}

