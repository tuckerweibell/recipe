import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzIcon.md';
import {EzPage, EzIcon, EzLayout, EzTextStyle} from '../../index';
import {MOCK_ICON_FA_COFFEE, MOCK_ICON_PIZZA, MOCK_ICON_FRIES, MOCK_ICON_RAMEN} from '../EzIconMocks';

const mockRequire = () => ({
  faCoffee: MOCK_ICON_FA_COFFEE,
  Pizza: MOCK_ICON_PIZZA,
  Fries: MOCK_ICON_FRIES,
  Ramen: MOCK_ICON_RAMEN,
});

const scope = {EzPage, EzIcon, EzLayout, EzTextStyle, require: mockRequire};

const SVG_ICON_BURGER = (
  <svg viewBox="0 0 100 100">
    <path d="M49.716 2.893C24.723 2.893 5.74 14.996 5.74 33.01c0 6.567 5.8 11.23 14.142 11.23h60.242c8.504 0 13.563-4.65 13.563-11.23 0-17.196-19.637-30.116-43.97-30.116zm0 5.25c21.783 0 38.72 11.144 38.72 24.866 0 3.577-2.614 5.98-8.312 5.98H19.882c-5.664 0-8.892-2.595-8.892-5.98 0-14.491 16.272-24.866 38.726-24.866zM80.124 61.97H19.882c-8.27 0-14.142 3.764-14.142 9.482 0 14.882 18.993 24.533 43.976 24.533 24.321 0 43.97-10.3 43.97-24.533 0-5.701-5.158-9.481-13.562-9.481zm0 5.25c5.794 0 8.313 1.846 8.313 4.232 0 10.415-16.917 19.283-38.72 19.283-22.46 0-38.727-8.265-38.727-19.283 0-2.204 3.162-4.231 8.892-4.231h60.242zm-39.16-11.471l-2.101-.95-.187-.08c-1.88-.808-3.19-1.164-4.494-1.164-2.21 0-3.529.405-5.941 1.647l-.713.373c-3.056 1.6-4.973 2.242-7.944 2.242-2.375 0-4.237-.512-6.999-1.683l-2.06-.883c-.92-.383-1.286-.499-1.845-.625-1.535-.348-2.676.01-4.33 1.715a2.625 2.625 0 11-3.77-3.654c2.822-2.91 5.728-3.881 8.956-3.246l.304.065c.988.223 1.504.39 2.921.99l1.469.631c2.4 1.04 3.758 1.44 5.354 1.44 1.754 0 2.903-.328 4.86-1.31l1.005-.52c3.327-1.746 5.39-2.432 8.733-2.432 2.02 0 3.849.462 6.11 1.397l.69.294 1.109.497.613.28.745.335c2.626 1.161 4.173 1.618 6.003 1.657l.263.003c1.947 0 3.512-.443 6.263-1.66l1.698-.769a64.6 64.6 0 01.754-.336l.23-.1c2.485-1.07 4.426-1.598 6.587-1.598 3.197 0 5.222.627 8.304 2.21l.784.409c2.37 1.242 3.569 1.643 5.508 1.643 1.515 0 2.816-.36 5-1.288l2.012-.864c1.205-.505 1.727-.676 2.58-.875l.139-.032c3.356-.763 6.36.174 9.275 3.179a2.625 2.625 0 01-3.768 3.655c-1.59-1.64-2.709-2.035-4.16-1.753l-.362.08c-.555.136-.987.293-2.17.798l-1.106.477c-3.011 1.306-4.941 1.873-7.44 1.873-2.836 0-4.712-.584-7.535-2.03l-.77-.402c-2.64-1.385-3.977-1.83-6.291-1.83-1.228 0-2.46.314-4.164 1.023l-.8.344-1.381.628c-3.868 1.764-6.11 2.468-9.187 2.468-2.96 0-5.148-.651-8.75-2.27z" />
  </svg>
);

describe('EzIcon', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const {container} = render(<EzIcon title="burger icon" icon={SVG_ICON_BURGER} />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        iconProp: <EzIcon icon={SVG_ICON_BURGER} />,
        titleProp: <EzIcon icon={SVG_ICON_BURGER} title="burger icon" />,
        colorProp: <EzIcon icon={SVG_ICON_BURGER} color="green" />,
        sizeProp: <EzIcon icon={SVG_ICON_BURGER} size="large" />,
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
