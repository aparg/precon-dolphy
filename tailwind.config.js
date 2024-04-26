/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,html}",
    "./components/**/*.js",
    "!./components/Navbar.js",
  ],
  theme: {
    extend: {
      width: {
        "1/8": "12.5%",
      },
      colors: {
        "primary-color": "#ffc933",
      },
    },
  },
  darkMode: "class",
  important: true,
};

export default config;
