import React from 'react';
import EzBlankState from '../EzBlankState';
import {EzButton} from '../../index';

describe('EzBlankState', () => {
  it('should pass type checking', () => {
    [
      {
        imageSrcProp: <EzBlankState imageSrc="imageUrl" title="title" message="message" />,
        titleProp: <EzBlankState title="title" message="message" />,
        messageProp: <EzBlankState title="title" message="message" />,
        actionProp: (
          <EzBlankState
            title="title"
            message="message"
            action={
              <EzButton use="primary" onClick={() => 'clicked!'}>
                click!
              </EzButton>
            }
          />
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
