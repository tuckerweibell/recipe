import type {ReactNode} from 'react';
import {EzTokenTypes} from '../../../src/themes/themes.types';

export type GroupedTokens = {
  displayName: string;
  name: string;
  tokens: Array<Array<string>>;
};

export interface CodeBlockProps {
  children: string;
  withCopy?: boolean;
}

export interface CopyButtonProps {
  darkMode?: boolean;
  textToCopy: string;
}

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

export interface DesignTokenPreviewProps {
  token: Array<string>;
  tokenType: EzTokenTypes;
}

export interface DesignTokensTableProps {
  tokens: Array<Array<string>>;
  tokenType: EzTokenTypes;
}
