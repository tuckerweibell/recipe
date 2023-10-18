import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import {color as storybookColor} from '@storybook/theming';
import {DesignTokensTableProps} from './DesignTokens.types';
import CodeBlock from './CodeBlock';
import DesignTokenPreview from './DesignTokenPreview';

const DesignTokensTable = ({tokens, tokenType}: DesignTokensTableProps) => {
  const cellStyles = {color: storybookColor.darkest, fontWeight: 'bold', opacity: 0.6};

  return (
    <Table aria-label="design tokens display" size="small">
      <TableHead>
        <TableRow>
          <TableCell sx={{...cellStyles, minWidth: '300px'}}>Name</TableCell>
          <TableCell sx={cellStyles}>Value</TableCell>
          <TableCell sx={cellStyles}>Preview</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tokens.map((token: Array<string>) => (
          <TableRow key={token[0]} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
            <TableCell>
              <CodeBlock withCopy>{token[0]}</CodeBlock>
            </TableCell>
            <TableCell sx={{maxWidth: '120px'}}>
              <CodeBlock>{token[1]}</CodeBlock>
            </TableCell>
            <TableCell>
              <DesignTokenPreview token={token} tokenType={tokenType} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DesignTokensTable;
