import { type ChangeEvent, type FC } from 'react';
import EVTypography from '../../typography/EVTypography';
import { Stack } from '../../../../styled-system/jsx';
import { radioInputStyles } from './styles';

interface RadioGroupProps {
  isRequired?: boolean;
  label: string;
  options: {
    label: string;
    value: string;
  }[];
  selectedValue: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: FC<RadioGroupProps> = ({ isRequired, label, selectedValue, options, onChange }) => {
  return (
    <Stack gap="xs">
      <EVTypography id={label}>{label}</EVTypography>
      <Stack direction="row" gap="4xl" role="radiogroup" aria-required aria-labelledby={label} flexWrap="wrap">
        {options.map((option) => (
          <Stack gap="sm" direction="row" key={option.value}>
            <input
              checked={selectedValue === option.value}
              className={radioInputStyles}
              id={option.value}
              name={label}
              required={isRequired}
              type="radio"
              value={option.value}
              onChange={onChange}
            />
            <label htmlFor={option.value}>
              <EVTypography>{option.label}</EVTypography>
            </label>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default RadioGroup;
