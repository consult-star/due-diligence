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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        appear: {
          from: {
            opacity: "0",
            transform: "translateY(50px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "appear-2": {
          from: {
            transform: "translateY(50px)",
          },
          to: {
            transform: "translateY(0px)",
          },
        },
        "appear-l": {
          from: {
            transform: "translateX(-200px)",
          },
          "30%": {
            opacity: "0",
          },
          to: {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
        "appear-b": {
          from: {
            transform: "translateY(-200px)",
          },
          to: {
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 1s cubic-bezier(0.33, 1, 0.68, 1) forwards",
        expand: "expand 1s cubic-bezier(0.33, 1, 0.68, 1) forwards",
        appear: "appear 1s cubic-bezier(0.33, 1, 0.68, 1) forwards",
        "appear-2": "appear-2 1s cubic-bezier(0.33, 1, 0.68, 1) forwards",
        "appear-l": "appear-l 1s cubic-bezier(0.33, 1, 0.68, 1) forwards",
        "appear-b": "appear-b 0.4s forwards",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
} satisfies Config;
