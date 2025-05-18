import { cva } from '../../../../styled-system/css';

export const EVStandardButtonRootStyles = cva({
  base: {
    textStyle: 'titleMd',
    padding: 'pill',
    borderRadius: 'pill',
    cursor: 'pointer',
  },
  variants: {
    variant: {
      solid: {
        bg: 'pill',
        color: 'pill.text',
        border: 'pill',
        _hover: {
          bg: 'pill.outlineBg',
          border: 'pill',
        },
      },
      text: {
        bg: 'pill.outlineBg',
        color: 'pill.text',
        border: 'pill.transparent',
        _hover: {
          border: 'pill',
        },
      },
    },
  },
});
