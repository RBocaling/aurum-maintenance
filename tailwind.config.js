/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        "rotate-coin": "rotate-coin 3s linear infinite",
        lighting: "lighting 2s infinite",
        "spin-slow": "spin 3s linear infinite", // Custom slow spin
        "spin-fast": "spin 0.5s linear infinite", // Custom fast spin
      },
      keyframes: {
        lighting: {
          "0%, 100%": {
            textShadow: "0 0 3px #ffc107, 0 0 6px #ffc107, 0 0 10px #ffc107",
          },
          "50%": {
            textShadow: "0 0 6px #ffd700, 0 0 12px #ffd700, 0 0 18px #ffd700",
          },
        },
      },
      fontFamily: {
        sans: ['"Saira"', "serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        saira: ["Saira Condensed", "san-serif"],
      },
      colors: {
        background: "#1E1E20",
        accent: "#171717",
        primary: "#dca955",
        secondary: "#ABABAB",
        silver: {
          DEFAULT: "#C0C0C0",
          10: "rgba(192, 192, 192, 0.1)",
        },
        ash: "#2F2F2F",
        charcoalBlue: "#131211",
        golden: "#dca955",
        smoke: "#ecf0f1",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, #dca955 0%, #b39b41 100%)",
      },
    },
  },
};
