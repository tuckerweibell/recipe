import React, {forwardRef} from 'react';
import {domProps} from '../../../utils';
import EzLink, {isLink} from '../../EzLink';
import {LabelledLink} from '../../EzLink/EzLink.types';

const useLinkButtonProps = ({label, accessibilityLabel, children, ...props}: any) => {
  return domProps({
    ...props,
    'aria-label': accessibilityLabel,
    children: label || children,
  });
};

/**
 * Renders an unstyled link or button, dependant on the props provided.
 */
const LinkButton = forwardRef((props: LabelledLink, ref: React.Ref<any>) => {
  const linkButtonProps = useLinkButtonProps(props);
  return isLink(props) ? (
    <EzLink use="reset">
      <a {...linkButtonProps} ref={ref}>
        {props.label}
      </a>
    </EzLink>
  ) : (
    <button type="button" {...linkButtonProps} ref={ref}>
      {props.label}
    </button>
  );
});

export default LinkButton;
