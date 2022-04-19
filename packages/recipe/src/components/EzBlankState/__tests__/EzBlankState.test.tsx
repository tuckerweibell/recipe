import React from 'react';
import {visualSnapshots} from 'sosia';
import EzBlankState from '../EzBlankState';
import markdown from './EzBlankState.test.md';
import {EzButton, EzCard, EzPage} from '../../index';
import Media from '../../EzField/Media';

const scope = {EzBlankState, EzButton, EzCard, EzPage, Media};

describe('EzBlankState', () => {
  visualSnapshots({markdown, scope});

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
