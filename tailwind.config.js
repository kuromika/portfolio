/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      custom: [
        "Unbounded",
        "system-ui",
        "-apple-system",
        "Ubuntu",
        "sans-serif;",
      ],
    },
  },
  plugins: [],
};
