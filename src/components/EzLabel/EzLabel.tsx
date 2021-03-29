import React, {forwardRef, LabelHTMLAttributes} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzLabel.theme.config';

const styles = theme.css({
  display: 'block',
  lineHeight: '$label',
  fontWeight: '$label',
  padding: 0,

  variants: {
    size: {
      small: {
        color: '$label-small',
        fontSize: '$label-small',
      },
      normal: {
        color: '$label',
        fontSize: '$label',
      },
    },
    position: {
      hidden: {'sr-only': 'true'},
      top: {marginBottom: '$label-my'},
      bottom: {marginTop: '$label-my'},
      left: {marginRight: '$label-mx', display: 'inline-block'},
      right: {marginLeft: '$label-mx', display: 'inline-block'},
    },
    error: {true: {}},
  },
  compoundVariants: [{error: 'true', css: {color: '$negative'}}],
});

type Sizes = Pick<Parameters<typeof styles>[0], 'size'>['size'];
type Positions = Pick<Parameters<typeof styles>[0], 'position'>['position'];
type Ref = HTMLDivElement;
interface Props extends Omit<LabelHTMLAttributes<HTMLElement>, 'as' | 'css'> {
  /**
   * changes the HTML element used to render the label
   */
  as?: 'label' | 'legend' | 'div';
  /**
   * changes the position of the label
   */
  position?: Positions;
  /**
   * changes the styles of the label for the selected size
   */
  size?: Sizes;
  /**
   * changes the styles of the label to indicate an error state
   */
  error?: boolean;
}

/**
 * A component to provide consistent styling for Primary and Secondary labels.
 */
const EzLabel = forwardRef<Ref, Props>((initialProps, ref) => {
  const {props} = styles(initialProps);

  return (
    <Style ruleset={theme}>
      <div {...props} ref={ref} />
    </Style>
  );
});

/**
 * defaultProps
 * @property {'label' | 'legend' | 'div'} as - label renders as a div element by default
 * @property {'hidden' | 'top' | 'bottom' | 'left' | 'right'} position - label renders on top by default
 * @property {'normal' | 'small'} position - label renders with normal size by default
 */
EzLabel.defaultProps = {
  as: 'div',
  position: null,
  size: 'normal',
};

export default EzLabel;
