import defaultTheme from "tailwindcss/defaultTheme"

export default {
  theme: {
    extend: {
      colors: {
        "ckc-orange": "#F36C21",
        "ckc-yellow": "#F8E08E",
        "ckc-blue": "#4FA4DB",
        "ckc-green": "#65B36B",
        "ckc-purple": "#A974B4",
        "ckc-brown": "#9C704A",
        "ckc-beige": "#F8F3E7",
      },
      fontFamily: {
        fun: ["Comic Sans MS", ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
