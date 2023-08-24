import React, {forwardRef, ReactNode} from 'react';
import Slot from './Slot';

type Ref = HTMLElement;
type EzHeaderProps = {
  children: ReactNode;
};

const EzHeader = forwardRef<Ref, EzHeaderProps>((props, ref) => (
  <Slot element="header" slot="header" ref={ref} {...props} />
));

EzHeader.displayName = 'EzHeader';

export default EzHeader;
