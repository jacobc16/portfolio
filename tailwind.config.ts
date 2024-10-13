import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        'navy-blue': '#022539',
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
} as Config;
