import type { FC } from 'react';
import { stack } from '../../../../styled-system/patterns';
import EVTypography from '../../typography/EVTypography';
import { textFieldStyles } from './styles';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showIcon?: boolean;
  type?: 'email' | 'password';
}

const TextField: FC<TextFieldProps> = ({ label, showIcon, id, type, ...props }) => (
  <label className={stack({ gap: 'xs' })} htmlFor={id}>
    {!!label && <EVTypography>{label}</EVTypography>}
    <input className={textFieldStyles({ icon: type })} id={id} type={type} {...props}></input>
  </label>
);

export default TextField;
