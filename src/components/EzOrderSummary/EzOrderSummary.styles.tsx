import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {EzCardSection} from '..';
import {TableCardSection} from '../EzTable/EzTable.styles';
import './vars.css';

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
    padding: var(--recipe-global-static-size-150) var(--recipe-global-static-size-100);
    background-color: var(--recipe-global-color-static-white);
  }

  && table tr th:first-of-type,
  && table tr td:first-of-type {
    padding-left: var(--recipe-global-static-size-100);
  }

  && table tr th:last-of-type,
  && table tr td:last-of-type {
    padding-right: var(--recipe-global-static-size-250);
  }

  th:first-of-type,
  td:first-of-type {
    width: var(--recipe-global-static-size-750);
  }

  td:last-of-type {
    width: ${cellFitContent};
  }
`;

export const Total = styled.span`
  font-size: var(--recipe-order-summary-total-font-size);
  font-weight: var(--recipe-order-summary-total-font-weight);
`;

// left padding here is the fixed width of the first column of the previous table
// plus the padding of the second column
const totals = () => css`
  padding-left: calc(var(--recipe-global-static-size-750) + var(--recipe-global-static-size-100));

  table {
    width: auto;
    margin-left: calc(var(--recipe-global-static-size-100) * -1);
    margin-right: calc(var(--recipe-global-static-size-100) * -1);
  }

  th,
  td {
    text-align: left;
    font-weight: normal;
    width: 100%;
    border: none;
    padding: var(--recipe-global-static-size-50) var(--recipe-global-static-size-100);
  }

  td:last-of-type {
    text-align: right;
  }

  tr:nth-of-type(even) {
    background-color: var(--recipe-global-color-static-gray-100);
  }
`;

export const SummarySection = styled(EzCardSection)(totals as any);

const tableware = () => css`
  background-color: var(--recipe-global-color-static-gray-100);
  border-radius: var(--recipe-alias-border-radius-regular);
  display: inline-block;
  font-size: var(--recipe-global-font-size-75);
  margin-top: var(--recipe-global-static-size-100);
  padding: var(--recipe-global-static-size-150) var(--recipe-global-static-size-200);
`;

export const SpecialInstructions = styled.div(tableware as any);

// EzCard checks for a card section (by displayName), and will wrap if it can't find one
ItemsSection.displayName = EzCardSection.displayName;
SummarySection.displayName = EzCardSection.displayName;

export {Table, Td} from '../EzTable/EzTable.styles';
