import type { FC } from 'react';
import EVTypography from '../typography/EVTypography';
import { evHeaderRootStyle } from './styles';

interface HeaderProps {
  title: string;
  subtitle?: string;
  accentStyle?: 'none' | 'gradient';
}

const EVHeader: FC<HeaderProps> = ({ title, subtitle, accentStyle = 'gradient' }) => {
  return (
    <>
      <header className={evHeaderRootStyle({ accentStyle })}>
        <EVTypography variant="titleXlBold" as="h1">
          {title}
        </EVTypography>
        {!!subtitle && (
          <EVTypography variant="titleSm" as="h2">
            {subtitle}
          </EVTypography>
        )}
      </header>
    </>
  );
};

export default EVHeader;
