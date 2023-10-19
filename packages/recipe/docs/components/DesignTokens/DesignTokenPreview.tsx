import React from 'react';
import {Box, Stack, useTheme} from '@mui/material';
import {color, radius, shadow, spacing, typography} from '../../../src/themes/tokens';
import {DesignTokenPreviewProps} from './DesignTokens.types';

const DesignTokenPreview = ({token, tokenType}: DesignTokenPreviewProps) => {
  const theme = useTheme();
  const tokenGroup = token[0].split('-')[1];

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
    spacing: {
      displayText: spacing[token[0]]?.displayText,
      sx: {
        backgroundColor: theme.tokens['color-surface-neutral-default'],
        borderRadius: theme.tokens['radius-none'],
        minWidth: spacing[token[0]]?.value,
      },
    },
    typography: {
      displayText: typography[token[0]]?.displayText,
      sx: {
        display: '-webkit-box',
        fontFamily:
          tokenGroup === 'fontfamily' ? typography[token[0]].value : theme.typography.fontFamily,
        fontSize:
          tokenGroup === 'fontsize'
            ? typography[token[0]]?.value
            : theme.tokens['typography-fontsize-100'],
        fontStyle:
          tokenGroup === 'fontstyle'
            ? typography[token[0]].value
            : theme.tokens['typography-fontstyle-normal'],
        fontWeight:
          tokenGroup === 'fontweight'
            ? typography[token[0]].value
            : theme.tokens['typography-fontweight-normal'],
        lineHeight:
          tokenGroup === 'lineheight'
            ? typography[token[0]]?.value
            : theme.tokens['typography-lineheight-default'],
        overflow: 'hidden',
        textDecoration:
          tokenGroup === 'textdecoration'
            ? typography[token[0]]?.value
            : theme.tokens['typography-textdecoration-none'],
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: tokenGroup === 'fontsize' ? '1' : 'unset',
      },
    },
  };

  return (
    <Stack alignItems="center" direction="row" gap={3}>
      {tokenType === 'typography' ? (
        <Box sx={previewMap[tokenType].sx}>
          Get food you can rely on for your meetings and events — professionally prepared and
          delivered.
        </Box>
      ) : (
        <Box borderRadius="4px" height="40px" minWidth="40px" sx={previewMap[tokenType].sx} />
      )}
      <Box>{previewMap[tokenType].displayText}</Box>
    </Stack>
  );
};

export default DesignTokenPreview;
