import React from 'react';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import markdown from '../EzLayout.md';
import regressionTests from './EzLayout.test.md';
import alignmentTests from './EzLayout.alignment.test.md';
import EzLayout from '../EzLayout';
import {EzCard, EzCardSection, EzHeading, EzField, EzPage, EzSearchInput} from '../../index';
import Media from '../../EzField/Media';
import Placeholder from '../../Placeholder';
import {Global, css} from '../../../styles';

const scope = {
  EzPage,
  EzLayout,
  EzCard,
  EzCardSection,
  EzHeading,
  Media,
  css,
  Global,
  Placeholder,
  EzField,
  EzSearchInput,
};

describe('EzLayout', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: alignmentTests, scope});
  visualSnapshots({markdown: regressionTests, scope});

  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzLayout layout="basic">
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </EzLayout>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        defaultLayout: (
          <EzLayout>
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        basicLayout: (
          <EzLayout layout="basic">
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        tileLayout: (
          <EzLayout layout="tile" columns={3}>
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        tileLayoutResponsiveColumns: (
          <EzLayout layout="tile" columns={{base: 1, medium: 3}}>
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        basicResponsiveLayout: (
          <EzLayout layout={{base: 'basic', medium: 'stack'}}>
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        tileResponsiveLayout: (
          <EzLayout layout={{base: 'basic', medium: 'tile'}} columns={3}>
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        layoutAlignX: (
          <EzLayout layout="cluster" alignX="left">
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        layoutAlignY: (
          <EzLayout layout="cluster" alignY="top">
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        responsiveLayoutAlignX: (
          <EzLayout layout={{base: 'basic', medium: 'cluster'}} alignX="left">
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        responsiveLayoutAlignY: (
          <EzLayout layout={{base: 'basic', medium: 'cluster'}} alignY="top">
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        responsiveAlignX: (
          <EzLayout layout="cluster" alignX={{base: 'left', medium: 'center'}}>
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        responsiveLayoutResponsiveAlignX: (
          <EzLayout
            layout={{base: 'basic', medium: 'cluster'}}
            alignX={{base: 'left', medium: 'center'}}
          >
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
