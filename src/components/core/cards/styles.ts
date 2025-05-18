import { css } from '../../../styled-system/css';

export const actionCardRootStyles = css({
  bg: 'card.bg',
  border: 'card',
  borderRadius: '2xl',
  boxShadow: 'card',
  maxWidth: 'card.actionCardMaxWidth',
  minWidth: 'max-content',
  width: '100%',
});

export const actionCardImageContainerStyles = css({
  height: 200,
  width: '100%',
});

export const actionCardImageStyles = css({
  borderTopRadius: '2xl',
  height: '100%',
  objectFit: 'cover',
  width: '100%',
});

export const actionCardContentStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 'xl',
  padding: '4xl',
});

export const actionCardActionStyles = css({
  borderTop: 'card.actions',
  padding: 'token(spacing.xl) token(spacing.4xl) ',
});
