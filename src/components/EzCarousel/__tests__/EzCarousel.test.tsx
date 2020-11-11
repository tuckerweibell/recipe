import {useLayoutEffect} from 'react';
import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {visualSnapshots} from 'sosia';
import regressionTests from './EzCarousel.test.md';
import markdown from '../EzCarousel.md';
import EzCarousel from '../EzCarousel';
import Placeholder from '../../../../doc-site/src/components/Placeholder';
import {EzCard, EzLayout, EzHeading, EzPage} from '../../index';

if (!('scrollTo' in Element.prototype)) {
  Object.assign(Element.prototype, {
    scrollTo() {
      // since scroll isn't declarative
      // it won't persist in the visual regression tests.
      // we'll set the position as a style transform
      [...this.children].forEach(child => {
        // we also can't use the actual scroll value, since JSDOM
        // can't provide a measurement, so we'll use a fixed offset
        // to shift each li two positions to the left
        Object.assign(child, {style: `transform: translateX(-200%)`});
      });
    },
  });
}

const scope = {
  EzCarousel,
  Placeholder,
  EzLayout,
  EzHeading,
  EzCard,
  EzPage,
  withPrefix() {
    // swap the provided images for placeholder values
    return 'https://via.placeholder.com/800+x+400/00b373/FFFFFF?text=800+x+400';
  },
  useNextPage() {
    useLayoutEffect(() => {
      const button = screen.getByRole('button', {name: /next/i});
      userEvent.click(button);
    }, []);
  },
};

describe('EzCarousel', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});
});
