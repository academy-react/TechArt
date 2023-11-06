/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      BackgroundImage: {
        "my-Image": "url(../src/assets/image/hero/09.jpg)",
      },
    },
  },
  plugins: [],
};
