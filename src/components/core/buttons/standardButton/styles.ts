import { cva } from '../../../../styled-system/css';

export const EVStandardButtonRootStyles = cva({
  base: {
    borderRadius: 'pill',
    cursor: 'pointer',
    padding: 'pill',
    textStyle: 'titleMd',
  },
  variants: {
    variant: {
      solid: {
        bg: 'pill',
        border: 'pill',
        color: 'pill.text',
        _hover: {
          bg: 'pill.outlineBg',
          border: 'pill',
        },
      },
      text: {
        bg: 'pill.outlineBg',
        border: 'pill.transparent',
        color: 'pill.text',
        _hover: {
          border: 'pill',
        },
      },
    },
  },
});
