import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzHeading.md';
import EzHeading from '../EzHeading';
import {EzCard} from '../../index';

const scope = {EzHeading, EzCard, React};

describe('EzHeading', () => {
  visualSnapshots({markdown, scope});

  it('should render with the specified tag', () => {
    const {container} = render(
      <EzHeading as="h1" size="6">
        Heading
      </EzHeading>
    );
    expect(container.querySelectorAll('h1')).toHaveLength(1);
  });

  test.each(['1', '2', '3', '4', '5', '6'])('Shows/Hides subheading for size %i', n => {
    const size = n as '1' | '2' | '3' | '4' | '5' | '6';

    const {container} = render(
      <EzHeading size={size} subheading="Subheading">
        Heading
      </EzHeading>
    );
    const shown = n === '3' || n === '5';

    if (shown) expect(container).toHaveTextContent(/Subheading/);
    else expect(container).not.toHaveTextContent(/Subheading/);
  });

  it('should meet accessibility guidelines', async () => {
    const {container} = render(<EzHeading size="1">Heading</EzHeading>);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
