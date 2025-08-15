/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1220',
        muted: '#5b657a',
        soft: '#eef1f7',
        brand: '#1e6bff',
        'bg-top': '#f4f9ff',
        'bg-mid': '#ffffff',
      },
    },
  },
  plugins: [],
};
