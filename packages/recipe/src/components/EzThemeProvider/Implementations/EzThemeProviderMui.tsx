import React, {FC, type PropsWithChildren} from 'react';
import {Theme, ThemeProvider} from '@mui/material';

type EzThemeProviderMuiProps = PropsWithChildren<{theme: Theme}>;

const EzThemeProviderMui: FC<EzThemeProviderMuiProps> = ({theme, children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

EzThemeProviderMui.displayName = 'EzThemeProviderMui';

export default EzThemeProviderMui;
