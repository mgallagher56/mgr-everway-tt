import { css } from '../../../../styled-system/css';

export const radioInputStyles = css({
  appearance: 'none',
  backgroundColor: '#fff',
  border: 'input',
  borderRadius: 'full',
  height: 'radio',
  margin: 0,
  WebkitAppearance: 'none',
  width: 'radio',

  _focus: {
    border: 'none',
    outline: '-webkit-focus-ring-color auto 1px',
    _checked: {
      border: 'input.radioChecked',
    },
  },

  _checked: {
    border: 'input.radioChecked',
  },
});
