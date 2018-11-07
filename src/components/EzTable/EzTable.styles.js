import styled, {css} from 'react-emotion';
import {EzCardSection} from '../EzCard';

const fullBleed = css`
  padding: 0;
`;

const spacing = ({
  theme: {
    spacing: {lg},
  },
}) => css`
  th,
  td {
    &:first-child {
      padding-left: ${lg};
    }
    &:last-child {
      padding-right: ${lg};
    }
  }
`;

const cell = ({numeric}) =>
  numeric !== undefined &&
  css`
    text-align: right;
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

  th,
  td {
    border: none;
  }
`;

export const Table = styled.table(base);
