/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "050505": "#050505",
        a445ed: "#A445ED",
        757575: "#757575",
        "2D2D2D": "#2D2D2D",
        f4f4f4: "#F4F4F4",
        e9e9e9: "#E9E9E9",
      },
      boxShadow: {
        "white-sh": "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
