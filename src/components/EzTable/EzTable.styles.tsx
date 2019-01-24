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

type CellProps = {
  numeric: boolean;
};

export const Th = styled.th<CellProps>(cell, heading);
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
