/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#007BFF",
          "secondary": "#6C757D",
          "success": "#28A745",
          "danger": "#DC3545",
          "warning": "#FFC107",
          "info": "#17A2B8",
          "light": "#F8F9FA",
          "dark": "#343A40",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
