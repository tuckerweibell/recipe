import React from 'react';
import {Box, Stack, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import {color} from '@storybook/theming';
import {DesignTokensDisplayProps} from './DesignTokens.types';
import {EzThemeTokens} from '../../../src/themes/themes.types';
import {shadow} from '../../../src/themes/tokens';
import CopyButton from './CopyButton';

const CodeBlock = ({children, withCopy = false}) => (
  <Box position="relative">
    <Box bgcolor="#151515" borderRadius="4px" overflow="auto" pl={2} pr={withCopy ? 4 : 2}>
      <Box aria-hidden={true} color="#f8f8f2" component="pre">
        <Box component="code" whiteSpace="pre-wrap">
          {children}
        </Box>
      </Box>
    </Box>

    {withCopy && (
      <Box position="absolute" top="12px" right="12px">
        <CopyButton darkMode textToCopy={children} />
      </Box>
    )}
  </Box>
);

const DesignTokenPreview = ({token, tokenType}) => {
  // TODO: add remaining tokens
  const previewMap = {
    // color: {style: 'bgolor'},
    // radius: {style: 'borderRadius'},
    shadow: {
      displayText: shadow[token[0]].displayText,
      style: 'boxShadow',
    },
    // spacing: {style: 'padding'},
    // typography: {style: 'fontFamily'},
  };

  return (
    <Stack alignItems="center" direction="row" gap={3}>
      <Box
        borderRadius="4px"
        height="70px"
        width="70px"
        sx={{[previewMap[tokenType].style]: token[1]}}
      />
      <Box>{previewMap[tokenType].displayText}</Box>
    </Stack>
  );
};

const DesignTokensDisplay = ({tokens, tokenType}: DesignTokensDisplayProps) => {
  const cellStyles = {color: color.darkest, fontWeight: 'bold', opacity: 0.6};

  return (
    <Table aria-label="design tokens display">
      <TableHead>
        <TableRow>
          <TableCell sx={cellStyles}>Name</TableCell>
          <TableCell sx={cellStyles}>Value</TableCell>
          <TableCell sx={cellStyles}>Preview</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tokens.map((token: EzThemeTokens, index: number) => (
          <TableRow key={index} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
            <TableCell>
              <CodeBlock withCopy>{token[0]}</CodeBlock>
            </TableCell>
            <TableCell sx={{maxWidth: '300px'}}>
              <CodeBlock>{token[1]}</CodeBlock>
            </TableCell>
            <TableCell sx={{minWidth: '300px'}}>
              <DesignTokenPreview token={token} tokenType={tokenType} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DesignTokensDisplay;
