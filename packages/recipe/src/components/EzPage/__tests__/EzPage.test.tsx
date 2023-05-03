import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzPage from '../EzPage';
import EzPageSection from '../EzPageSection';

describe('EzPage', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzPage>
        <EzPageSection use="aside">
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </EzPageSection>
        <EzPageSection use="main">
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </EzPageSection>
      </EzPage>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        childrenProp: (
          <EzPage>
            <div>recipe!</div>
          </EzPage>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
