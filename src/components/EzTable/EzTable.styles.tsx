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
  th,
  td {
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

export const Th = styled.th<CellProps & {sortable?: boolean}>(cell, heading, sortable);
export const Td = styled.td<CellProps>(cell);

type TableCardSectionProps = {
  theme?: Theme;
};

export const TableCardSection = styled(EzCardSection)<TableCardSectionProps>(
  fullBleed,
  spacing,
  borders
);

// EzCard checks for a card section (by displayName), and will wrap if it can't find one
TableCardSection.displayName = EzCardSection.displayName;

const base = css`
  margin: 0;
  line-height: 1.5rem;
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    border: none;
  }
`;

export const Table = styled.table(base);
