import {css} from 'emotion';
import styled from '../../themes/styled';

const centeredStyles = ({theme, width}: {theme: any; width?: string}) =>
  width === 'centered' &&
  css`
    margin: 0 auto;
    max-width: ${theme.pageContentWidth.base};
  `;

export const Frame = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
  flex-wrap: no-wrap;
  flex-direction: column;
`;

export const WidthWrapper = styled.div<{width: string}>(centeredStyles as any);
