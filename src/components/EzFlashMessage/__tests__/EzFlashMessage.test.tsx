import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzFlashMessage.md';
import EzFlashMessage from '../EzFlashMessage';
import {EzPage} from '../../EzPage';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzFlashMessage, EzPage};

describe('EzFlashMessage', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzFlashMessage use="error" headline="Oh Crumbs!">
        <p>
          Looks like we’re having trouble loading this store’s data. Try reloading the page or
          contact our support team if this persists. I’m adding more copy to make sure this wraps to
          a second line for testing purposes.
        </p>
      </EzFlashMessage>
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
