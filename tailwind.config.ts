import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B71F31",
        secondary: "#F1E9DE",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
       backgroundSize: {
        "size-100": "100% 100%",
        "size-200": "200% 200%",
      },
      backgroundImage: {
        'radial-primary': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
        "pos-150": "105% 105%",
      },
    },
  },
  plugins: [],
} satisfies Config;
