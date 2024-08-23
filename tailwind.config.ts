import type { Config } from "tailwindcss";

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
      colors:{
        pinkish:"#3d5a80",
        bluish:"#98c1d9",
        whitish:"#e0fbfc",
        orangy:"#ee6c4d",
        greyish:"#293241",
        yellowish:"#FAE27C",
        watery:"#42b0f5",
      }
      
    },
  },
  plugins: [],
};
export default config;
