import React from 'react';
import {axe} from 'jest-axe';
import {Link} from 'react-router-dom';
import {visualSnapshots} from 'sosia';
import markdown from '../EzLink.md';
import EzLink from '../EzLink';
import {EzLayout} from '../../index';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzLink, EzLayout, require};

describe('EzLink', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzLink href="/orders">View Orders</EzLink>);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        EzLinkWithReactRouterToOptions: (
          <EzLink
            to={{
              pathname: '/courses',
              search: '?sort=name',
              hash: '#the-hash',
              state: {fromDashboard: true},
            }}
            as={Link}
          />
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
