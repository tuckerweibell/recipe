import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import {EzProgress} from '../../index';

describe('EzProgress logic', () => {
  it('Passing a goal, subgoal, value, and label should show a full circle, a percentage circle matching the value, an aria-label matching the label, and text matching the value percentage', async () => {
    const value = 88;
    const label = `Q1 on-time delivery goal progress - ${value}%`;
    const {findByLabelText, queryAllByLabelText} = render(
      <EzProgress value={value} goal={75} subgoal={25} label={label} />
    );

    expect(queryAllByLabelText(label).length).toEqual(1);
    const chart = findByLabelText(label);

    expect((await chart).firstChild.childNodes[0]).toHaveAttribute('aria-valuenow', '100');
    expect((await chart).firstChild.childNodes[1]).toHaveAttribute(
      'aria-valuenow',
      value.toString()
    );
    expect((await chart).firstChild.childNodes[2]).toHaveTextContent(`${value}%`);
  });

  it('Passing a goal, subgoal, value less than 1, and label should show a full circle, a percentage circle matching the minimum value (1%), an aria-label matching the label, and text matching the value percentage', async () => {
    const value = 1;
    const label = `Q1 on-time delivery goal progress - ${value}%`;
    const {findByLabelText, queryAllByLabelText} = render(
      <EzProgress value={value} goal={75} subgoal={25} label={label} />
    );

    expect(queryAllByLabelText(label).length).toEqual(1);
    const chart = findByLabelText(label);

    expect((await chart).firstChild.childNodes[0]).toHaveAttribute('aria-valuenow', '100');
    expect((await chart).firstChild.childNodes[1]).toHaveAttribute('aria-valuenow', '1');
    expect((await chart).firstChild.childNodes[2]).toHaveTextContent(`${value}%`);
  });

  it('Passing a value, color, and label should show a full circle, a percentage circle matching the value, an aria-label matching the label, and text matching the value percentage', async () => {
    const value = 44;
    const label = `Q1 on-time delivery goal progress - ${value}%`;
    const {findByLabelText, queryAllByLabelText} = render(
      <EzProgress value={value} color="blue" label={label} />
    );

    expect(queryAllByLabelText(label).length).toEqual(1);
    const chart = findByLabelText(label);

    expect((await chart).firstChild.childNodes[0]).toHaveAttribute('aria-valuenow', '100');
    expect((await chart).firstChild.childNodes[1]).toHaveAttribute(
      'aria-valuenow',
      value.toString()
    );
    expect((await chart).firstChild.childNodes[2]).toHaveTextContent(`${value}%`);
  });

  it('Passing a color and label without a value should show a full circle, a 0% circle, an aria-label matching the label, and empty text --%', async () => {
    const label = `Q1 on-time delivery goal progress - empty value`;
    const {findByLabelText, queryAllByLabelText} = render(
      <EzProgress color="blue" label={label} />
    );

    expect(queryAllByLabelText(label).length).toEqual(1);
    const chart = findByLabelText(label);

    expect((await chart).firstChild.childNodes[0]).toHaveAttribute('aria-valuenow', '100');
    expect((await chart).firstChild.childNodes[1]).toHaveAttribute('aria-valuenow', '0');
    expect((await chart).firstChild.childNodes[2]).toHaveTextContent(`--%`);
  });

  it('Passing a label, goal, metricOnly flag, and value should show a square, an aria-label matching the label, and text matching the value percentage', async () => {
    const label = `Q1 cancelled orders - 12% of 10% goal`;
    const {findByLabelText, queryAllByLabelText} = render(
      <EzProgress label={label} value={12} goal={10} metricOnly />
    );

    expect(queryAllByLabelText(label).length).toEqual(1);
    const metric = findByLabelText(label);

    expect((await metric).firstChild.childNodes[0]).toHaveTextContent('12%');
  });

  it('Passing a label, goal, and metricOnly flag without a value should show a square, an aria-label matching the label, and empty text --%', async () => {
    const label = `Q1 cancelled orders - --% of 10% goal`;
    const {findByLabelText, queryAllByLabelText} = render(
      <EzProgress label={label} goal={10} metricOnly />
    );

    expect(queryAllByLabelText(label).length).toEqual(1);
    const metric = findByLabelText(label);

    expect((await metric).firstChild.childNodes[0]).toHaveTextContent('--%');
  });

  it('Passing a label, goal, metricOnly flag, inverted flag, and value should show a square, an aria-label matching the label, and text matching the value percentage', async () => {
    const label = `Q1 cancelled orders - 3% of 0% goal`;
    const {findByLabelText, queryAllByLabelText} = render(
      <EzProgress label={label} value={3} goal={0} metricOnly inverted />
    );

    expect(queryAllByLabelText(label).length).toEqual(1);
    const metric = findByLabelText(label);

    expect((await metric).firstChild.childNodes[0]).toHaveTextContent('3%');
  });

  it('Passing a label, goal, metricOnly flag, and inverted flag without a value should show a square, an aria-label matching the label, and empty text --%', async () => {
    const label = `Q1 cancelled orders - --% of 0% goal`;
    const {findByLabelText, queryAllByLabelText} = render(
      <EzProgress label={label} goal={0} metricOnly inverted />
    );

    expect(queryAllByLabelText(label).length).toEqual(1);
    const metric = findByLabelText(label);

    expect((await metric).firstChild.childNodes[0]).toHaveTextContent('--%');
  });
});

describe('EzProgress', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzProgress value={44} color="blue" label="Q1 on-time delivery goal progress - 44%" />
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        labelProp: <EzProgress color="blue" label="Q1 on-time delivery goal progress - 44%" />,
        valueProp: (
          <EzProgress value={44} color="blue" label="Q1 on-time delivery goal progress - 44%" />
        ),
        goalProp: (
          <EzProgress
            value={44}
            goal={90}
            subgoal={49}
            label="Q1 on-time delivery goal progress - 44%"
          />
        ),
        subgoalProp: (
          <EzProgress
            value={44}
            goal={90}
            subgoal={49}
            label="Q1 on-time delivery goal progress - 44%"
          />
        ),
        colorProp: (
          <EzProgress value={44} color="blue" label="Q1 on-time delivery goal progress - 44%" />
        ),
        metricOnlyProp: (
          <EzProgress
            label="Q1 rejected orders goal - 3% of 10% goal"
            value={3}
            goal={10}
            metricOnly
          />
        ),
        invertedProp: (
          <EzProgress
            label="Q1 rejected orders goal - 3% of 0% goal"
            value={3}
            goal={0}
            metricOnly
            inverted
          />
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
