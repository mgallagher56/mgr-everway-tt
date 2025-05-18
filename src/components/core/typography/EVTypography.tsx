import type { FC, PropsWithChildren } from 'react';
import { css, cx } from '../../../styled-system/css';
import type { ColorToken, FontWeightToken } from '../../../styled-system/tokens';
import { typographyFontStyles } from './styles';

interface TypographyProps extends PropsWithChildren {
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  variant?: 'bodyMd' | 'titleSm' | 'titleMd' | 'titleXl' | 'titleXlBold';
  fontWeight?: FontWeightToken;
  color?: ColorToken;
  className?: string;
  id?: string;
}

const EVTypography: FC<TypographyProps> = ({ children, as, id, variant = 'bodyMd', color, fontWeight, className }) => {
  const Element = as || 'p';
  const typeographyColor = color ? css({ color }) : '';
  const typographyFontWeight = fontWeight ? css({ fontWeight }) : '';
  const typographyStyles = cx(typographyFontStyles({ variant }), className, typographyFontWeight, typeographyColor);

  return (
    <Element id={id} className={typographyStyles}>
      {children}
    </Element>
  );
};

export default EVTypography;
