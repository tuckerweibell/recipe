import React from 'react';
import {render, screen} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzSuperRadioButtons from '../EzSuperRadioButtons';

describe('EzSuperRadioButtons', () => {
  it('triggers onChange when segment is clicked', () => {
    const onChangeSpy: (value: string) => void = jest.fn();

    render(
      <EzSuperRadioButtons
        label="Delivery issues"
        options={[
          {
            label: 'first',
            value: 'firstValue',
            imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
          },
          {
            label: 'second',
            value: 'secondValue',
            imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
          },
          {
            label: 'third',
            value: 'thirdValue',
            imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
          },
        ]}
        value="cant-deliver"
        onChange={onChangeSpy}
      />
    );

    screen.getByLabelText(/third/).click();

    expect(onChangeSpy).toHaveBeenCalledWith('thirdValue');
  });

  it('should meet accessibility guidelines', async () => {
    const onChangeSpy: (value: string) => void = jest.fn();

    const {container} = render(
      <EzSuperRadioButtons
        label="Delivery issues"
        options={[
          {
            label: 'first',
            value: 'firstValue',
            imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
          },
          {
            label: 'second',
            value: 'secondValue',
            imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
          },
          {
            label: 'third',
            value: 'thirdValue',
            imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
          },
        ]}
        value="cant-deliver"
        onChange={onChangeSpy}
      />
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
