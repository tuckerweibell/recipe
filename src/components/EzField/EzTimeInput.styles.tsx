import styled from '../../themes/styled';

import EzSelect from './EzSelect';

const clockIcon = `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg"><path fill="%238B99A6" fill-rule="evenodd" d="M7 0c1.26 0 2.43.32 3.5.95a7.07 7.07 0 012.55 2.55A6.8 6.8 0 0114 7c0 1.26-.32 2.43-.95 3.5a7.07 7.07 0 01-2.55 2.55A6.79 6.79 0 017 14a6.79 6.79 0 01-3.5-.95A7.07 7.07 0 01.95 10.5 6.79 6.79 0 010 7c0-1.26.32-2.43.95-3.5A7.07 7.07 0 013.5.95 6.79 6.79 0 017 0zm0 12.64a5.48 5.48 0 002.82-.76 5.7 5.7 0 002.06-2.06A5.48 5.48 0 0012.64 7a5.48 5.48 0 00-.76-2.82 5.7 5.7 0 00-2.06-2.06A5.48 5.48 0 007 1.35a5.48 5.48 0 00-2.82.77 5.7 5.7 0 00-2.06 2.06A5.48 5.48 0 001.35 7c0 1.02.26 1.96.77 2.82a5.7 5.7 0 002.06 2.06 5.48 5.48 0 002.82.76zm-.65-4.68a.35.35 0 01-.14-.28V3.05c0-.1.03-.18.1-.24a.33.33 0 01.24-.1h.9c.1 0 .18.03.24.1a.33.33 0 01.1.24v4l1.9 1.36a.31.31 0 01.12.23.35.35 0 01-.07.25l-.51.73a.36.36 0 01-.23.15.3.3 0 01-.25-.06l-2.4-1.75z"/></svg>`;

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
