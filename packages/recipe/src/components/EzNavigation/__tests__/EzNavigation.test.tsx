import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import userEvent from '@testing-library/user-event';
import {axe} from '../../../../test-utils';
import EzIcon from '../../EzIcon';
import EzLogo from '../../EzLogo';
import EzNavigation from '../EzNavigation';

// switch out large breakpoint value in order to test mobile vs desktop layout
jest.mock('../../theme.config', () => {
  const {default: stitches, mergeCss} = jest.requireActual('../../theme.config');
  let currentValue = stitches.config.media.large;
  Object.defineProperty(stitches.config.media, 'large', {
    get: () => currentValue,
    set: value => {
      currentValue = value;
    },
  });
  // for the duration of the test, mock the property to return 800px (i.e. lower than the visual regression screen size)
  jest.spyOn(stitches.config.media, 'large', 'get').mockReturnValue('(min-width: 800px)');
  return {
    __esModule: true,
    default: stitches,
    mergeCss,
  };
});

describe('EzNavigation', () => {
  it('should open the user menu when clicked', () => {
    const {getByText, queryByText, queryByLabelText} = render(
      <EzNavigation
        home={{
          href: '#',
          label: 'Homepage',
          logo: {component: <EzLogo />},
        }}
        links={[
          {href: '#', label: 'Orders', notifications: 15},
          {href: '#', label: 'Customers'},
          {href: '#', label: 'Reports'},
        ]}
        userMenu={{
          links: [
            {href: '#', label: 'Settings'},
            {href: '#', label: 'Sign out'},
          ],
          name: 'Stefania Mallett',
        }}
      />
    );

    const hamburger = queryByLabelText('Menu');

    fireEvent.click(hamburger);

    expect(queryByText('Settings')).not.toBeInTheDocument();

    fireEvent.click(getByText('Stefania Mallett'));

    expect(queryByText('Settings')).toBeVisible();
  });

  it('should display utility links with icons', async () => {
    const LINK_LABEL = 'More Info';
    const LINK_ICON_TITLE = 'More info icon';
    const {getByText} = render(
      <EzNavigation
        home={{href: '#', label: 'Homepage'}}
        links={[
          {href: '#', label: 'Components'},
          {
            label: 'Styles',
            links: [
              {href: '#', label: 'Colors'},
              {href: '#', label: 'Spacing'},
              {href: '#', label: 'Typography'},
            ],
          },
          {href: '#', label: 'Cookbook'},
        ]}
        utilityLinks={[
          {href: '/chat', onClick: e => e.preventDefault(), label: 'Chat'},
          {href: '/support', onClick: e => e.preventDefault(), label: '24/7 Support'},
          {
            href: '/info',
            onClick: e => e.preventDefault(),
            label: LINK_LABEL,
            icon: <EzIcon icon={faCircleInfo} title={LINK_ICON_TITLE} size="inherit" />,
          },
        ]}
      />
    );

    expect(getByText(LINK_ICON_TITLE)).toBeInTheDocument();
  });

  it('should display custom user menu icon', async () => {
    const USER_MENU_ICON_TITLE = 'More info icon';
    const {getByText} = render(
      <EzNavigation
        home={{href: '/', label: 'Homepage', logo: {component: <EzLogo />}}}
        links={[
          {href: '#', onClick: e => e.preventDefault(), label: 'Orders'},
          {href: '#', onClick: e => e.preventDefault(), label: 'Customers'},
          {href: '#', onClick: e => e.preventDefault(), label: 'Reports'},
        ]}
        userMenu={{
          links: [
            {href: '#', onClick: e => e.preventDefault(), label: 'Settings'},
            {href: '#', onClick: e => e.preventDefault(), label: 'Sign out'},
          ],
          name: 'Stefania Mallett',
          icon: <EzIcon icon={faCircleInfo} title={USER_MENU_ICON_TITLE} size="inherit" />,
        }}
      />
    );

    expect(getByText(USER_MENU_ICON_TITLE)).toBeInTheDocument();
  });

  it('should expand grouped navigation links when clicked', async () => {
    const user = userEvent.setup();
    render(
      <EzNavigation
        home={{href: '#', label: 'Homepage'}}
        links={[
          {href: '#', label: 'Components'},
          {
            label: 'Styles',
            links: [
              {href: '#', label: 'Colors'},
              {href: '#', label: 'Spacing'},
              {href: '#', label: 'Typography'},
            ],
          },
          {href: '#', label: 'Cookbook'},
        ]}
      />
    );

    await user.click(screen.queryByLabelText('Menu'));

    expect(screen.queryByText('Colors').closest('div').className).toEqual(
      expect.stringContaining('isOpen-false')
    );

    await user.click(screen.getByRole('button', {name: /Styles/i}));

    expect(screen.queryByText('Colors').closest('div').className).toEqual(
      expect.stringContaining('isOpen-true')
    );
  });

  it('should toggle grouped navigation links on Enter or Space', async () => {
    const user = userEvent.setup();
    render(
      <EzNavigation
        home={{href: '#', label: 'Homepage'}}
        links={[
          {href: '#', label: 'Components'},
          {
            label: 'Styles',
            links: [
              {href: '#', label: 'Colors'},
              {href: '#', label: 'Spacing'},
              {to: '#', label: 'Typography', as: ({to, children}) => <a href={to}>{children}</a>},
            ],
          },
          {href: '#', label: 'Cookbook'},
        ]}
      />
    );

    await user.click(screen.queryByLabelText('Menu'));

    expect(screen.queryByText('Colors').closest('div').className).toEqual(
      expect.stringContaining('isOpen-false')
    );

    fireEvent.keyDown(screen.getByRole('button', {name: /Styles/i}), {key: 'Enter'});

    expect(screen.queryByText('Colors').closest('div').className).toEqual(
      expect.stringContaining('isOpen-true')
    );

    fireEvent.keyDown(screen.getByRole('button', {name: /Styles/i}), {key: 'Enter'});

    expect(screen.queryByText('Colors').closest('div').className).toEqual(
      expect.stringContaining('isOpen-false')
    );

    fireEvent.keyDown(screen.getByRole('button', {name: /Styles/i}), {key: ' '});

    expect(screen.queryByText('Colors').closest('div').className).toEqual(
      expect.stringContaining('isOpen-true')
    );

    fireEvent.keyDown(screen.getByRole('button', {name: /Styles/i}), {key: ' '});

    expect(screen.queryByText('Colors').closest('div').className).toEqual(
      expect.stringContaining('isOpen-false')
    );

    // ignores other keys
    fireEvent.keyDown(screen.getByRole('button', {name: /Styles/i}), {key: 'Escape'});

    expect(screen.queryByText('Colors').closest('div').className).toEqual(
      expect.stringContaining('isOpen-false')
    );
  });

  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzNavigation
        home={{
          href: '#',
          label: 'Homepage',
          logo: {component: <EzLogo />},
        }}
        links={[
          {href: '#', label: 'Orders'},
          {href: '#', label: 'Customers'},
          {href: '#', label: 'Reports'},
        ]}
      />
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
