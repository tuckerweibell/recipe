import styled from '@emotion/styled';
import './vars.css';

const EzFormLayout = styled.div`
  && > * + * {
    margin-top: var(--recipe-form-layout-field-margin);
  }
`;

export default EzFormLayout;
