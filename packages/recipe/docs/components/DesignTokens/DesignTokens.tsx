import React, {FC, useState} from 'react';
import {Box, Tab, Tabs, useTheme} from '@mui/material';
import {DesignTokensPanelProps} from './DesignTokens.types';
import {EzThemeTokens} from '../../../src/themes/themes.types';
import DesignTokensDisplay from './DesignTokensDisplay';

// TODO: add remaining tokens
const TOKEN_TYPES = [
  // 'color',
  // 'radius',
  'shadow',
  // 'spacing',
  // 'typography'
];

const getTokens = (themeTokens: EzThemeTokens, tokenType: string) => {
  const tokensArray = Object.entries(themeTokens);
  return tokensArray.filter(([tokenKey, _tokenValue]) => tokenKey.startsWith(tokenType));
};

const DesignTokensPanel = ({children, index, value, ...args}: DesignTokensPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`design-tokens-panel-${index}`}
    aria-labelledby={`design-tokens-${index}`}
    {...args}
  >
    {value === index && <Box py={3}>{children}</Box>}
  </div>
);

const DesignTokens: FC<unknown> = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  return (
    <Box width="100%">
      <Box borderBottom={1} borderColor="divider">
        <Tabs
          value={value}
          onChange={(_event, newValue) => setValue(newValue)}
          aria-label="design tokens"
        >
          {TOKEN_TYPES.map((tokenType, index) => (
            <Tab
              key={tokenType}
              label={tokenType}
              id={`design-tokens-${index}`}
              aria-controls={`design-tokens-panel-${index}`}
            />
          ))}
        </Tabs>
      </Box>
      {TOKEN_TYPES.map((tokenType, index) => (
        <DesignTokensPanel key={tokenType} value={value} index={index}>
          <DesignTokensDisplay tokens={getTokens(theme.tokens, tokenType)} tokenType={tokenType} />
        </DesignTokensPanel>
      ))}
    </Box>
  );
};

export default DesignTokens;
