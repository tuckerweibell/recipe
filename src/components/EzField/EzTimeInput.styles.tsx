import styled from '../../themes/styled';

import EzSelect from './EzSelect';

export const TimeInput = styled(EzSelect)`
  width: 150px;
  input {
    padding-left: 2.5em;
  }
  + ul {
    width: 230px;
  }
`;
