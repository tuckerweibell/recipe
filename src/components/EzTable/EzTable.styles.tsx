import {css} from 'emotion';
import {EzCardSection} from '../EzCard';
import styled, {Theme} from '../../themes/styled';

const fullBleed = css`
  padding: 0;
`;

const spacing = ({theme}) => css`
  th,
  td {
    &:first-child {
      padding-left: ${theme.spacing.lg};
    }
    &:last-child {
      padding-right: ${theme.spacing.lg};
    }
  }
`;

const interactiveStyles = css`
  cursor: pointer;
  user-select: none;
`;

const cell = ({theme, numeric}) => css`
  text-align: ${numeric ? 'right' : 'left'};
  padding: ${theme.spacing.sm} ${theme.spacing.xs};
`;

const heading = ({theme}) => css`
  color: ${theme.colors.grays[600]};
`;

const borders = ({theme}) => css`
  tbody tr:first-child td {
    border-top: 1px solid ${theme.colors.grays[300]};
  }

  && td {
    border-bottom: 1px solid ${theme.colors.grays[300]};
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const sortable = ({theme, sorted, sortable: isSortable}) =>
  isSortable &&
  css`
    ${interactiveStyles};

    span {
      display: inline-flex;
      align-items: center;
    }
    svg {
      fill: ${theme.colors.grays[600]};
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
        background-color: ${theme.colors.blues[100]};
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
  borders
);

export const TablePaginationNavItem = styled.span`
  padding-right: ${props => props.theme.spacing.lg};
`;

// `direction: rtl` on the select is used to align the text in the select box to the right, changing direction in the option tag prevents the text contents from displaying RTL.
export const TablePaginationRowCountDropdown = styled.select`
  padding-right: ${props => props.theme.spacing.md};
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: ${prop => prop.theme.fontSizes[300]};
  font-weight: bold;
  color: ${props => props.theme.colors.primary.main};
  border: 0;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48cGF0aCBkPSJNMTIyLjI0MiAxMC40MTVsMy40MzYgMy40MzZjLjAwMy4wMDQuMDA0LjAwOS4wMDguMDEzYS44MjcuODI3IDAgMCAwIC41ODkuMjQxYy4yMTMgMCAuNDI3LS4wOC41ODktLjI0MS4wMDQtLjAwNC4wMDUtLjAxLjAwOC0uMDEzbDMuNDM2LTMuNDM2YS44MzIuODMyIDAgMCAwIDAtMS4xNzMuODMyLjgzMiAwIDAgMC0xLjE3MyAwbC0yLjg2IDIuODYtMi44Ni0yLjg2YS44MzIuODMyIDAgMCAwLTEuMTczIDAgLjgzMi44MzIgMCAwIDAgMCAxLjE3M3oiIGlkPSJhIi8+PC9kZWZzPjx1c2UgZmlsbD0iIzNFOTBENiIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjYSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMiAtOSkiLz48L3N2Zz4=');
  background-repeat: no-repeat;
  background-position: right 60%;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
  direction: rtl;
  option {
    direction: ltr;
  }
`;

/*
  With table-layout: auto, widths of table cells only shrink to the size of their content,
  so setting the width to a size smaller than the content size causes the cell to always fit
  the content and not stretch to fill the available space.
*/
const cellFitContent = '1%';

type Selectable = {selectable?: boolean};

const selectionColumn = ({theme, selectable}) =>
  selectable &&
  css`
    th:first-child,
    td:first-child {
      width: ${cellFitContent};
    }

    && thead tr + tr {
      td {
        background-color: ${theme.colors.blues[200]};
        border-bottom: solid 1px ${theme.colors.blues[400]};
        border-top: solid 1px ${theme.colors.blues[400]};
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
  width: 100%;

  th,
  td {
    border: none;
  }

  tr:hover {
    td {
      background-color: ${theme.colors.grays[100]};
    }
  }
`;

export const Table = styled.table<Selectable>(base, selectionColumn);
