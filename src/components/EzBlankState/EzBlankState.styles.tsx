import styled from '@emotion/styled';
import './vars.css';

export const BlankStateWrapper = styled.div`
  padding: var(--recipe-blank-state-padding-y) var(--recipe-blank-state-padding-x);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  && > * + * {
    margin-top: var(--recipe-blank-state-content-spacing);
  }
`;

export const BlankStateImageWrapper = styled.div`
  width: var(--recipe-blank-state-image-width);
  height: var(--recipe-blank-state-image-height);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 0;
    max-width: 100%;
    max-height: 100%;
  }
`;
