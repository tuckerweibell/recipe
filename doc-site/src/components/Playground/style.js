import styled, {injectGlobal} from 'react-emotion';
import {rem, darken} from 'polished';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';
import reactLiveStyles from 'react-live/src/constants/css';

injectGlobal(reactLiveStyles);

const foreground = '#f8f8f2';
const red = '#ff5555';
const lightGrey = darken(0.05, '#282a36');

export const StyledProvider = styled(LiveProvider)`
  border-radius: ${rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: ${rem(100)};
`;

export const LiveWrapper = styled.div`
  display: ${props => !props.wide && 'flex'};
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  > * {
    flex-basis: 50%;
    width: ${props => !props.wide && '50%'};
    max-width: ${props => !props.wide && '50%'};

    @media (max-width: 600px) {
      flex-basis: auto;
      width: 100%;
      max-width: 100%;
    }
  }
`;

export const StyledEditor = styled(LiveEditor)`
  background: ${lightGrey};
  font-family: 'Source Code Pro', monospace;
  font-size: ${rem(14)};
  height: ${rem(350)};
  overflow: scroll;
`;

export const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: ${({wide}) => (wide ? 0 : '1rem')};
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
`;

export const StyledError = styled(LiveError)`
  display: block;
  padding: ${rem(8)};
  background: ${red};
  color: ${foreground};
`;

export const Actions = styled.div`
  background: #f4f6f8;
  border-radius: ${rem(3)};
  display: flex;
  padding: 0.5em;
  justify-content: space-between;
`;
