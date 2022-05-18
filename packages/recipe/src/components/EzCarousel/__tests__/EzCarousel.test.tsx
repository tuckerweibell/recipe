import React, {useEffect} from 'react';
import {screen, fireEvent, render, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {visualSnapshots} from 'sosia';
import regressionTests from './EzCarousel.test.md';
import markdown from '../EzCarousel.md';
import EzCarousel from '../EzCarousel';
import Placeholder from '../../Placeholder';
import {EzCard, EzLayout, EzHeading, EzPage} from '../../index';

if (!('scrollTo' in Element.prototype)) {
  Object.assign(Element.prototype, {
    scrollTo({left}) {
      jest.spyOn(this, 'scrollLeft', 'get').mockReturnValue(left);
      const lastItem = left >= this.scrollWidth - this.offsetWidth;

      // disable scroll-snapping to avoid flakiness
      // caused by the browser *sometimes* scroll-snapping to the last page
      Object.assign(this, {style: 'scroll-snap-type: none;'});

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
            lastItem ? `calc(-100% + var(--sizes-carousel-button-width))` : '-200%'
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
    return 'https://dummyimage.com/800x400/00b373/fff';
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

  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

  beforeEach(() => {
    jest.useFakeTimers();
  });

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

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('calls the onPageChange handlers when interacting with carousel pages', () => {
    jest.spyOn(console, 'log').mockImplementation();

    render(
      <EzCarousel
        slidesPerPage={2}
        // eslint-disable-next-line no-console
        onPageChange={({previous, current}) => console.log(`${previous} to ${current}`)}
      >
        <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
        <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
        <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
        <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 64%)'}} />
      </EzCarousel>
    );

    const nextButton = screen.getByLabelText(/next page/i);
    userEvent.click(nextButton);

    // run through the debounce timer
    act(() => {
      jest.runAllTimers();
    });

    const previousButton = screen.getByLabelText(/previous page/i);
    userEvent.click(previousButton);

    // run through the debounce timer
    act(() => {
      jest.runAllTimers();
    });

    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenCalledTimes(2);
    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenCalledWith('0 to 1');
    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenLastCalledWith('1 to 0');
  });

  it('should pass type checking', () => {
    [
      {
        noProps: (
          <EzCarousel>
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
          </EzCarousel>
        ),
        slidePerPageNumber: (
          <EzCarousel slidesPerPage={3}>
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
          </EzCarousel>
        ),
        slidePerPageResponsive: (
          <EzCarousel slidesPerPage={{base: 2, medium: 4}}>
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
          </EzCarousel>
        ),
        gapAndPeek: (
          <EzCarousel gap peek>
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
          </EzCarousel>
        ),
        pageChangeHandlers: (
          <EzCarousel onPageChange={() => 'changed!'}>
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 64%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 54%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 44%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 34%)'}} />
          </EzCarousel>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
