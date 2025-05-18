import { cva } from '../../../../styled-system/css';

export const textFieldStyles = cva({
  base: {
    textStyle: 'bodyMd',
    backgroundPositionX: 'token(spacing.lg)',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'token(sizes.icon)',
    border: 'input',
    borderRadius: 'xl',
    color: 'text',
    padding: 'input.textField',
    _placeholder: {
      color: 'text.placeholder',
      textStyle: 'bodyMd',
    },
  },
  variants: {
    icon: {
      email: {
        backgroundImage: 'url(src/assets/icons/mail-icon.svg)',
        padding: 'input.textFieldWithIcon',
      },
      password: {
        backgroundImage: 'url(src/assets/icons/lock-icon.svg)',
        backgroundRepeat: 'no-repeat',
        padding: 'input.textFieldWithIcon',
      },
    },
  },
});
