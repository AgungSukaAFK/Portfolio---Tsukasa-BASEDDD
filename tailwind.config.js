/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        dark: "#334155",
        hamburger: "#64748b",
        test: "#d8b4fe",
      },
      minWidth: {
        "1/3": "33.3%",
        "80": "80px",
      },
      maxWidth: {
        "1/3": "33.3%",
      },
      aspectRatio: {
        "16/10": "16 / 10"
      }
    },
  },
  plugins: [],
}

