/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 0.75s infinite both ease",
        heartbeat: "heartbeat 1.5s ease  infinite both",
      },
      },
      keyframes: {
        bounce: {
          "0%, 100%":{transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)"},
          "50%":{transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)"},
        },
        heartbeat: {
          "0%": {
              transform: "scale(1)",
              "transform-origin": "center center",
              "animation-timing-function": "ease-out"
          },
          "10%": {
              transform: "scale(.91)",
              "animation-timing-function": "ease-in"
          },
          "17%": {
              transform: "scale(.98)",
              "animation-timing-function": "ease-out"
          },
          "33%": {
              transform: "scale(.87)",
              "animation-timing-function": "ease-in"
          },
          "45%": {
              transform: "scale(1)",
              "animation-timing-function": "ease-out"
          }
        } 
      },
    },
  plugins: [],
}
