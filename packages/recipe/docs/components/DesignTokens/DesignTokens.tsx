import React, {FC, useState} from 'react';
import {Box, Tab, Tabs, useTheme} from '@mui/material';
import {DesignTokensPanelProps} from './DesignTokens.types';
import {EzThemeTokens, EzTokenTypes} from '../../../src/themes/themes.types';
import DesignTokensDisplay from './DesignTokensDisplay';

type TokenType = {
  type: EzTokenTypes;
  group: boolean;
};

// TODO: add remaining tokens
const TOKEN_TYPES: Array<TokenType> = [
  {type: 'color', group: true},
  {type: 'radius', group: false},
  {type: 'shadow', group: false},
  {type: 'spacing', group: false},
  // {type: 'typography', group: false},
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
          {TOKEN_TYPES.map(({type}, index) => (
            <Tab
              key={type}
              label={type}
              id={`design-tokens-${index}`}
              aria-controls={`design-tokens-panel-${index}`}
            />
          ))}
        </Tabs>
      </Box>
      {TOKEN_TYPES.map(({type, group}, index) => (
        <DesignTokensPanel key={type} value={value} index={index}>
          <DesignTokensDisplay
            tokens={getTokens(theme.tokens, type)}
            tokenType={type}
            groupTokens={group}
          />
        </DesignTokensPanel>
      ))}
    </Box>
  );
};

export default DesignTokens;
