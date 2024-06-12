/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,html,css}",
    "./components/**/*.js",
    // "!./components/Navbar.js",
  ],
  theme: {
    extend: {
      width: {
        "1/8": "12.5%",
      },
      colors: {
        // "primary-color": "#ffc933",
        // "primary-color": "#E1B70B",
        "primary-color": "#538392",
        "primary-grey": "#A0A3BD",
      },
    },
  },
  darkMode: "class",
  important: true,
};

export default config;
