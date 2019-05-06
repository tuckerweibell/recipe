import {css} from 'emotion';
import styled from '../../themes/styled';

const centeredStyles = ({theme, width}: {theme: any; width?: string}) =>
  width === 'centered' &&
  css`
    margin: 0 auto;
    max-width: ${theme.pageContentWidth.base};
  `;

export const WidthWrapper = styled.div<{width: string}>(centeredStyles as any);
