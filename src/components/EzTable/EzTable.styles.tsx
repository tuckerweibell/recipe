import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {EzCardSection} from '../EzCard';
import './vars.css';

const fullBleed = () => css`
  padding: 0;
  table {
    width: 100%;
  }
`;

const spacing = () => css`
  th,
  td {
    &:first-of-type {
      padding-left: var(--recipe-global-static-size-250);
    }
    &:last-of-type {
      padding-right: var(--recipe-global-static-size-250);
    }
  }
`;

const interactiveStyles = () => css`
  cursor: pointer;
  user-select: none;
`;

const hoverRows = () =>
  css`
    && tr:hover {
      td {
        background-color: var(--recipe-table-background-color-hover);
      }
    }
  `;

const cell = ({numeric}) => css`
  text-align: ${numeric ? 'right' : 'left'};
  padding: var(--recipe-global-static-size-150) var(--recipe-global-static-size-100);
`;

const heading = () => css`
  font-weight: var(--recipe-table-heading-font-weight);
  font-size: var(--recipe-table-heading-font-size);
  line-height: var(--recipe-table-heading-leading);
  color: var(--recipe-table-heading-text-color);
`;

const borders = () => css`
  tbody tr:first-of-type td {
    border-top: 1px solid var(--recipe-alias-border-color-light);
  }

  && td {
    border-bottom: 1px solid var(--recipe-alias-border-color-light);
  }

  tr:last-of-type td {
    border-bottom: none;
  }

  overflow: hidden;
  border-radius: var(--recipe-table-border-radius);
`;

const sortable = ({sorted, sortable: isSortable}) =>
  isSortable &&
  css`
    ${interactiveStyles()};

    span {
      display: inline-flex;
      align-items: center;
    }
    svg {
      fill: var(--recipe-alias-deemphasis-text-color);
      margin-left: var(--recipe-global-static-size-100);
      opacity: ${sorted ? '1' : '0'};
    }
  `;

const rowHover = ({clickable}) =>
  clickable &&
  css`
    &&:hover {
      td {
        user-select: none;
        cursor: pointer;
      }
    }
  `;

export const Th = styled.th<any>(cell, heading, sortable);
export const Td = styled.td<any>(cell);
export const ClickableTr = styled.tr<{clickable: boolean}>(rowHover);
export const TableCardSection = styled(EzCardSection)<any>(fullBleed, spacing, borders, hoverRows);

/*
  With table-layout: auto, widths of table cells only shrink to the size of their content,
  so setting the width to a size smaller than the content size causes the cell to always fit
  the content and not stretch to fill the available space.
*/
const cellFitContent = '1%';

const selectionColumn = ({selectable}) =>
  selectable &&
  css`
    th:first-of-type,
    td:first-of-type {
      width: ${cellFitContent};
      white-space: normal;
    }

    && thead tr + tr {
      td,
      td:hover {
        background-color: var(--recipe-table-selection-summary-background-color);
        border-bottom: solid 1px var(--recipe-table-selection-summary-border-color);
        border-top: solid 1px var(--recipe-table-selection-summary-border-color);
        padding: var(--recipe-global-static-size-100);
      }
    }
  `;

// EzCard checks for a card section (by displayName), and will wrap if it can't find one
TableCardSection.displayName = EzCardSection.displayName;

const base = () => css`
  margin: 0;
  border-collapse: collapse;
  width: auto;
  font-family: var(--recipe-table-font-family);
  font-weight: var(--recipe-table-font-weight);
  font-size: var(--recipe-table-font-size);
  line-height: var(--recipe-table-leading);
  color: var(--recipe-table-text-color);

  th,
  td {
    border: none;
    background-color: white;
    white-space: nowrap;
  }
`;

const stripedRows = () =>
  css`
    tr:nth-of-type(odd) {
      td {
        background-color: var(--recipe-table-background-color-alternate);
      }
    }
  `;

const simple = ({use}) =>
  use === 'simple' &&
  css`
    tr th:first-of-type,
    tr td:first-of-type {
      padding-left: var(--recipe-global-static-size-150);
    }
    tr th:last-of-type,
    tr td:last-of-type {
      padding-right: var(--recipe-global-static-size-150);
    }
    tr th {
      padding-top: 0;
      padding-bottom: 6px;
    }
    tr td {
      padding-top: var(--recipe-global-static-size-50);
      padding-bottom: var(--recipe-global-static-size-50);
    }
    tr td:not(:last-of-type) {
      padding-right: var(--recipe-global-static-size-400);
    }
    ${stripedRows()}
  `;

export const Table = styled.table<any>(base, selectionColumn, simple);

const scrollShadow = () => css`
  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    box-shadow: inset 6px 0 10px -10px #333;
    left: 100%;
  }
`;

const pinnedFirstColumn = ({selectable, cols, isScrolling}) =>
  isScrolling &&
  cols > 2 &&
  css`
    th,
    td {
      :nth-of-type(1) {
        position: sticky;
        left: 0;
        ${!selectable && scrollShadow()};
      }
    }
  `;

const pinnedSecondColumn = ({selectable, cols, isScrolling}) =>
  isScrolling &&
  selectable &&
  cols > 2 &&
  css`
    th,
    td {
      :nth-of-type(2) {
        position: sticky;
        left: 44px;
        ${scrollShadow()};
      }
    }
  `;

const responsive = ({overflowing}) => css`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  ${overflowing &&
    css`
      margin-top: var(--recipe-global-static-size-250);

      thead tr th {
        border-top: 1px solid var(--recipe-alias-border-color-light);
      }
    `}
`;

export const Container = styled.div<any>(responsive, pinnedFirstColumn, pinnedSecondColumn);
