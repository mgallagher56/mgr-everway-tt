import { cva } from '../../../../styled-system/css';

export const textFieldStyles = cva({
  base: {
    backgroundPositionX: 'token(spacing.lg)',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'token(sizes.icon)',
    border: 'input',
    borderRadius: 'xl',
    color: 'text',
    padding: 'input.textField',
    textStyle: 'bodyMd',
    _placeholder: {
      color: 'text.placeholder',
      textStyle: 'bodyMd',
    },
  },
  variants: {
    icon: {
      email: {
        backgroundImage: 'url(/assets/icons/mail-icon.svg)',
        padding: 'input.textFieldWithIcon',
      },
      password: {
        backgroundImage: 'url(/assets/icons/lock-icon.svg)',
        backgroundRepeat: 'no-repeat',
        padding: 'input.textFieldWithIcon',
      },
    },
  },
});
