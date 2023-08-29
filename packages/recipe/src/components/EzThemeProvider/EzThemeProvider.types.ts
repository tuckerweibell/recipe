import type {ReactNode} from 'react';
import {Theme} from '@mui/material/styles';

export type EzThemeProviderProps = {
  children?: ReactNode;
  theme: Theme;
};
