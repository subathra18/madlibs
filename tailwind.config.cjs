/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cl-white": "white",
        "caratlane-pink": "#f6f3f9",
        "caratlane-dummy": "#EAE3FF",
        "cl-text": "#4f3267",
        "cl-button": "#935aff",
        "cl-border": "#de57e5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["winter", "dracula"],
  },
};
