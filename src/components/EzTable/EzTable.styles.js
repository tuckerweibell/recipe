import styled, {css} from 'react-emotion';
import {EzCardSection} from '../EzCard';

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

export const Th = styled.th(cell, heading);
export const Td = styled.td(cell);

export const TableCardSection = styled(EzCardSection)(fullBleed, spacing, borders);

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
