import { cva } from '../../../styled-system/css';

export const typographyFontStyles = cva({
  base: {
    color: 'text',
  },
  variants: {
    variant: {
      bodyMd: {
        textStyle: 'bodyMd',
        color: 'text',
      },
      titleXlBold: {
        textStyle: 'titleXlBold',
        color: 'text.titleXl',
      },
      titleXl: {
        textStyle: 'titleXl',
        color: 'text.titleXl',
      },
      titleMd: {
        textStyle: 'titleMd',
        color: 'text.titleMd',
      },
      titleSm: {
        textStyle: 'titleSm',
        color: 'text.titleSm',
      },
    },
  },
});
