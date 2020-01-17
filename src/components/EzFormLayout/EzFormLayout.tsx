import styled from '../../themes/styled';

const EzFormLayout = styled.div`
  && > * + * {
    margin-top: ${({theme}) => theme.spacing.xl};
  }
`;

export default EzFormLayout;
