import React from 'react';
import {EzCard, EzCardSection, EzCardExpandable} from '..';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {renderToStaticMarkup} from 'react-dom/server';
import {renderToHtml} from '../../../jest-globals';
import regressionTests from './EzCard.test.md';
import markdown from '../EzCard.md';
import {EzPage, EzPageSection, EzLayout, EzButton} from '../../index';

const scope = {EzButton, EzCard, EzCardSection, EzCardExpandable, EzLayout, EzPage, EzPageSection};

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
