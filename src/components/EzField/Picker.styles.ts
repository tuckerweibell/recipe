import styled from '../../themes/styled';

export const OverlayFieldWrapper = styled.div<any>`
  input {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    /* readonly fields have no outline in safari */
    :focus {
      outline-style: auto;
    }
  }
`;

const iconColor = p =>
  p.disabled ? p.theme.colors.interactive.disabled.foreground : p.theme.colors.interactive.base;

export const TextInputWrapper = styled.div`
  && input {
    padding-right: 2em;
  }

  svg {
    stroke: ${iconColor};
    transition: transform 0.3s;
  }
`;
