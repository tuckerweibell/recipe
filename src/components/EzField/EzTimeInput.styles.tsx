import styled from '../../themes/styled';

import EzSelect from './EzSelect';

const clockIcon = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg"><path d="M7 0c1.26 0 2.427.315 3.5.946A7.073 7.073 0 0 1 13.054 3.5C13.684 4.573 14 5.74 14 7c0 1.26-.315 2.427-.946 3.5a7.073 7.073 0 0 1-2.554 2.554A6.786 6.786 0 0 1 7 14a6.786 6.786 0 0 1-3.5-.946A7.073 7.073 0 0 1 .946 10.5 6.786 6.786 0 0 1 0 7c0-1.26.315-2.427.946-3.5A7.073 7.073 0 0 1 3.5.946 6.786 6.786 0 0 1 7 0zm0 12.645a5.478 5.478 0 0 0 2.823-.762 5.693 5.693 0 0 0 2.06-2.06A5.478 5.478 0 0 0 12.645 7a5.478 5.478 0 0 0-.762-2.823 5.693 5.693 0 0 0-2.06-2.06A5.478 5.478 0 0 0 7 1.355a5.478 5.478 0 0 0-2.823.762 5.693 5.693 0 0 0-2.06 2.06A5.478 5.478 0 0 0 1.355 7c0 1.016.254 1.957.762 2.823a5.693 5.693 0 0 0 2.06 2.06A5.478 5.478 0 0 0 7 12.645zM6.35 7.96a.348.348 0 0 1-.14-.283V3.048c0-.094.033-.174.098-.24a.327.327 0 0 1 .24-.098h.904c.094 0 .174.033.24.098a.327.327 0 0 1 .098.24v4.008l1.891 1.355a.31.31 0 0 1 .127.226.351.351 0 0 1-.07.254l-.508.734a.361.361 0 0 1-.226.141.306.306 0 0 1-.254-.056l-2.4-1.75z" fill="#8B99A6" fill-rule="evenodd"/></svg>'
)}`;

export const TimeInput = styled(EzSelect)`
  width: 150px;
  :before {
    content: url('${clockIcon}');
    display: inline-block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: ${({theme}) => theme.spacing.sm};
    top: calc(50% - 1rem / 2);
    pointer-events: none;
  }
  input {
    padding-left: 2.5em;
  }
  + ul {
    width: 230px;
  }
`;
