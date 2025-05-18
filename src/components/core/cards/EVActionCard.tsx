import type React from 'react';
import { useMemo, type FC, type PropsWithChildren } from 'react';
import {
  actionCardActionStyles,
  actionCardContentStyles,
  actionCardImageContainerStyles,
  actionCardImageStyles,
  actionCardRootStyles,
} from './styles';
import ButtonGroup from '../buttons/buttonGroup/ButtonGroup';
import EVStandardButton, { type EVStandardButtonProps } from '../buttons/standardButton/EVStandardButton';

interface ActionCardProps extends PropsWithChildren {
  headerImg?: {
    src: string;
    alt: string;
  };
  primaryButtonProps?: EVStandardButtonProps;
  secondaryButtonProps?: EVStandardButtonProps;
}

const EVActionCard: FC<ActionCardProps> = ({ children, headerImg, primaryButtonProps, secondaryButtonProps }) => {
  const {
    onClick: onPrimaryAction,
    children: primaryButtonChildren,
    ...restPrimaryButtonProps
  } = primaryButtonProps ?? {};

  const {
    onClick: onSecondaryAction,
    children: secondaryButtonChildren,
    ...restSecondaryButtonProps
  } = secondaryButtonProps ?? {};

  const actionButtons = useMemo(
    () =>
      [
        !!onSecondaryAction && (
          <EVStandardButton variant="text" onClick={onSecondaryAction} {...restSecondaryButtonProps}>
            {secondaryButtonChildren ?? 'Cancel'}
          </EVStandardButton>
        ),
        !!onPrimaryAction && (
          <EVStandardButton type="submit" onClick={onPrimaryAction} {...restPrimaryButtonProps}>
            {primaryButtonChildren ?? 'Submit'}
          </EVStandardButton>
        ),
      ].filter(Boolean) as React.ReactElement<typeof EVStandardButton>[],
    [
      onPrimaryAction,
      onSecondaryAction,
      primaryButtonChildren,
      secondaryButtonChildren,
      restPrimaryButtonProps,
      restSecondaryButtonProps,
    ],
  );
  console.log({ test: 'test' });

  return (
    <div className={actionCardRootStyles}>
      {!!headerImg && (
        <div className={actionCardImageContainerStyles}>
          <img className={actionCardImageStyles} src={headerImg.src} alt={headerImg.alt} />
        </div>
      )}
      <div className={actionCardContentStyles}>{children}</div>
      <div className={actionCardActionStyles}>
        <ButtonGroup justifyContent="end" buttons={actionButtons} />
      </div>
    </div>
  );
};

export default EVActionCard;
