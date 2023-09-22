import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--merriweather)"],
        sans: ["var(--inter)"],
      },
      colors: {
        red: {
          pastel: "#fae1e1",
          fire: "#fa6464",
        },
        yellow: {
          pastel: "#faf9e1",
          fire: "#faf264",
        },
        green: {
          pastel: "#e1fae7",
          fire: "#64fa87",
        },
        cyan: {
          pastel: "#e1faf8",
          fire: "#64faf0",
        },
        blue: {
          pastel: "#e1f2fa",
          fire: "#5acafa",
        },
        purple: {
          pastel: "#f0e1fa",
          fire: "#c164fa",
        },
        text: {
          100: "#161616",
          75: "#505050",
          50: "#8a8a8a",
          25: "#c4c4c4",
        },
      },
      boxShadow: {
        drop: "3px 3px 0px 0px #161616",
        "drop-mini": "2px 2px 0px 0px #161616",
      },
      fontSize: {
        h1: "4.25rem",
        h2: "3.125rem",
        h3: "2.375rem",
        h4: "1.75rem",
        h5: "1.33rem",
        caption: "0.75rem",
      },
      lineHeight: {
        para: "175%",
        heading: "130%",
      },
      spacing: {
        94: "23.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
