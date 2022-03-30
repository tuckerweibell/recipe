import React, {FC} from 'react';
import {EzThemeProviderProps} from './EzThemeProvider.types';
import EzThemeProviderMui from './Implementations/EzThemeProviderMui';

const EzThemeProvider: FC<EzThemeProviderProps> = ({theme, children}) => (
  <EzThemeProviderMui theme={theme}>{children}</EzThemeProviderMui>
);

export default EzThemeProvider;
