/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgprimary: "hsl(0, 0%, 10%)",
        textprimary: "hsl(0, 0%, 100%);",
        textsecondary: "hsla(0, 0%, 100%, 0.9)",
        texttertiary: "hsla(0, 0%, 100%, 0.7)",
        accentprimary: "hsl(196, 100%, 50%)",
        accentsecondary: "#9900ff",
        accenttertiary: "#d2c",
        accentquaternary: "#ff0066",
      },
    },
  },
  plugins: [],
};
