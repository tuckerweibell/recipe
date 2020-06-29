import {css} from '@emotion/core';
import EzHeading from '../EzHeading';

// eslint-disable-next-line dot-notation
const ezHeadingSelector = `.${EzHeading['__internalComponentSelector']}`;

export const childStyles = ({theme}) => css`
  > *:not(:last-child) {
    margin-bottom: ${theme.spacing.sm};
  }

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    > *:not(:last-child) {
      margin-bottom: ${theme.spacing.xl};
    }
  }

  > ${ezHeadingSelector} {
    margin-bottom: ${theme.spacing.sm};
  }
`;
