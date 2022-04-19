import React, {forwardRef} from 'react';
import Slot from './Slot';

type PreviewProps = {
  children: React.ReactNode;
};

function Preview(props: PreviewProps, ref) {
  return <Slot element="figure" slot="preview" ref={ref} {...props} />;
}

/**
 * EzHeader represents self-contained content such as an image or illustration within a Recipe container.
 */
const EzPreview = forwardRef(Preview);
export default EzPreview;
