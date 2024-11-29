// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
      "./src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
      "./src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
      "./src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Arial', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  