import {css} from '@emotion/core';
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
  && table td {
    border: none;
    vertical-align: top;
    white-space: normal;
  }

  && table tr th,
  && table tr td {
    padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.xs};
    background-color: ${({theme}) => theme.colors.content.background};
  }

  && table tr th:first-of-type,
  && table tr td:first-of-type {
    padding-left: ${({theme}) => theme.spacing.xs};
  }

  && table tr th:last-of-type,
  && table tr td:last-of-type {
    padding-right: ${({theme}) => theme.spacing.lg};
  }

  th:first-of-type,
  td:first-of-type {
    width: ${({theme}) => theme.spacing.xl4};
  }

  td:last-of-type {
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
    margin-left: calc(${theme.spacing.xs} * -1);
    margin-right: calc(${theme.spacing.xs} * -1);
  }

  th,
  td {
    text-align: left;
    font-weight: normal;
    width: 100%;
    border: none;
    padding: ${theme.spacing.xs2} ${theme.spacing.xs};
  }

  td:last-of-type {
    text-align: right;
  }

  tr:nth-of-type(even) {
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
