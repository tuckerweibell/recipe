import React from 'react';
import {axe, render} from '../../../../test-utils';
import {EzRating} from '../../../index';
import {
  MOCK_ICON_FA_FULL_STAR,
  MOCK_ICON_FA_HALF_STAR,
  MOCK_ICON_FA_EMPTY_STAR,
} from '../../EzIcon/EzIconMocks';

const renderComponent = ({
  max = 5,
  value,
  label = `${value} stars`,
  emptyIcon = MOCK_ICON_FA_EMPTY_STAR,
  halfIcon = MOCK_ICON_FA_HALF_STAR,
  fullIcon = MOCK_ICON_FA_FULL_STAR,
}) => {
  return render(
    <EzRating
      max={max}
      value={value}
      label={label}
      emptyIcon={emptyIcon}
      halfIcon={halfIcon}
      fullIcon={fullIcon}
    />
  );
};

describe('EzRating logic', () => {
  it('A value less than 0 shows 0 full icons, 0 half icons, and 5 empty icons', async () => {
    const value = -2; // show 0
    const {queryAllByTestId} = renderComponent({value});

    expect(queryAllByTestId('faFullStarIcon').length).toEqual(0);
    expect(queryAllByTestId('faHalfStarIcon').length).toEqual(0);
    expect(queryAllByTestId('faEmptyStarIcon').length).toEqual(5);
  });

  it('A value of 0.24 shows 0 full icons, 0 half icons, and 5 empty icons', async () => {
    const value = 0.24; // round to 0
    const {queryAllByTestId} = renderComponent({value});

    expect(queryAllByTestId('faFullStarIcon').length).toEqual(0);
    expect(queryAllByTestId('faHalfStarIcon').length).toEqual(0);
    expect(queryAllByTestId('faEmptyStarIcon').length).toEqual(5);
  });

  it('A value of 0.25 shows 0 full icons, 1 half icon, and 4 empty icons', async () => {
    const value = 0.25; // round to 0.5
    const {queryAllByTestId} = renderComponent({value});

    expect(queryAllByTestId('faFullStarIcon').length).toEqual(0);
    expect(queryAllByTestId('faHalfStarIcon').length).toEqual(1);
    expect(queryAllByTestId('faEmptyStarIcon').length).toEqual(4);
  });

  it('A value of 2.24 shows 2 full icons, 0 half icons, and 3 empty icons', async () => {
    const value = 2.24; // round to 2
    const {queryAllByTestId} = renderComponent({value});

    expect(queryAllByTestId('faFullStarIcon').length).toEqual(2);
    expect(queryAllByTestId('faHalfStarIcon').length).toEqual(0);
    expect(queryAllByTestId('faEmptyStarIcon').length).toEqual(3);
  });

  it('A value of 2.25 shows 2 full icons, 1 half icon, and 2 empty icons', async () => {
    const value = 2.25; // round to 2.5
    const {queryAllByTestId} = renderComponent({value});

    expect(queryAllByTestId('faFullStarIcon').length).toEqual(2);
    expect(queryAllByTestId('faHalfStarIcon').length).toEqual(1);
    expect(queryAllByTestId('faEmptyStarIcon').length).toEqual(2);
  });

  it('A value of 2.5 shows 2 full icons, 1 half icon, and 2 empty icons', async () => {
    const value = 2.5; // round to 2.5
    const {queryAllByTestId} = renderComponent({value});

    expect(queryAllByTestId('faFullStarIcon').length).toEqual(2);
    expect(queryAllByTestId('faHalfStarIcon').length).toEqual(1);
    expect(queryAllByTestId('faEmptyStarIcon').length).toEqual(2);
  });

  it('A value of 2.74 shows 2 full icons, 1 half icon, and 2 empty icons', async () => {
    const value = 2.74; // round to 2.5
    const {queryAllByTestId} = renderComponent({value});

    expect(queryAllByTestId('faFullStarIcon').length).toEqual(2);
    expect(queryAllByTestId('faHalfStarIcon').length).toEqual(1);
    expect(queryAllByTestId('faEmptyStarIcon').length).toEqual(2);
  });

  it('A value of 2.75 shows 3 full icons, 0 half icons, and 2 empty icons', async () => {
    const value = 2.75; // round to 3
    const {queryAllByTestId} = renderComponent({value});

    expect(queryAllByTestId('faFullStarIcon').length).toEqual(3);
    expect(queryAllByTestId('faHalfStarIcon').length).toEqual(0);
    expect(queryAllByTestId('faEmptyStarIcon').length).toEqual(2);
  });

  it('A value of 3 shows 3 full icons, 0 half icons, and 2 empty icons', async () => {
    const value = 3; // round to 3
    const {queryAllByTestId} = renderComponent({value});

    expect(queryAllByTestId('faFullStarIcon').length).toEqual(3);
    expect(queryAllByTestId('faHalfStarIcon').length).toEqual(0);
    expect(queryAllByTestId('faEmptyStarIcon').length).toEqual(2);
  });

  it('A value of 3.0 shows 3 full icons, 0 half icons, and 2 empty icons', async () => {
    const value = 3.0; // round to 3
    const {queryAllByTestId} = renderComponent({value});

    expect(queryAllByTestId('faFullStarIcon').length).toEqual(3);
    expect(queryAllByTestId('faHalfStarIcon').length).toEqual(0);
    expect(queryAllByTestId('faEmptyStarIcon').length).toEqual(2);
  });

  it('A value of 4.75 shows 5 full icons, 0 half icons, and 0 empty icons', async () => {
    const value = 4.75; // round to 5
    const {queryAllByTestId} = renderComponent({value});

    expect(queryAllByTestId('faFullStarIcon').length).toEqual(5);
    expect(queryAllByTestId('faHalfStarIcon').length).toEqual(0);
    expect(queryAllByTestId('faEmptyStarIcon').length).toEqual(0);
  });

  it('A value of 5 shows 5 full icons, 0 half icons, and 0 empty icons', async () => {
    const value = 5; // round to 5
    const {queryAllByTestId} = renderComponent({value});

    expect(queryAllByTestId('faFullStarIcon').length).toEqual(5);
    expect(queryAllByTestId('faHalfStarIcon').length).toEqual(0);
    expect(queryAllByTestId('faEmptyStarIcon').length).toEqual(0);
  });

  it('A value of 5.0 shows 5 full icons, 0 half icons, and 0 empty icons', async () => {
    const value = 5.0; // round to 5
    const {queryAllByTestId} = renderComponent({value});

    expect(queryAllByTestId('faFullStarIcon').length).toEqual(5);
    expect(queryAllByTestId('faHalfStarIcon').length).toEqual(0);
    expect(queryAllByTestId('faEmptyStarIcon').length).toEqual(0);
  });

  it('A value of 6 with a max of 5 shows 5 full icons, 0 half icons, and 0 empty icons', async () => {
    const value = 6; // show 5
    const {queryAllByTestId} = renderComponent({value});

    expect(queryAllByTestId('faFullStarIcon').length).toEqual(5);
    expect(queryAllByTestId('faHalfStarIcon').length).toEqual(0);
    expect(queryAllByTestId('faEmptyStarIcon').length).toEqual(0);
  });
});

