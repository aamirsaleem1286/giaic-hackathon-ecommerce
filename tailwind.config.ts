import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title:[ "Roboto", "sans-serif"],
        sans: ["--font-geist-sans", "ui-sans-serif", "system-ui", "Arial", "sans-serif"],
        mono: ["--font-geist-mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
