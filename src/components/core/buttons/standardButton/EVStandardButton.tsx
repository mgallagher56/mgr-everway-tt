import type { FC } from 'react';
import { EVStandardButtonRootStyles } from './styles';

export interface EVStandardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: React.ReactNode;
variant?: 'solid' | 'text';     
  size?: 'small' | 'medium' | 'large';
}
const EVStandardButton: FC<EVStandardButtonProps> = ({ variant = 'solid', size = 'medium', children, ...props }) => (
  <button className={EVStandardButtonRootStyles({ variant })} {...props}>
    {children}
  </button>
);

export default EVStandardButton;
