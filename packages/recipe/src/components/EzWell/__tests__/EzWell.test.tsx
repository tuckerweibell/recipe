import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzWell from '../EzWell';
import EzLink from '../../EzLink';

describe('EzWell', () => {
  it('supports aria-label with a role', () => {
    const {getByText} = render(
      <EzWell role="region" aria-label="well">
        Well
      </EzWell>
    );
    const well = getByText('Well');
    expect(well).toHaveAttribute('role', 'region');
    expect(well).toHaveAttribute('aria-label', 'well');
  });

  it('warns user if label is provided without a role', () => {
    const spyWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    render(<EzWell aria-label="well">Well</EzWell>);
    expect(spyWarn).toHaveBeenCalledWith('A labelled Well must have a role.');
  });

  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzWell role="figure" aria-labelledby="caption">
        <blockquote>
          <p>
            We must not allow the clock and the calendar to blind us to the fact that each moment of
            life is a miracle and mystery.
          </p>
        </blockquote>
        <p id="caption">
          <cite>
            <EzLink>
              <a href="https://www.amazon.com/H-G-Wells-calendar-miracle-mystery/dp/1785435574">
                In The Fourth Year
              </a>
            </EzLink>
          </cite>
          {' - '}
          by H.G. Wells
        </p>
      </EzWell>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
