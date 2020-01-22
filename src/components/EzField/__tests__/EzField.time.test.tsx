import React from 'react';
import {getByLabelText, fireEvent, getAllByRole} from '@testing-library/react';
import EzField from '../EzField';
import {fullRender as render} from '../../../jest-globals';

describe('EzField', () => {
  const label = 'Select time';

  it('should generate the correct time range options', () => {
    const {container} = render(
      <EzField type="time" label={label} start="9:00 am" end="5:00 pm" step={60} />
    );

    typeArrowDownToOpenSelectList(container);

    const options = getAllByRole(container, 'option');

    expectHourlyOptionsFrom9to5(options);
  });

  it('start and end time props can omit space between the time and the meridiem', () => {
    const {container} = render(
      <EzField type="time" label={label} start="9:00am" end="5:00pm" step={60} />
    );

    typeArrowDownToOpenSelectList(container);

    const options = getAllByRole(container, 'option');

    expectHourlyOptionsFrom9to5(options);
  });

  it('start and end time props are case insensitive', () => {
    const {container} = render(
      <EzField type="time" label={label} start="9:00AM" end="5:00PM" step={60} />
    );

    typeArrowDownToOpenSelectList(container);

    const options = getAllByRole(container, 'option');

    expectHourlyOptionsFrom9to5(options);
  });

  const typeArrowDownToOpenSelectList = container => {
    const input = getByLabelText(container, label) as HTMLInputElement;

    const keyDown = key => fireEvent.keyDown(input, {key});

    // open the menu
    keyDown('ArrowDown');
  };

  const expectHourlyOptionsFrom9to5 = options => {
    expect(options[0]).toHaveTextContent('9:00 AM');
    expect(options[1]).toHaveTextContent('10:00 AM');
    expect(options[2]).toHaveTextContent('11:00 AM');
    expect(options[3]).toHaveTextContent('12:00 PM');
    expect(options[4]).toHaveTextContent('1:00 PM');
    expect(options[5]).toHaveTextContent('2:00 PM');
    expect(options[6]).toHaveTextContent('3:00 PM');
    expect(options[7]).toHaveTextContent('4:00 PM');
    expect(options[8]).toHaveTextContent('5:00 PM');
  };
});
