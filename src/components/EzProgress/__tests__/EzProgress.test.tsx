import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzProgress.md';
import {EzProgress, EzPage, EzCard} from '../../index';

const scope = {EzProgress, EzPage, EzCard};

describe('EzIcon logic', () => {
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
});

describe('EzIcon', () => {
  visualSnapshots({markdown, scope});

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
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
