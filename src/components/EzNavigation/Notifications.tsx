import React, {FC} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzNavigation.theme.config';

const notification = theme.css({
  alignItems: 'center',
  display: 'flex',
  fontWeight: '900',
  fontSize: '0.85rem',
  justifyContent: 'center',
  height: '1.75rem',
  width: '1.75rem',
  borderRadius: '1.75rem',

  variants: {
    use: {
      default: {
        backgroundColor: '$notification-bg',
        color: '$notification-text',
      },
      marketing: {
        backgroundColor: 'rgb(27, 188, 155)',
        color: 'rgb(27, 32, 35)',
      },
    },
  },
  defaultVariants: {use: 'default'},
});

type Props = Pick<Parameters<typeof notification>[0], 'use'>;

export const Counter: FC<Props> = ({children, ...props}) => (
  <Style ruleset={theme}>
    <span className={notification(props)}>{children}</span>
  </Style>
);
