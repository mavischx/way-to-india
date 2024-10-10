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
        foreground: "var(--foreground)",
        "carrot-orange": "#FF8B02",
        "milk-white": "#FFFFFF",
        "heavy-metal": "#262626",
      },
      fontFamily: {
        openSans: ["'Open Sans'", 'sans-serif'],
        lexend: ['Lexend', 'sans-serif']
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        MobileScreen: { max: "480.5px" },
        TabletScreen: { min: "480.5px", max: "1024.5px" },
        DesktopScreen: { min: "1024.5px" },
      },
    },
  },
  plugins: [],
};
export default config;
