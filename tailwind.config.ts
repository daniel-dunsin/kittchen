import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "rgba(255, 122, 0, 1)",
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(rgba(255, 122, 0, 1), rgba(248, 42, 42, 1))",
      },
    },
  },
  plugins: [],
};
export default config;