describe('EzRating', () => {
  it('should meet accessibility guidelines', async () => {
    const value = 2.4;
    const {container} = renderComponent({value});

    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        maxProp: (
          <EzRating
            max={5}
            value={2.7}
            label="Star rating"
            emptyIcon={MOCK_ICON_FA_EMPTY_STAR}
            halfIcon={MOCK_ICON_FA_HALF_STAR}
            fullIcon={MOCK_ICON_FA_FULL_STAR}
          />
        ),
        valueProp: (
          <EzRating
            max={5}
            value={2.7}
            label="Star rating"
            emptyIcon={MOCK_ICON_FA_EMPTY_STAR}
            halfIcon={MOCK_ICON_FA_HALF_STAR}
            fullIcon={MOCK_ICON_FA_FULL_STAR}
          />
        ),
        labelProp: (
          <EzRating
            max={5}
            value={2.7}
            label="Star rating"
            emptyIcon={MOCK_ICON_FA_EMPTY_STAR}
            halfIcon={MOCK_ICON_FA_HALF_STAR}
            fullIcon={MOCK_ICON_FA_FULL_STAR}
          />
        ),
        emptyIconProp: (
          <EzRating
            max={5}
            value={2.7}
            label="Star rating"
            emptyIcon={MOCK_ICON_FA_EMPTY_STAR}
            halfIcon={MOCK_ICON_FA_HALF_STAR}
            fullIcon={MOCK_ICON_FA_FULL_STAR}
          />
        ),
        halfIconProp: (
          <EzRating
            max={5}
            value={2.7}
            label="Star rating"
            emptyIcon={MOCK_ICON_FA_EMPTY_STAR}
            halfIcon={MOCK_ICON_FA_HALF_STAR}
            fullIcon={MOCK_ICON_FA_FULL_STAR}
          />
        ),
        fullIconProp: (
          <EzRating
            max={5}
            value={2.7}
            label="Star rating"
            emptyIcon={MOCK_ICON_FA_EMPTY_STAR}
            halfIcon={MOCK_ICON_FA_HALF_STAR}
            fullIcon={MOCK_ICON_FA_FULL_STAR}
          />
        ),
        colorProp: (
          <EzRating
            max={5}
            value={2.7}
            label="Star rating"
            emptyIcon={MOCK_ICON_FA_EMPTY_STAR}
            halfIcon={MOCK_ICON_FA_HALF_STAR}
            fullIcon={MOCK_ICON_FA_FULL_STAR}
            color="common.green"
          />
        ),
        sizeProp: (
          <EzRating
            max={5}
            value={2.7}
            label="Star rating"
            emptyIcon={MOCK_ICON_FA_EMPTY_STAR}
            halfIcon={MOCK_ICON_FA_HALF_STAR}
            fullIcon={MOCK_ICON_FA_FULL_STAR}
            size="large"
          />
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
