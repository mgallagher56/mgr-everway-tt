import { defineConfig, defineTextStyles } from '@pandacss/dev';

const textStyles = defineTextStyles({
  bodyMd: {
    value: {
      fontFamily: 'Figtree, sans-serif',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.004rem',
      fontSize: '0.875rem',
    },
  },
  titleXl: {
    value: {
      fontFamily: 'Figtree, sans-serif',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '0.003rem',
      fontSize: '1.25rem',
    },
  },
  titleXlBold: {
    value: {
      fontFamily: 'Figtree, sans-serif',
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: '0.003rem',
      fontSize: '1.25rem',
    },
  },
  titleMd: {
    value: {
      fontFamily: 'Figtree, sans-serif',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0.003rem',
      fontSize: '1rem',
    },
  },
  titleSm: {
    value: {
      fontFamily: 'Figtree, sans-serif',
      fontWeight: 600,
      lineHeight: 1.43,
      letterSpacing: '0.003rem',
      fontSize: '0.875rem',
    },
  },
});

export default defineConfig({
  preflight: true,
  jsxFramework: 'react',
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  globalCss: {
    html: {
      '--global-font-body': 'Figtree, sans-serif',
    },
  },
  globalFontface: {
    Figtree: {
      src: 'url(src/assets/fonts/Figtree/Figtree-VariableFont_wght.ttf) format("ttf")',
      fontWeight: '200 900',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
  },
  theme: {
    extend: {
      textStyles,
      semanticTokens: {
        borders: {
          input: {
            DEFAULT: { value: '1px solid #8D95A7' },
            radioChecked: { value: '5px solid #55BBF0' },
          },
          card: {
            DEFAULT: { value: '1px solid #EAECF0' },
            actions: { value: '1px solid #D0D5DD' },
          },
          pill: {
            DEFAULT: { value: '2px solid #55BBF0' },
            transparent: { value: '2px solid transparent' },
          },
        },
        colors: {
          bg: {
            DEFAULT: { value: '#FAF6F0' },
          },
          text: {
            DEFAULT: { value: '#101828' },
            body: { value: '#101828' },
            titleXl: { value: '#101828' },
            titleMd: { value: '#101828' },
            titleSm: { value: '#344054' },
            placeholder: { value: '#8D95A7' },
          },
          accent: {
            orange_lighter: { value: '#FCD56D' },
            lime_lighter: { value: '#CCEDA9' },
            teal_lighter: { value: '##9FF0E6' },
            purple_lighter: { value: '#D5D6FF' },
          },
          pill: {
            DEFAULT: { value: '#55BBF0' },
            text: { value: '#101828' },
            outlineBg: { value: '#ffffff' },
          },
          icon: { DEFAULT: { value: '#1D2939' } },
          input: {
            Default: { value: '#8D95A7' },
            radioExternal: { value: '#55BBF0' },
            radioInternal: { value: '#ffffff' },
          },
          card: {
            bg: { value: '#ffffff' },
          }
        },
        gradients: {
          header: {
            value: {
              type: 'linear',
              placement: 'to right',
              stops: ['#FCD56D', '#CCEDA9', '#9FF0E6', '#D5D6FF'],
            },
          },
        },
        radii: {
          sm: { value: '0.25rem' },
          md: { value: '0.5rem' },
          lg: { value: '0.75rem' },
          xl: { value: '1rem' },
          '2xl': { value: '1.25rem' },
          '3xl': { value: '1.5rem' },
          '4xl': { value: '1.75rem' },
          '5xl': { value: '2rem' },
          pill: { value: '6rem' },
          full: { value: '9999px' },
        },
        shadows: {
          card: { value: '0px 2px 14px 0px #1D293908' },
        },
        sizes: {
          icon: {
            DEFAULT: { value: '1rem' },
          },
          radio: {
            DEFAULT: { value: '1rem' },
          },
          card: {
            actionCardMaxWidth: { value: '482px' },
          }
        },
        spacing: {
          xs: { value: '0.25rem' },
          sm: { value: '0.5rem' },
          md: { value: '0.625rem' },
          lg: { value: '0.75rem' },
          xl: { value: '1rem' },
          '2xl': { value: '1.125rem' },
          '3xl': { value: '1.25rem' },
          '4xl': { value: '1.5rem' },
          '5xl': { value: '2.0rem' },
          '6xl': { value: '2.5rem' },
          container: {
            DEFAULT: { value: '4.5rem' },
          },
          pill: {
            DEFAULT: { value: '0.75rem 1.25rem' },
          },
          header: {
            DEFAULT: { value: '0.6875rem 6rem' },
            mobile: { value: '0.6875rem 2rem' },
          },
          input: {
            textField: { value: '0.625rem 0.75rem' },
            textFieldWithIcon: { value: '0.625rem 0.75rem 0.625rem 2.5rem' },
            icon: { value: '1rem' },
          },
        },
      },
    },
  },
  outdir: 'src/styled-system',
});
