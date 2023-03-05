/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
      'fraunces': ['Fraunces', 'serif']
    },
    extend: {
      colors: {
        "dark-cyan": "var(--dark-cyan)",
        "cream": "var(--cream)",
        "very-dark-blue": "var(--very-dark-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "whiteoff": "var(--white)"
      }
    },
  },
  plugins: [],
}
