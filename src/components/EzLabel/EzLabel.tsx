import React, {forwardRef, LabelHTMLAttributes} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzLabel.theme.config';
import {VariantProps} from '../../utils/responsiveProps';

const styles = theme.css({
  display: 'block',

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
      hidden: {srOnly: 'true'},
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
  use?: Uses;
  /**
   * changes the styles of the label to indicate an error state
   */
  error?: boolean;
}

/**
 * A component to provide consistent styling for Primary and Secondary labels.
 */
const EzLabel = forwardRef<Ref, Props>(({as: Element, ...initialProps}, ref) => {
  const {props} = styles(initialProps);

  return (
    <Style ruleset={theme}>
      <Element {...props} ref={ref} />
    </Style>
  );
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
