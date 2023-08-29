import React, {FC, type PropsWithChildren} from 'react';
import {VariantProps} from '@stitches/core';
import theme from '../theme.config';

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

type Props = PropsWithChildren<VariantProps<typeof notification>>;

export const Counter: FC<Props> = ({children, ...props}) => (
  <span className={notification(props)}>{children}</span>
);
