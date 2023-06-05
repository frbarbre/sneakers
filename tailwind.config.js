/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sneak-orange": "hsl(26, 100%, 55%)",
        "sneak-orange-opaque": "hsla(26, 100%, 55%, 0.4)",
        "sneak-orange-pale": "hsl(25, 100%, 94%)",
        "sneak-dark-blue": "hsl(220, 13%, 13%)",
        "sneak-dark-gray": "hsl(219, 9%, 45%)",
        "sneak-medium-gray": "hsl(220, 14%, 75%)",
        "sneak-light-gray": "hsl(223, 64%, 98%)",
        "black-opaque": "rgba(0, 0, 0, 0.75)",
      },
      fontSize: {
        body: "16px",
      },
      screens: {
        xs: "360px",
      },
      minHeight: {
        screencalc: "calc(100vh - 82px )",
      },
    },
  },
  plugins: [],
};
