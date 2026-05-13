import type { Config } from 'tailwindcss'

/**
 * Токены из сырого экспорта Stitch (Safety Harmony) + legacy-алиасы для остальных страниц.
 */
export default {
  theme: {
    extend: {
      colors: {
        /* --- Stitch (сырой HTML) --- */
        background: '#f7f9fb',
        surface: '#f7f9fb',
        'surface-dim': '#d8dadc',
        'surface-bright': '#f7f9fb',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f2f4f6',
        'surface-container': '#eceef0',
        'surface-container-high': '#e6e8ea',
        'surface-container-highest': '#e0e3e5',
        'surface-variant': '#e0e3e5',
        'surface-tint': '#00668a',
        'on-surface': '#191c1e',
        'on-surface-variant': '#3e484f',
        'on-background': '#191c1e',
        'inverse-surface': '#2d3133',
        'inverse-on-surface': '#eff1f3',
        outline: '#6e7980',
        'outline-variant': '#bdc8d1',
        primary: '#00668a',
        'on-primary': '#ffffff',
        'primary-container': '#3ABEF9',
        'on-primary-container': '#001e2c',
        'inverse-primary': '#7bd0ff',
        'primary-fixed': '#c4e7ff',
        'primary-fixed-dim': '#7bd0ff',
        'on-primary-fixed': '#001e2c',
        'on-primary-fixed-variant': '#004c69',
        /* бывший «янтарь» → единый голубой акцент */
        secondary: '#00668a',
        'on-secondary': '#ffffff',
        'secondary-container': '#3ABEF9',
        'on-secondary-container': '#001e2c',
        'secondary-fixed': '#c4e7ff',
        'secondary-fixed-dim': '#2AC5FF',
        'on-secondary-fixed': '#001e2c',
        'on-secondary-fixed-variant': '#004c69',
        tertiary: '#565e74',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#a9b1ca',
        'on-tertiary-container': '#3c4459',
        'tertiary-fixed': '#dae2fd',
        'tertiary-fixed-dim': '#bec6e0',
        'on-tertiary-fixed': '#131b2e',
        'on-tertiary-fixed-variant': '#3f465c',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      spacing: {
        unit: '8px',
        gutter: '24px',
        'margin-desktop': '80px',
        'margin-mobile': '20px',
        'golden-ratio': '1.618',
        base: '8px',
        'section-padding': '80px',
      },
      maxWidth: {
        'container-max': '1280px',
      },
      fontFamily: {
        'display-lg': ['Manrope', 'system-ui', 'sans-serif'],
        'headline-lg': ['Manrope', 'system-ui', 'sans-serif'],
        'headline-lg-mobile': ['Manrope', 'system-ui', 'sans-serif'],
        'headline-md': ['Manrope', 'system-ui', 'sans-serif'],
        'body-lg': ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        'body-md': ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        'label-sm': ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        'menu-item': ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        /* Страница курса и пр. */
        'display-xl': ['Montserrat', 'system-ui', 'sans-serif'],
        'display-xl-mobile': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': [
          '56px',
          {
            lineHeight: '64px',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        'headline-lg': [
          '32px',
          {
            lineHeight: '40px',
            fontWeight: '600',
          },
        ],
        'headline-lg-mobile': [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: '600',
          },
        ],
        'headline-md': ['24px', { lineHeight: '1.4', fontWeight: '700' }],
        'body-lg': [
          '18px',
          {
            lineHeight: '28px',
            fontWeight: '400',
          },
        ],
        'body-md': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        'label-sm': [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '0.05em',
            fontWeight: '500',
          },
        ],
        'menu-item': ['14px', { lineHeight: '1.2', fontWeight: '600' }],
        'display-xl': [
          '48px',
          { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'display-xl-mobile': ['32px', { lineHeight: '1.2', fontWeight: '800' }],
      },
      animation: {
        'bounce-slow': 'stitch-bounce 3s infinite',
      },
      keyframes: {
        'stitch-bounce': {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
    },
  },
} satisfies Config
