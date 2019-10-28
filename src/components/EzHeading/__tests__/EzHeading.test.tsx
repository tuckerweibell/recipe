import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzHeading.md';
import EzHeading from '../EzHeading';
import {EzCard} from '../../index';
import {create, fullRender, renderToHtml} from '../../../jest-globals';

const scope = {EzHeading, EzCard, React};

describe('EzHeading', () => {
  visualSnapshots({markdown, scope});

  it('should render with the specified tag', () => {
    const actual = create(
      <EzHeading as="h1" size="6">
        Heading
      </EzHeading>
    );
    expect(actual.toJSON().type).toEqual('h1');
  });

  test.each(['1', '2', '3', '4', '5', '6'])('Shows/Hides subheading for size %i', n => {
    const size = n as '1' | '2' | '3' | '4' | '5' | '6';

    const {container} = fullRender(
      <EzHeading size={size} subheading="Subheading">
        Heading
      </EzHeading>
    );
    const shown = n === '3' || n === '5' ? 1 : 0;
    expect(container.querySelectorAll('div')).toHaveLength(shown);
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzHeading size="1">Heading</EzHeading>);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
