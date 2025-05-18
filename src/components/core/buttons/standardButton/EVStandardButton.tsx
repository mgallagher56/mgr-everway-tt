import type { FC } from 'react';
import { EVStandardButtonRootStyles } from './styles';

export interface EVStandardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
  variant?: 'solid' | 'text';
  onClick?: () => void;
}
const EVStandardButton: FC<EVStandardButtonProps> = ({ variant = 'solid', children, ref, ...props }) => (
  <button className={EVStandardButtonRootStyles({ variant })} {...props}>
    {children}
  </button>
);

export default EVStandardButton;
