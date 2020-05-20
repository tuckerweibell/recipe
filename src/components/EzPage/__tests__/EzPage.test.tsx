import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzPage.md';
import regressionTests from './EzPage.test.md';
import {EzPage, EzPageSection} from '..';
import {renderToHtml, fullRender as render} from '../../../jest-globals';
import Media from '../../EzField/Media';
import {EzCard, EzHeading, EzPageHeader, EzLayout, EzButton, EzAppLayout} from '../../index';

const scope = {
  EzPage,
  EzPageSection,
  EzCard,
  EzHeading,
  EzPageHeader,
  EzLayout,
  EzButton,
  EzAppLayout,
  Media,
};

describe('EzPage', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

  it('should retain the same layout on multiple renders', () => {
    const Test = () => (
      <EzPage>
        <EzPageSection use="aside">
          <EzCard title="Card (in aside)">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </EzCard>
        </EzPageSection>
        <EzPageSection use="main">
          <EzCard title="Card (in main)">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </EzCard>
        </EzPageSection>
        <EzPageSection use="aside">
          <EzCard title="Card (in aside)">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </EzCard>
        </EzPageSection>
        <EzPageSection use="main">
          <EzCard title="Card (in main)">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </EzCard>
        </EzPageSection>
      </EzPage>
    );

    const {container, rerender} = render(<Test />);

    const res = container.innerHTML;

    rerender(<Test />);
    rerender(<Test />);

    expect(container.innerHTML).toEqual(res);
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzPage>
        <EzPageSection use="aside">
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </EzPageSection>
        <EzPageSection use="main">
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </EzPageSection>
      </EzPage>
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
