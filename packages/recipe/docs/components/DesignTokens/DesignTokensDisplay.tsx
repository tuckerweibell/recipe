import React from 'react';
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import {color as storybookColor} from '@storybook/theming';
import {color, radius, shadow} from '../../../src/themes/tokens';
import {DesignTokensDisplayProps} from './DesignTokens.types';
import {EzThemeTokens} from '../../../src/themes/themes.types';
import CopyButton from './CopyButton';

const CodeBlock = ({children, withCopy = false}) => {
  const theme = useTheme();

  return (
    <Box position="relative">
      <Box
        bgcolor={theme.tokens['color-surface-neutral-bold']}
        borderRadius="4px"
        overflow="auto"
        pl={2}
        pr={withCopy ? 4 : 2}
      >
        <Box aria-hidden={true} color={theme.tokens['color-text-contrast']} component="pre" my={1}>
          <Box component="code" whiteSpace="pre-wrap">
            {children}
          </Box>
        </Box>
      </Box>

      {withCopy && (
        <Box position="absolute" top="4px" right="4px">
          <CopyButton darkMode textToCopy={children} />
        </Box>
      )}
    </Box>
  );
};

const DesignTokenPreview = ({token, tokenType}) => {
  const theme = useTheme();

  // TODO: add remaining tokens
  const previewMap = {
    color: {
      displayText: color[token[0]]?.displayText,
      sx: {bgcolor: color[token[0]]?.value},
    },
    radius: {
      displayText: radius[token[0]]?.displayText,
      sx: {
        backgroundColor: theme.tokens['color-surface-neutral-default'],
        borderRadius: radius[token[0]]?.value,
      },
    },
    shadow: {
      displayText: shadow[token[0]]?.displayText,
      sx: {boxShadow: shadow[token[0]]?.value},
    },
    // spacing: {style: 'padding'},
    // typography: {style: 'fontFamily'},
  };

  return (
    <Stack alignItems="center" direction="row" gap={3}>
      <Box borderRadius="4px" height="40px" minWidth="40px" sx={previewMap[tokenType].sx} />
      <Box>{previewMap[tokenType].displayText}</Box>
    </Stack>
  );
};

type GroupedTokens = {
  name: string;
  tokens: Array<Array<string>>;
};

type TokenRowProps = {
  groupedTokens?: GroupedTokens;
  includeGroup?: boolean;
  token: Array<string>;
  tokenType: string;
};

const TokenRow = ({includeGroup, groupedTokens, token, tokenType}: TokenRowProps) => (
  <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
    {includeGroup && (
      <TableCell rowSpan={groupedTokens.tokens.length}>{groupedTokens.name}</TableCell>
    )}
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
);

const DesignTokensDisplay = ({tokens, tokenType, groupTokens}: DesignTokensDisplayProps) => {
  const cellStyles = {color: storybookColor.darkest, fontWeight: 'bold', opacity: 0.6};

  let groupedTokens: GroupedTokens[] | undefined;
  if (groupTokens) {
    const tokenGroupNames = new Set(tokens.map(token => token[0].split('-')[1]));
    groupedTokens = [...tokenGroupNames].map((tokenGroupName: string) => {
      return {
        name: tokenGroupName,
        tokens: tokens.filter(token => token[0].includes(`-${tokenGroupName}-`)),
      };
    });
  }

  return (
    <Table aria-label="design tokens display" size="small">
      <TableHead>
        <TableRow>
          {groupedTokens && <TableCell />}
          <TableCell sx={{...cellStyles, minWidth: '320px'}}>Name</TableCell>
          <TableCell sx={cellStyles}>Value</TableCell>
          <TableCell sx={cellStyles}>Preview</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {groupedTokens
          ? groupedTokens.flatMap(tokenGroup =>
              tokenGroup.tokens.map((token, index) => (
                <TokenRow
                  groupedTokens={tokenGroup}
                  includeGroup={index === 0}
                  key={token[0]}
                  token={token}
                  tokenType={tokenType}
                />
              ))
            )
          : tokens.map(token => <TokenRow key={token[0]} token={token} tokenType={tokenType} />)}
      </TableBody>
    </Table>
  );
};

export default DesignTokensDisplay;
