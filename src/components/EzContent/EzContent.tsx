import React, {forwardRef} from 'react';
import Slot from './Slot';

type ContentProps = {
  children: React.ReactNode;
};

function Content(props: ContentProps, ref) {
  return <Slot element="section" slot="content" ref={ref} {...props} />;
}

/**
 * EzContent represents a content section within a Recipe container.
 */
const EzContent = forwardRef(Content);

EzContent.displayName = 'EzContent';

export default EzContent;
