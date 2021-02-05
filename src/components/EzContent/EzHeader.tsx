import React, {forwardRef} from 'react';
import Slot from './Slot';

type HeaderProps = {
  children: React.ReactNode;
};

function Header(props: HeaderProps, ref) {
  return <Slot element="header" slot="header" ref={ref} {...props} />;
}

/**
 * EzHeader represents a header section within a Recipe container.
 */
const EzHeader = forwardRef(Header);
export default EzHeader;
