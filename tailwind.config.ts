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
      },
      width: {
        "custom-1/2": "48.6%",
        "custom-1/3": "31.4%",
        "custom-1/4": "23.6%",
      },
      backgroundColor: {
        "custom-black": "#000",
      },
      textColor: {
        "custom-white": "#fff",
      },
      borderColor: {
        "custom-default": "#bbb",
      }
    },
  },
  plugins: [],
}
export default config
