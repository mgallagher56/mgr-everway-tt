import type { FC } from 'react';
import { EVStandardButtonRootStyles } from './styles';

export interface EVStandardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'solid' | 'text';
  onClick: () => void;
}
const EVStandardButton: FC<EVStandardButtonProps> = ({ variant = 'solid', children, ...props }) => (
  <button className={EVStandardButtonRootStyles({ variant })} {...props}>
    {children}
  </button>
);

export default EVStandardButton;
