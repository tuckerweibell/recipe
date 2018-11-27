import React from 'react';
import {css} from 'react-emotion';

export const preventScroll = css`
  overflow: hidden;
`;

const disableScroll = () => document && document.querySelector('html').classList.add(preventScroll);
const enableScroll = () =>
  document && document.querySelector('html').classList.remove(preventScroll);

export default class ScrollLock extends React.Component {
  componentDidMount() {
    disableScroll();
  }

  componentWillUnmount() {
    enableScroll();
  }

  render() {
    return null;
  }
}
