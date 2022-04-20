/* istanbul ignore file */
import os from 'os';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {performance} from 'perf_hooks';
import {EzPage, EzCard, EzLink, EzHeader, EzHeading, EzContent} from '../../index';

const withPrefix = () => {
  // swap the provided images for placeholder values
  return `https://dummyimage.com/800x400/00b373/fff`;
};

function median(sequence) {
  sequence.sort(); // note that direction doesn't matter
  return sequence[Math.ceil(sequence.length / 2)];
}

function randomString() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '');
}
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function measureRender(Component) {
  const props = [...Array(10000)].map(() => ({
    title: randomString(),
    subtitle: randomString(),
    image: `/images/${randomString()}.jpg`,
    stars: randomNumber(0, 5),
    reviews: Math.floor(randomNumber(0, 1000)),
  }));

  const numbers = [];
  for (let i = 0; i < props.length; i++) {
    const t0 = performance.now();
    renderToString(<Component {...props[0]} />);
    const t1 = performance.now();
    numbers.push(t1 - t0);
  }
  // eslint-disable-next-line no-console
  console.log(Component.name, 'took', median(numbers).toFixed(4), 'ms');
  // eslint-disable-next-line no-console
  console.log(Component.name, 'CPU usage for 10000 runs', os.loadavg(), '%');
}

const Sample = props => (
  <EzPage>
    <EzCard imageSrc={withPrefix()} imagePosition="left" imageMaxWidth={200} clickable>
      <EzHeader>
        <EzHeading size="3" subheading={props.subtitle}>
          <EzLink href="/orders" use="reset" onClick={() => {}}>
            {props.title}
          </EzLink>
        </EzHeading>
      </EzHeader>
      <EzContent>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 100" height="16" width="80">
            <path
              id="B"
              d="M57 5l12 38 40-.002-32 24 12 38-32-24-32 24 12-38-32-24L45 43 57 5z"
              fill="currentColor"
            />
            <use width="535" height="110" xlinkHref="#B" x="105" />
            <use width="535" height="110" xlinkHref="#B" x="211" />
            <use width="535" height="110" xlinkHref="#B" x="316" />
            <use width="535" height="110" xlinkHref="#B" x="421" />
          </svg>
          {props.stars} ({props.reviews} reviews)
        </p>
      </EzContent>
    </EzCard>
  </EzPage>
);

describe('EzCard', () => {
  it('should run benchmark', () => {
    measureRender(Sample);
  });

  it('should render styles inline', () => {
    const outputHTML = renderToString(
      <Sample
        {...{
          title: randomString(),
          subtitle: randomString(),
          image: `/images/${randomString()}.jpg`,
          stars: randomNumber(0, 5),
          reviews: Math.floor(randomNumber(0, 1000)),
        }}
      />
    );

    expect(outputHTML).toContain('data-snitches-ssr');
  });
});
