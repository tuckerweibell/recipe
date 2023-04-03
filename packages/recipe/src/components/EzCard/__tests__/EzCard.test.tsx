import React from 'react';
import {render} from '@testing-library/react';
import {renderToStaticMarkup} from 'react-dom/server';
import {faCoffee} from '@fortawesome/free-solid-svg-icons/faCoffee';
import {axe} from '../../../../test-utils';
import {EzCard, EzCardSection} from '..';
import EzIcon from '../../EzIcon/EzIcon';

describe('EzCard', () => {
  it('should NOT throw if no ThemeProvider is configured', () => {
    const actual = renderToStaticMarkup(
      <EzCard>
        <p>Lorem ipsum dolor</p>
      </EzCard>
    );
    expect(actual).toContain('Lorem ipsum dolor');
  });

  // Blowing up when empty breaks the live-reload dev experience
  it('should NOT throw if empty', () => {
    expect(() => {
      render(React.createElement(EzCard, {} as any));
    }).not.toThrow();
  });

  it('should NOT throw for simple text content', () => {
    expect(() => {
      render(<EzCard>hello</EzCard>);
    }).not.toThrow();
  });

  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzCard title="Card Heading">
        <EzCardSection>Lorem ipsum dolor</EzCardSection>
        <EzCardSection>sit amet, consectetur adipiscing</EzCardSection>
      </EzCard>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        defaultLayout: <EzCard>hello</EzCard>,
        responsiveImagePosition: (
          <EzCard
            title="Card with image on right"
            imageSrc="https://dummyimage.com/800x400/00b373/fff"
            imagePosition={{base: 'right', medium: 'top'}}
            imageMaxHeight={192}
            transparent
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus
              purus, in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
            </p>
          </EzCard>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });

  it('should show title icon', async () => {
    const TEST_ID = 'title-icon';
    const titleIcon = (
      <EzIcon color="primary" size="inherit" icon={faCoffee} data-testid={TEST_ID} />
    );
    const {getByTestId} = render(
      <EzCard title="Test Title" subtitle="Test Subtitle" titleIcon={titleIcon}>
        <p>card content</p>
      </EzCard>
    );
    expect(getByTestId(TEST_ID)).toBeInTheDocument();
  });

  describe('data-* props', () => {
    it('renders valid props for html elements', () => {
      const {container} = render(
        <EzCard data-test="my-test-selector">
          <EzCardSection>content</EzCardSection>
        </EzCard>
      );
      expect(container.outerHTML).toContain('data-test="my-test-selector"');
    });
  });
});
