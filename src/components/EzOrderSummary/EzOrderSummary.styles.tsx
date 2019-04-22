import {css} from 'emotion';
import {EzCardSection} from '..';
import {TableCardSection} from '../EzTable/EzTable.styles';
import styled from '../../themes/styled';

/*
  With table-layout: auto, widths of table cells only shrink to the size of their content, 
  so setting the width to a size smaller than the content size causes the cell to always fit 
  the content and not stretch to fill the available space.
*/
const cellFitContent = '1%';

export const ItemsSection = styled(TableCardSection)`
  td {
    border: none;
    vertical-align: top;
  }

  th:first-child,
  td:first-child {
    width: ${({theme}) => theme.spacing.xl4};
  }

  td:last-child {
    width: ${cellFitContent};
  }
`;

export const Total = styled.span`
  font-size: ${({theme}) => theme.fontSizes[500]};
  font-weight: ${({theme}) => theme.fontWeights.bold};
`;

// left padding here is the fixed width of the first column of the previous table
// plus the padding of the second column
const totals = ({theme}) => css`
  padding-left: calc(${theme.spacing.xl4} + ${theme.spacing.xs});

  table {
    width: auto;
    margin-left: -${theme.spacing.xs};
    margin-right: -${theme.spacing.xs};
  }

  th,
  td {
    text-align: left;
    font-weight: normal;
    width: 100%;
    border: none;
    padding: ${theme.spacing.xs2} ${theme.spacing.xs};
  }

  td:last-child {
    text-align: right;
  }

  tr:nth-child(even) {
    background-color: ${theme.colors.grays[100]};
  }
`;

export const SummarySection = styled(EzCardSection)(totals as any);

const tableware = ({theme}) => css`
  background-color: ${theme.colors.grays[100]};
  border-radius: ${theme.borderRadius[1]};
  display: inline-block;
  font-size: ${theme.fontSizes[200]};
  margin-top: ${theme.spacing.xs};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
`;

export const SpecialInstructions = styled.div(tableware as any);

// EzCard checks for a card section (by displayName), and will wrap if it can't find one
ItemsSection.displayName = EzCardSection.displayName;
SummarySection.displayName = EzCardSection.displayName;

export {Table, Td} from '../EzTable/EzTable.styles';
