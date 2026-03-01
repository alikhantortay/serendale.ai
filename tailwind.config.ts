import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["var(--font-montserrat)"],
                space: ["var(--font-space)"],
                clash: ["var(--font-clash)"],
            },
        },
    },
    plugins: [],
} satisfies Config;
