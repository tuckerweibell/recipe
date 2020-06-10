import styled from '../../themes/styled';

export const BlankStateWrapper = styled.div`
  padding: ${({theme}) => theme.spacing.xl4} ${({theme}) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  && > * + * {
    margin-top: ${props => props.theme.spacing.lg};
  }
`;

export const BlankStateImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 0;
    max-width: 100%;
    max-height: 100%;
  }
`;
