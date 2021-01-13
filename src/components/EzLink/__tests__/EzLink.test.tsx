import React from 'react';
import {axe} from 'jest-axe';
import {Link} from 'react-router-dom';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzLink.md';
import EzLink from '../EzLink';
import {EzLayout} from '../../index';

const scope = {EzLink, EzLayout};

describe('EzLink', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzLink>
        <a href="/orders">View Orders</a>
      </EzLink>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        EzLinkWithDeprecatedReactRouterProps: (
          <EzLink
            to={{
              pathname: '/courses',
              search: '?sort=name',
              hash: '#the-hash',
              state: {fromDashboard: true},
            }}
            as={Link}
          >
            View courses
          </EzLink>
        ),
        EzLinkWithDeprecatedAnchorProps: <EzLink href="/orders">View Orders</EzLink>,
      },
      {
        EzLinkWithAnchor: (
          <EzLink href="/orders">
            <a href="/orders">View Orders</a>
          </EzLink>
        ),
      },
      {
        EzLinkWithReactRouter: (
          <EzLink href="/orders">
            <Link to="/orders">View Orders</Link>
          </EzLink>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
