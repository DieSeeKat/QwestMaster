import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        accent: "var(--accent)",
        text: "var(--text)"
      },
      fontFamily: {
        // Define your custom fonts here
        robotoslab: ['var(--font-roboto-slab)', 'slab-serif'],
        montserrat: ['var(--montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
