/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#000D29",
        lightblue: "#118C8B",
        salmon: "#F2746B",
        darksalmon: "#F14D49",
        beige: "#BCA18D",
      },
    },
  },
  plugins: [],
};
