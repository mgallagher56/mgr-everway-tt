import { css } from '../../../../styled-system/css';

export const radioInputStyles = css({
  WebkitAppearance: 'none',
  appearance: 'none',
  backgroundColor: '#fff',
  margin: 0,
  width: 'radio',
  height: 'radio',
  border: 'input',
  borderRadius: 'full',

  _focus: {
    outline: '-webkit-focus-ring-color auto 1px',
    border: 'none',
    _checked: {
      border: 'input.radioChecked',
    },
  },

  _checked: {
    border: 'input.radioChecked',
  },
});
