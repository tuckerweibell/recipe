import type {ReactNode} from 'react';
import {EzThemeTokens, EzTokenTypes} from '../../../src/themes/themes.types';

export interface DesignTokensPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export interface DesignTokensDisplayProps {
  groupTokens: boolean;
  tokens: Array<Array<string>>;
  tokenType: EzTokenTypes;
}
