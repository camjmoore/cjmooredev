/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "noise2-bg": "url('/allNoise512.png')",
        "noise-bg": "url('/noisebg.svg')",
        "gradient-circle": "url('/gradientCircle.svg')",
        spectrum: "url('/spectrum.png')",
      },
      colors: {
        ignis1: "#fb923c",
        ignis2: "#f97316",
        epis: "#2aa198",
        mesos: "#268bd2",
        bathys1: "#002b36",
        bathys2: "#073642",
        abyss1: "#0f172a",
        abyss2: "#1e293b",
        helios1: "#eee8d5",
        helios2: "#fdf6e3",
        nimbo1: "#586e75",
        nimbo2: "#657b83",
        cumulo1: "#839496",
        cumulo2: "#93a1a1",
      },
    },
  },
  plugins: [],
};
