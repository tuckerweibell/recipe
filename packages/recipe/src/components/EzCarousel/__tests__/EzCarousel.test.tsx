import React from 'react';
import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EzCarousel from '../EzCarousel';
import EzLink from '../../EzLink/EzLink';
import Placeholder from '../../Placeholder';

describe('EzCarousel', () => {
  it('calls the onPageChange handler when interacting with carousel pages', async () => {
    jest.spyOn(console, 'log').mockImplementation();

    const user = userEvent.setup();

    render(
      <EzCarousel
        title="Carousel"
        description="carousel"
        onPageChange={(previous, current) => console.log(`${previous} to ${current}`)}
      >
        <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
        <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
        <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
        <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 64%)'}} />
      </EzCarousel>
    );

    const nextButton = screen.getByLabelText(/next page/i);
    await user.click(nextButton);

    const previousButton = screen.getByLabelText(/previous page/i);
    await user.click(previousButton);

    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenCalledWith('1 to 2');
    expect(console.log).toHaveBeenLastCalledWith('2 to 1');
  });

  it('should pass type checking', () => {
    [
      {
        defaultProps: (
          <EzCarousel title="Carousel" description="carousel">
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
          </EzCarousel>
        ),
        linkProps: (
          <EzCarousel
            title="Carousel"
            description="carousel"
            link={
              <EzLink>
                <a href="https://ezcater.com">View All</a>
              </EzLink>
            }
          >
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
            <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
          </EzCarousel>
        ),
        pageChangeHandlers: (
          <EzCarousel
            title="Carousel"
            description="carousel"
            onPageChange={(previous, next) => console.log('changed!', previous, next)}
          >
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
