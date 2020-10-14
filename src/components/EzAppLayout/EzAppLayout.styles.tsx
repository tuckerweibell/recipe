import {css} from '@emotion/core';
import styled from '@emotion/styled';
import './vars.css';

const centeredStyles = ({width}: {width?: string}) =>
  width === 'centered' &&
  css`
    margin: 0 auto;
    max-width: var(--recipe-app-layout-centered-max-width);
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
