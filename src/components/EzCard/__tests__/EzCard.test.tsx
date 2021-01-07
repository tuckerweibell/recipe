import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import {renderToStaticMarkup} from 'react-dom/server';
import {EzCard, EzCardSection, EzCardExpandable} from '..';
import regressionTests from './EzCard.test.md';
import markdown from '../EzCard.md';
import {
  EzPage,
  EzPageSection,
  EzLayout,
  EzLink,
  EzButton,
  EzField,
  EzHeading,
  EzTextStyle,
} from '../../index';
import Media from '../../EzField/Media';
import Open from '../../EzField/Open';

const scope = {
  EzButton,
  EzCard,
  EzCardSection,
  EzCardExpandable,
  EzField,
  EzHeading,
  EzLayout,
  EzLink,
  EzPage,
  EzPageSection,
  EzTextStyle,
  Open,
  Media,
  withPrefix() {
    // swap the provided images for placeholder values
    return 'https://via.placeholder.com/800+x+400/00b373/FFFFFF?text=800+x+400';
  },
};

describe('EzCard', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

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
