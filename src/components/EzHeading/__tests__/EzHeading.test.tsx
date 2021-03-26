import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render, screen} from '@testing-library/react';
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

  it('should forward id, data-*, className and refs', () => {
    const ref = React.createRef<HTMLElement>();
    render(
      <EzHeading as="h1" size="6" data-testid="bar" ref={ref} className="custom-class-name">
        Heading
      </EzHeading>
    );

    expect(ref.current.className).toMatch(/custom-class-name/);
    expect(screen.getByTestId('bar')).toBeInTheDocument();
  });

  it('should pass type checking', () => {
    [
      {
        sizes: (
          <React.Fragment>
            <EzHeading size="1">Page titles</EzHeading>
            <EzHeading size="2">On-page headings</EzHeading>
            <EzHeading size="3">Container headings</EzHeading>
            <EzHeading size="4">Navigation / tabs</EzHeading>
            <EzHeading size="5">Labels</EzHeading>
            <EzHeading size="6">Small stuff</EzHeading>
          </React.Fragment>
        ),
        subheading: (
          <EzHeading size="3" subheading="I'm a subheading">
            Container headings
          </EzHeading>
        ),
        alignProp: (
          <EzHeading size="3" align="center">
            Online ordering boosts sales through your site. ezOrdering boosts it further.
          </EzHeading>
        ),
        element: (
          <EzHeading size="3" as="h1">
            Container headings
          </EzHeading>
        ),
        domProps: (
          <EzHeading
            // required props
            size="1"
            // can pass arbitrary data-* attributes
            data-custom-tag="foo-bar"
            // can pass boolean data-* attributes
            data-bool
            // can pass aria-* attributes
            aria-describedby="#description"
            // can pass html attributes
            hidden
            // can forward ref
            ref={React.createRef()}
          >
            Small Text
          </EzHeading>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
