import React, {forwardRef, LabelHTMLAttributes} from 'react';
import {VariantProps} from '@stitches/core';
import theme from '../theme.config';
import Slot from '../EzContent/Slot';

const styles = theme.css({
  display: 'block',
  fontFamily: '$defaultFont',

  variants: {
    use: {
      primary: {
        color: '$label',
        fontSize: '$label',
        lineHeight: '$label',
        fontWeight: '$label',
        padding: 0,
      },
      secondary: {
        color: '$label-small',
        fontSize: '$label-small',
        lineHeight: '$label',
        fontWeight: '$label',
        padding: 0,
      },
    },
    position: {
      hidden: {srOnly: null},
      top: {marginBottom: '$label-my'},
      bottom: {marginTop: '$label-my'},
      side: {marginRight: '$label-mx', display: 'inline-block'},
    },
    error: {true: {}},
  },
  compoundVariants: [{error: 'true', css: {color: '$negative'}}],
});

type Uses = Pick<VariantProps<typeof styles>, 'use'>['use'];
type Positions = Pick<VariantProps<typeof styles>, 'position'>['position'];
type Ref = HTMLDivElement;
export interface EzLabelProps extends Omit<LabelHTMLAttributes<HTMLElement>, 'as' | 'css'> {
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
  use?: Uses;
  /**
   * changes the styles of the label to indicate an error state
   */
  error?: boolean;
  children?: React.ReactNode;
}

/**
 * A component to provide consistent styling for Primary and Secondary labels.
 */
const EzLabel = forwardRef<Ref, EzLabelProps>(({as: element, ...initialProps}, ref) => {
  const {props} = styles(initialProps);

  return <Slot element={element} slot="label" {...props} ref={ref} />;
});

/**
 * defaultProps
 * @property {'label' | 'legend' | 'div'} as - label renders as a label element by default
 * @property {'top' | 'bottom' | 'side' | 'hidden'} position - label renders on top by default
 */
EzLabel.defaultProps = {
  position: null,
  as: 'label',
};

EzLabel.displayName = 'EzLabel';

export default EzLabel;
