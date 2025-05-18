import { cva } from '../../../styled-system/css';

export const evHeaderRootStyle = cva({
  base: {
    p: {
      base: 'header.mobile',
      sm: 'header',
    },
  },
  variants: {
    accentStyle: {
      gradient: {
        borderBottomWidth: 4,
        borderStyle: 'solid',
        borderImageSlice: 1,
        borderImage: 'token(gradients.header)',
      },
      none: {
        border: 'none',
      },
    },
  },
});
