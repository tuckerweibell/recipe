import React, {forwardRef, ReactNode} from 'react';
import Slot from './Slot';

type Ref = HTMLElement;
type EzPreviewProps = {
  children: ReactNode;
};

const EzPreview = forwardRef<Ref, EzPreviewProps>((props, ref) => (
  <Slot element="figure" slot="preview" ref={ref} {...props} />
));

EzPreview.displayName = 'EzPreview';

export default EzPreview;
