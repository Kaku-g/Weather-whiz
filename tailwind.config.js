module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/*.{.js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
