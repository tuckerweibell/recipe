import React, {useState} from 'react';
import {Box, Tab, Tabs, useTheme} from '@mui/material';
import {DesignTokensDisplayProps, GroupedTokens} from './DesignTokens.types';
import DesignTokensTable from './DesignTokensTable';

const DesignTokensDisplay = ({tokens, tokenType, groupTokens}: DesignTokensDisplayProps) => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  let groupedTokens: GroupedTokens[] | undefined;
  if (groupTokens) {
    const tokenGroupNames = new Set(tokens.map(token => token[0].split('-')[1]));
    groupedTokens = [...tokenGroupNames].map((tokenGroupName: string) => {
      return {
        displayName: tokenGroupName.replace(/^(line|font|text)(.+)$/gi, '$1 $2').trim(),
        name: tokenGroupName,
        tokens: tokens.filter(token => token[0].includes(`-${tokenGroupName}-`)),
      };
    });

    return (
      <>
        <Box bgcolor={theme.tokens['color-surface-subtle']} mt={-3}>
          <Tabs
            aria-label="design tokens"
            onChange={(_event, newValue) => setValue(newValue)}
            value={value}
          >
            {groupedTokens.map(({displayName, name}) => (
              <Tab
                key={name}
                label={displayName}
                id={`grouped-tokens-${name}`}
                aria-controls={`grouped-tokens-panel-${name}`}
              />
            ))}
          </Tabs>
        </Box>
        {groupedTokens.map(({name, tokens}, index) => (
          <div
            aria-labelledby={`design-tokens-${index}`}
            hidden={value !== index}
            id={`design-tokens-panel-${index}`}
            key={name}
            role="tabpanel"
          >
            {value === index && (
              <Box py={3}>
                <DesignTokensTable tokens={tokens} tokenType={tokenType} />
              </Box>
            )}
          </div>
        ))}
      </>
    );
  }

  return <DesignTokensTable tokens={tokens} tokenType={tokenType} />;
};

export default DesignTokensDisplay;
