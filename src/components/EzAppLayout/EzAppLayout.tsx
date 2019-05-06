import React, {createContext, useContext} from 'react';
import {WidthWrapper} from './EzAppLayout.styles';

export const EzAppLayoutContext = createContext('full');

const EzAppLayout = ({children, layout}) => {
  return <EzAppLayoutContext.Provider value={layout}>{children}</EzAppLayoutContext.Provider>;
};

EzAppLayout.displayName = 'EzAppLayout';

export const MaxWidth = ({children}) => {
  const layout = useContext(EzAppLayoutContext);

  return <WidthWrapper width={layout}>{children}</WidthWrapper>;
};

export default EzAppLayout;
