import React, {forwardRef, AllHTMLAttributes} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzTextStyle.theme.config';

const text = theme.css({
  display: 'inline-block',

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

interface Props
  extends Omit<Parameters<typeof text>[0], 'css'>,
    Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'css'> {
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Enhances text with styles to communicate emphasis.
 */
const EzTextStyle = forwardRef<HTMLElement, Props>(
  ({as: Text = 'span' as any, ...initProps}, ref) => {
    const {props} = text(initProps);
    return (
      <Style ruleset={theme}>
        <Text {...props} ref={ref} />
      </Style>
    );
  }
);

/**
 * @component
 */
export default EzTextStyle;
