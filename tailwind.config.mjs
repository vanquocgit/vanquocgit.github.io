import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#F8F7F4',
        surface: '#FDFCFA',
        subtle: '#EFECE6',
        'subtle-hover': '#E5E1D8',
        line: '#E2DED5',
        'line-strong': '#CCC6BA',
        ink: '#1C1B19',
        charcoal: '#2E2C28',
        muted: '#635F57',
        'muted-light': '#858076',
        'code-bg': '#21201D',
        'code-fg': '#ECEAE4',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      typography: ({ theme }) => ({
        stone: {
          css: {
            '--tw-prose-body': theme('colors.charcoal'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-lead': theme('colors.muted'),
            '--tw-prose-links': theme('colors.ink'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-counters': theme('colors.muted'),
            '--tw-prose-bullets': theme('colors.muted-light'),
            '--tw-prose-hr': theme('colors.line'),
            '--tw-prose-quotes': theme('colors.charcoal'),
            '--tw-prose-quote-borders': theme('colors.line-strong'),
            '--tw-prose-captions': theme('colors.muted'),
            '--tw-prose-code': theme('colors.ink'),
            '--tw-prose-pre-code': theme('colors.code-fg'),
            '--tw-prose-pre-bg': theme('colors.code-bg'),
            '--tw-prose-th-borders': theme('colors.line-strong'),
            '--tw-prose-td-borders': theme('colors.line'),
          },
        },
      }),
    },
  },
  plugins: [typography],
};
