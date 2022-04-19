import React, {FC} from 'react';
import {Theme, ThemeProvider} from '@mui/material';

type EzThemeProviderMuiProps = {
  theme: Theme;
};

const EzThemeProviderMui: FC<EzThemeProviderMuiProps> = ({theme, children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

EzThemeProviderMui.displayName = 'EzThemeProviderMui';

export default EzThemeProviderMui;
