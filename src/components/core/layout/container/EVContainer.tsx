import { type FC } from 'react';
import { Container, type ContainerProps } from '../../../../styled-system/jsx';

interface EVContainerProps extends ContainerProps {
  children: React.ReactNode;
}

const EVContainer: FC<EVContainerProps> = ({ children, ...containerProps }) => {
  return <Container {...containerProps}>{children}</Container>;
};
export default EVContainer;
