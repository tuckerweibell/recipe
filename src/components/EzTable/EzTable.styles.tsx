import {css} from '@emotion/core';
import {EzCardSection} from '../EzCard';
import styled, {Theme} from '../../themes/styled';

const fullBleed = () => css`
  padding: 0;
  table {
    width: 100%;
  }
`;

const spacing = ({theme}) => css`
  th,
  td {
    &:first-of-type {
      padding-left: ${theme.spacing.lg};
    }
    &:last-of-type {
      padding-right: ${theme.spacing.lg};
    }
  }
`;

const interactiveStyles = () => css`
  cursor: pointer;
  user-select: none;
`;

const hoverRows = ({theme}) =>
  css`
    && tr:hover {
      td {
        background-color: ${theme.colors.interactive.hover.background};
      }
    }
  `;

const cell = ({theme, numeric}) => css`
  text-align: ${numeric ? 'right' : 'left'};
  padding: ${theme.spacing.sm} ${theme.spacing.xs};
`;

const heading = ({theme}) => css`
  ${theme.fonts.small}
  font-weight: bold;
`;

const borders = ({theme}) => css`
  tbody tr:first-of-type td {
    border-top: 1px solid ${theme.colors.border.subtle};
  }

  && td {
    border-bottom: 1px solid ${theme.colors.border.subtle};
  }

  tr:last-of-type td {
    border-bottom: none;
  }

  overflow: hidden;
  border-radius: ${theme.borderRadius[2]};
`;

const sortable = ({theme, sorted, sortable: isSortable}) =>
  isSortable &&
  css`
    ${interactiveStyles()};

    span {
      display: inline-flex;
      align-items: center;
    }
    svg {
      fill: ${theme.colors.text.deemphasis};
      margin-left: ${theme.spacing.xs};
      opacity: ${sorted ? '1' : '0'};
    }
  `;

type CellProps = {
  numeric?: boolean;
  sorted?: boolean;
};

const rowHover = ({clickable, theme}) =>
  clickable &&
  css`
    &&:hover {
      td {
        background-color: ${theme.colors.interactive.hover.highlight};
        user-select: none;
        cursor: pointer;
      }
    }
  `;

export const Th = styled.th<CellProps & {sortable?: boolean}>(cell, heading, sortable);
export const Td = styled.td<CellProps>(cell);
export const ClickableTr = styled.tr<{clickable: boolean}>(rowHover);

type TableCardSectionProps = {
  theme?: Theme;
};

export const TableCardSection = styled(EzCardSection)<TableCardSectionProps>(
  fullBleed,
  spacing,
  borders,
  hoverRows
);

/*
  With table-layout: auto, widths of table cells only shrink to the size of their content,
  so setting the width to a size smaller than the content size causes the cell to always fit
  the content and not stretch to fill the available space.
*/
const cellFitContent = '1%';

const selectionColumn = ({theme, selectable}) =>
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
        background-color: ${theme.colors.info.background};
        border-bottom: solid 1px ${theme.colors.info.border};
        border-top: solid 1px ${theme.colors.info.border};
        padding: ${theme.spacing.xs};

        > * {
          justify-content: center;
        }
      }
    }
  `;

// EzCard checks for a card section (by displayName), and will wrap if it can't find one
TableCardSection.displayName = EzCardSection.displayName;

const base = ({theme}) => css`
  margin: 0;
  line-height: 1.5rem;
  border-collapse: collapse;
  width: auto;
  ${theme.fonts.body};

  th,
  td {
    border: none;
    background-color: white;
    white-space: nowrap;
  }
`;

const stripedRows = ({theme}) =>
  css`
    tr:nth-of-type(odd) {
      td {
        background-color: ${theme.colors.interactive.hover.background};
      }
    }
  `;

const simple = ({theme, use}) =>
  use === 'simple' &&
  css`
    tr th:first-of-type,
    tr td:first-of-type {
      padding-left: ${theme.spacing.sm};
    }
    tr th:last-of-type,
    tr td:last-of-type {
      padding-right: ${theme.spacing.sm};
    }
    tr th {
      padding-top: 0;
      padding-bottom: 6px;
    }
    tr td {
      padding-top: ${theme.spacing.xs2};
      padding-bottom: ${theme.spacing.xs2};
    }
    tr td:not(:last-of-type) {
      padding-right: ${theme.spacing.xl2};
    }
    ${stripedRows({theme})}
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

const responsive = ({overflowing, theme}) => css`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  ${overflowing &&
    css`
      margin-top: ${theme.spacing.lg};

      thead tr th {
        border-top: 1px solid ${theme.colors.border.subtle};
      }
    `}
`;

export const Container = styled.div<any>(responsive, pinnedFirstColumn, pinnedSecondColumn);
