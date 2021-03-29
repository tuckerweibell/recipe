import React from 'react';
import {axe} from 'jest-axe';
import {render} from '@testing-library/react';
import {visualSnapshots} from 'sosia';
import markdown from '../EzPage.md';
import regressionTests from './EzPage.test.md';
import {EzPage, EzPageSection} from '..';
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

  it('should meet accessibility guidelines', async () => {
    const {container} = render(
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
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        childrenProp: (
          <EzPage>
            <div>recipe!</div>
          </EzPage>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
