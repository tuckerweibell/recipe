import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render, fireEvent} from '@testing-library/react';
import markdown from '../EzSegmentedControl.md';
import EzSegmentedControl from '../EzSegmentedControl';

const scope = {EzSegmentedControl};

describe('EzSegmentedControl', () => {
  visualSnapshots({markdown, scope});

  describe('onChange', () => {
    it('triggers onChange when segment is clicked', () => {
      const onChangeSpy: (value: string) => void = jest.fn();

      const {getByText} = render(
        <EzSegmentedControl
          name="test-segment"
          label="test segment"
          active="firstValue"
          className="test"
          labelPosition="left"
          onChange={onChangeSpy}
          options={[
            {label: 'first', value: 'firstValue'},
            {label: 'second', value: 'secondValue'},
            {label: 'third', value: 'thirdValue'},
          ]}
        />
      );

      fireEvent.click(getByText('third'));

      expect(onChangeSpy).toHaveBeenCalledWith('thirdValue');
    });
  });

  it('should meet accessibility guidelines', async () => {
    const onChangeSpy: (value: string) => void = jest.fn();

    const {container} = render(
      <EzSegmentedControl
        name="test-segment"
        label="accessibility test"
        active="firstValue"
        className="test"
        labelPosition="left"
        onChange={onChangeSpy}
        options={[
          {label: 'first', value: 'firstValue'},
          {label: 'second', value: 'secondValue'},
          {label: 'third', value: 'thirdValue'},
        ]}
      />
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  const active = true;
  const className = 'string';
  const label = <div id="1">Label</div>;
  const labelPosition = 'left';
  const name = 'name';
  const onChange = (value: string) => value;
  const options = [
    {value: '1', label: 'one', disabled: false},
    {value: '2', label: 'two', disabled: true},
  ];

  it('should pass type checking', () => {
    [
      {
        activeProp: (
          <EzSegmentedControl
            active={active}
            label={label}
            labelPosition={labelPosition}
            name={name}
            onChange={onChange}
            options={options}
          />
        ),
        classNameProp: (
          <EzSegmentedControl
            className={className}
            label={label}
            labelPosition={labelPosition}
            name={name}
            onChange={onChange}
            options={options}
          />
        ),
        labelProp: (
          <EzSegmentedControl
            label={label}
            labelPosition={labelPosition}
            name={name}
            onChange={onChange}
            options={options}
          />
        ),
        labelPositionProp: (
          <EzSegmentedControl
            label={label}
            labelPosition={labelPosition}
            name={name}
            onChange={onChange}
            options={options}
          />
        ),
        nameProp: (
          <EzSegmentedControl
            label={label}
            labelPosition={labelPosition}
            name={name}
            onChange={onChange}
            options={options}
          />
        ),
        onChangeProp: (
          <EzSegmentedControl
            label={label}
            labelPosition={labelPosition}
            name={name}
            onChange={onChange}
            options={options}
          />
        ),
        optionsProp: (
          <EzSegmentedControl
            label={label}
            labelPosition={labelPosition}
            name={name}
            onChange={onChange}
            options={options}
          />
        ),
      },
    ].forEach(() => {});
    expect.assertions(0);
  });
});
