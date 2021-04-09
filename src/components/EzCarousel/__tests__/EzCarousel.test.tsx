import React, {useEffect} from 'react';
import {screen, fireEvent, render} from '@testing-library/react';
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
      const lastItem = left >= this.scrollWidth - this.offsetWidth;
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

// fake out some DOM sizes, since JSDOM doesn't provide real values
const itemWidth = 2;
const itemsPerPage = 2;

const scope = {
  EzCarousel,
  Placeholder,
  EzLayout,
  EzHeading,
  EzCard,
  EzPage,
  withPrefix() {
    // swap the provided images for placeholder values
    return 'http://via.placeholder.com/800+x+400/00b373/FFFFFF?text=800+x+400';
  },
  useNextPage() {
    useEffect(() => {
      const button = screen.getByLabelText(/next page/i);
      userEvent.click(button);
      // run through the debounce timer
      jest.runAllTimers();
    }, []);
  },
};

describe('EzCarousel', () => {
  jest
    .spyOn(HTMLUListElement.prototype, 'scrollWidth', 'get')
    .mockImplementation(function fakeScrollWidth() {
      return this.children.length * itemWidth;
    });
  jest
    .spyOn(HTMLUListElement.prototype, 'offsetWidth', 'get')
    .mockImplementation(function fakeOffsetWidth() {
      return itemsPerPage * itemWidth;
    });
  const mockItemWidth = jest
    .spyOn(HTMLLIElement.prototype, 'clientWidth', 'get')
    .mockReturnValue(itemWidth);
  const mockAnimationFrame = jest
    .spyOn(window, 'requestAnimationFrame')
    .mockImplementation(callback => callback(0) as any);
  jest.useFakeTimers();
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

  it('tries to remeasure the carousel if the browser has not finished painting carousel items', () => {
    mockItemWidth
      // initially return a zero width for each of the items (i.e the browser hasn't finished painting)
      // and then return the actual size for the subsequent calls
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0)
      .mockReturnValue(itemWidth);

    render(
      <EzCarousel>
        <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
        <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
        <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
      </EzCarousel>
    );

    expect(mockAnimationFrame).toHaveBeenCalled();
  });
});
