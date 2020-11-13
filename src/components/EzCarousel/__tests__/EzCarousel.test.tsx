import {useEffect} from 'react';
import {screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {visualSnapshots} from 'sosia';
import regressionTests from './EzCarousel.test.md';
import markdown from '../EzCarousel.md';
import EzCarousel from '../EzCarousel';
import Placeholder from '../../../../doc-site/src/components/Placeholder';
import {EzCard, EzLayout, EzHeading, EzPage} from '../../index';

if (!('scrollTo' in Element.prototype)) {
  Object.assign(Element.prototype, {
    scrollTo({left}) {
      jest.spyOn(this, 'scrollLeft', 'get').mockReturnValue(left);
      const lastItem = left === this.scrollWidth - this.offsetWidth;
      fireEvent.scroll(this);
      // since scroll isn't declarative
      // it won't persist in the visual regression tests.
      // we'll set the position as a style transform
      [...this.children].forEach((child, i) => {
        // we only care about the first and second page (for these tests)
        if (i > 3) return;
        // we also can't use the actual scroll value, since JSDOM
        // can't provide a measurement, so we'll use a fixed offset
        // to shift each li two positions to the left (plus button width to use that space)
        Object.assign(child, {
          style: `transform: translateX(${
            lastItem ? `calc(-100% + var(--recipe-carousel-button-width))` : '-200%'
          })`,
        });
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
    useEffect(() => {
      const list = screen.getByRole('list');
      const listItems = screen.getAllByRole('listitem');
      // fake out some DOM sizes, since JSDOM doesn't provide real values
      jest.spyOn(list, 'scrollWidth', 'get').mockReturnValue(listItems.length * 2);
      jest.spyOn(list, 'offsetWidth', 'get').mockReturnValue(3);
      jest.spyOn(listItems[0], 'clientWidth', 'get').mockReturnValue(2);

      const button = screen.getByRole('button', {name: /next/i});
      userEvent.click(button);
      // run through the debounce timer
      jest.runAllTimers();
    }, []);
  },
};

describe('EzCarousel', () => {
  jest.useFakeTimers();
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});
});
