/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        care: "#f59e0b",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "fantasy", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
    themes: [
      // "light",
      "dark",
      "cupcake",
      {
        // light but with overrides
        care: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#f59e0b",
          "primary-focus": "#d97706",
          "primary-content": "#ffffff",
          secondary: "#f59e0b",
          "secondary-focus": "#d97706",
          "secondary-content": "#ffffff",
          // "base-100": "#d97706",
          // "base-200": "#d97706",
          // "base-300": "#d97706",
        },
      },
      {},
    ],

    // themes: [
    //   "light",
    //   "dark",
    //   "cupcake",
    //   "bumblebee",
    //   "emerald",
    //   "corporate",
    //   "synthwave",
    //   "retro",
    //   "cyberpunk",
    //   "valentine",
    //   "halloween",
    //   "garden",
    //   "forest",
    //   "aqua",
    //   "lofi",
    //   "pastel",
    //   "fantasy",
    //   "wireframe",
    //   "black",
    //   "luxury",
    //   "dracula",
    //   "cmyk",
    //   "autumn",
    //   "business",
    //   "acid",
    //   "lemonade",
    //   "night",
    //   "coffee",
    //   "winter",
    //   "dim",
    //   "nord",
    //   "sunset",
    // ],
  },
};
