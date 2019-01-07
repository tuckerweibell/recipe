import styled from '../../themes/styled';

const EzFormLayout = styled.div`
  > *:not(:first-child) {
    margin-top: ${({theme}) => theme.spacing.xl};
  }
`;

export default EzFormLayout;
