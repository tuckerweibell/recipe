import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {renderToStaticMarkup} from 'react-dom/server';
import {EzCard, EzCardSection, EzCardExpandable} from '..';
import {renderToHtml} from '../../../jest-globals';
import regressionTests from './EzCard.test.md';
import markdown from '../EzCard.md';
import {EzPage, EzPageSection, EzLayout, EzButton, EzField} from '../../index';
import Media from '../../EzField/Media';
import Open from '../../EzField/Open';

const scope = {
  EzButton,
  EzCard,
  EzCardSection,
  EzCardExpandable,
  EzLayout,
  EzPage,
  EzPageSection,
  EzField,
  Open,
  Media,
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
      renderToHtml(React.createElement(EzCard, {} as any));
    }).not.toThrow();
  });

  it('should NOT throw for simple text content', () => {
    expect(() => {
      renderToHtml(<EzCard>hello</EzCard>);
    }).not.toThrow();
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzCard title="Card Heading">
        <EzCardSection>Lorem ipsum dolor</EzCardSection>
        <EzCardSection>sit amet, consectetur adipiscing</EzCardSection>
      </EzCard>
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });

  describe('data-* props', () => {
    let actual;
    beforeEach(() => {
      actual = renderToHtml(
        <EzCard data-test="my-test-selector">
          <EzCardSection>content</EzCardSection>
        </EzCard>
      );
    });
    it('renders valid props for html elements', () => {
      expect(actual).toContain('data-test="my-test-selector"');
    });
  });
});
