/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["corporate"],
  },
};
