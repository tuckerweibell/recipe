import styled from '../../themes/styled';

export const BlankStateWrapper = styled.div`
  padding: ${({theme}) => theme.spacing.xl4} ${({theme}) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BlankStateImageWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BlankStateImage = styled.img`
  margin: 0;
  max-width: 100%;
  max-height: 100%;
`;

export const BlankStateMessage = styled.div`
  margin: ${({theme}) => theme.spacing.lg} 0;
  text-align: center;
`;
