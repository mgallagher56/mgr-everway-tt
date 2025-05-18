import type { FC } from 'react';
import type EVStandardButton from '../standardButton/EVStandardButton';
import EVTypography from '../../typography/EVTypography';
import { Stack, type StackProps } from '../../../../styled-system/jsx';

interface ButtonGroupProps extends StackProps {
  buttons: React.ReactElement<typeof EVStandardButton>[] | [];
  title?: string;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ title, buttons, direction = 'row', gap = 'xl', ...stackProps }) => {
  return (
    <>
      {!!title && <EVTypography>{title}</EVTypography>}
      <Stack direction={direction} {...stackProps}>
        {buttons?.map((button, index) => {
          return !!button && <div key={index}>{button}</div>;
        })}
      </Stack>
    </>
  );
};

export default ButtonGroup;
