import React from 'react';
import {Box, useTheme} from '@mui/material';
import {CodeBlockProps} from './DesignTokens.types';
import CopyButton from './CopyButton';

const CodeBlock = ({children, withCopy = false}: CodeBlockProps) => {
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

export default CodeBlock;
