import React, {forwardRef, ReactNode} from 'react';
import Slot from './Slot';

type Ref = HTMLElement;
type EzFooterProps = {
  children: ReactNode;
};

const EzFooter = forwardRef<Ref, EzFooterProps>((props, ref) => (
  <Slot element="footer" slot="footer" ref={ref} {...props} />
));

EzFooter.displayName = 'EzFooter';

export default EzFooter;
