import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzBanner from '../EzBanner';

describe('EzBanner', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzBanner
        title="More orders, lower commission."
        message="Linking to ezOrdering from your website lets you take catering orders online, without ezCater branding and at a lower cost per order."
        link={{
          label: 'Learn more',
          href: '#',
        }}
        use="marketing"
        onDismiss={() => {}}
      />
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        withLink: (
          <EzBanner
            title="More orders, lower commission."
            message="Linking to ezOrdering from your website lets you take catering orders online, without ezCater branding and at a lower cost per order."
            link={{
              label: 'Learn more',
              href: '#',
            }}
            use="marketing"
            onDismiss={() => {}}
          />
        ),
        withButton: (
          <EzBanner
            title="More orders, lower commission."
            message="Linking to ezOrdering from your website lets you take catering orders online, without ezCater branding and at a lower cost per order."
            link={{
              label: 'Learn more',
              onClick: () => {},
            }}
            use="ezOrdering"
            onDismiss={() => {}}
          />
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
