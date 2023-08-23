import React, {forwardRef, AllHTMLAttributes} from 'react';
import {VariantProps} from '@stitches/core';
import theme from '../theme.config';

const text = theme.css({
  display: 'inline-block',
  fontFamily: '$defaultFont',

  variants: {
    use: {
      strong: {
        fontWeight: '$text-strong',
      },
      subdued: {
        color: '$text-subdued',
      },
    },
    align: {
      center: {display: 'block', textAlign: 'center'},
      left: {display: 'block', textAlign: 'left'},
      right: {display: 'block', textAlign: 'right'},
    },
  },
});

export interface Props
  extends VariantProps<typeof text>,
    Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'css'> {
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Enhances text with styles to communicate emphasis.
 */
const EzTextStyle = forwardRef<HTMLElement, Props>(
  ({as: Text = 'span' as any, ...initProps}, ref) => {
    const {props} = text({
      ...initProps,
      align:
        typeof initProps.align === 'object'
          ? Object.fromEntries(
              Object.entries(initProps.align).map(([key, value]) => [`@${key}`, value])
            )
          : initProps.align,
    });

    return <Text {...props} ref={ref} />;
  }
);

/**
 * @component
 */
export default EzTextStyle;
