import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minHeight: {
        "half": "50vh",
        "1/4": "25vh",
      },
      maxWidth: {
        "custom-l-thin": "60vw",
        "custom-l-wide": "80vw",
      },
      height: {
        "3/4": "75vh",
        "third": "33vh",
        "l-third": "38vh",
      },
      width: {
        "custom-1/2": "48.6%",
        "custom-1/3": "32.4%",
        "custom-1/4": "23.8%",
        "blog-thin": "38vw",
        "blog-wide": "70vw",
      },
      minWidth: {
        "custom-1/2": "48.6%",
        "custom-1/3": "32.4%",
        "custom-1/4": "23.8%",
      },
      backgroundColor: {
        "custom-black": "#000",
      },
      textColor: {
        "custom-white": "#fff",
      },
      borderColor: {
        "custom-default": "#bbb",
      },
      spacing: {
        "n-1": "-0.8em",
        "n-3": "-3em"
      },
      borderWidth: {
        "t-dotted": "dotted 2px #000",
        "t-solid": "solid 2px #000",
      }
    },
  },
  plugins: [],
}
export default config
