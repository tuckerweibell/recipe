import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {mq} from '../../themes/styled';
import './vars.css';

export const StyledOverlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const dialogStyles = () => css`
  background-color: var(--recipe-dialog-background-color);
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  outline: none;
  width: 100%;
  overflow-y: auto; /* IE fix to prevent flex items overflowing. See: https://github.com/philipwalton/flexbugs#flexbug-3 */

  :focus {
    box-shadow: var(--recipe-alias-focus-ring-shadow);
  }

  ${mq('medium', {
    borderRadius: 'var(--recipe-dialog-border-radius)',
    height: 'auto',
    maxHeight: 'calc(100vh - var(--recipe-global-static-size-750))',
    width: '575px',
  }) as any};
`;

const containerPadding = () => css`
  padding: var(--recipe-dialog-tray-padding-y) var(--recipe-dialog-tray-padding-x);

  ${mq('medium', {
    padding: 'var(--recipe-dialog-modal-padding-y) var(--recipe-dialog-modal-padding-x)',
  })};
`;

export const HeaderContainer = styled.div`
  ${containerPadding};
  border-bottom: 1px solid var(--recipe-alias-border-color-light);
  display: flex;
  flex: none;
  justify-content: space-between;

  button svg path {
    fill: var(--recipe-alias-icon-color);
  }

  ${mq('medium', {borderBottom: 'none'}) as any};
`;

export const ContentContainer = styled.div`
  ${containerPadding}
  flex: auto;
  overflow-y: auto;

  && > * + * {
    margin-top: var(--recipe-global-static-size-250);
  }

  ${mq('medium', {paddingTop: 0}) as any};
`;

export const ButtonFooter = styled.div`
  ${containerPadding}
  background: var(--recipe-dialog-footer-background-color);
  border-top: 1px solid var(--recipe-alias-border-color-light);
  flex: none;

  ${mq('medium', {
    borderBottomLeftRadius: 'var(--recipe-dialog-border-radius)',
    borderBottomRightRadius: 'var(--recipe-dialog-border-radius)',
  }) as any};
`;
