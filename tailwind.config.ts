import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shams: {
          background: "#080706",
          surface: "#17110D",
          orange: "#FF6A00",
          glow: "#FF9A3D",
          text: "#F7F3EE",
          muted: "#A89F97",
        },
      },
    },
  },
  plugins: [],
};

export default config;