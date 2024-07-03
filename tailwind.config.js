/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgprimary: "hsl(0, 0%, 10%)",
      },
    },
  },
  plugins: [],
};
