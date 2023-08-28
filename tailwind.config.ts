import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      // => @media (min-width: px) { ... }
      s: "350px",
      m: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    backgroundImage: {
      "slider-gradient":
        "linear-gradient(90deg, #b6dded 0, #b9dcef 3.33%, #bddbf1 6.67%, #c1daf2 10%, #c5d8f3 13.33%, #cad7f3 16.67%, #ced6f2 20%, #d3d4f1 23.33%, #d8d3f0 26.67%, #ddd2ee 30%, #e2d1eb 33.33%, #e6d0e8 36.67%, #eacfe5 40%, #edcee2 43.33%, #f0cdde 46.67%, #f2cdda 50%, #f4cdd6 53.33%, #f5cdd2 56.67%, #f5cdce 60%, #f5cdcb 63.33%, #f5cec7 66.67%, #f3cfc4 70%, #f2d0c1 73.33%, #efd1bf 76.67%, #edd2bd 80%, #ead3bb 83.33%, #e6d4ba 86.67%, #e2d5ba 90%, #ded7ba 93.33%, #dad8bb 96.67%, #d6d9bc 100%)",
    },
  },
  plugins: [],
};
export default config;
