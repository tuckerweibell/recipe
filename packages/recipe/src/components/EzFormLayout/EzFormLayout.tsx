import React, {forwardRef} from 'react';
import theme from '../theme.config';
import {domProps} from '../../utils';

const layout = theme.css({
  '&& > * + *': {
    marginTop: '$form-gap',
  },
});

type Props = React.ComponentPropsWithRef<'div'>;

/**
 * Form layouts are used to arrange fields within a form using standard spacing.
 */
const EzFormLayout = forwardRef<HTMLDivElement, Props>((initProps, ref) => {
  const props = domProps(initProps, layout());
  return <div {...props} ref={ref} />;
});

EzFormLayout.displayName = 'EzFormLayout';

/**
 * @component
 */
export default EzFormLayout;
