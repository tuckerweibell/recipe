import {keyframes} from 'react-emotion';

export default () => keyframes`
  from {
    transform: translate3d(0, 100%, 0);
  }

  to {
    transform: none;
  }
`;
