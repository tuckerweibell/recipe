import React, {forwardRef} from 'react';
import Slot from './Slot';

type FooterProps = {
  children: React.ReactNode;
};

function Footer(props: FooterProps, ref) {
  return <Slot element="footer" slot="footer" ref={ref} {...props} />;
}

/**
 * EzFooter represents a footer section within a Recipe container.
 */
const EzFooter = forwardRef(Footer);
export default EzFooter;
