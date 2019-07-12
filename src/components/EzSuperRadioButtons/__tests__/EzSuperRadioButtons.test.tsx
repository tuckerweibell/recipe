import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from './EzSuperRadioButtons.test.md';
import EzSuperRadioButtons from '../EzSuperRadioButtons';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzSuperRadioButtons};

describe('EzSuperRadioButtons', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const onChangeSpy: (value: string) => void = jest.fn();

    const wrapper = renderToHtml(
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
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
