import React from 'react';
import {cleanup} from '@testing-library/react';
import ScrollLock, {preventScroll} from '../ScrollLock';

import {fullRender} from '../../../jest-globals';

afterEach(cleanup);

describe('EzModal', () => {
  it('sets the html to overflow hidden when open', () => {
    const {baseElement} = fullRender(<ScrollLock />);

    expect(baseElement.parentNode.classList).toContain(preventScroll);
  });

  it('does not set overflow hidden on the html when it is not open', () => {
    const {baseElement, unmount} = fullRender(<ScrollLock />);
    unmount();

    expect(baseElement.parentNode.classList).not.toContain(preventScroll);
  });
});
