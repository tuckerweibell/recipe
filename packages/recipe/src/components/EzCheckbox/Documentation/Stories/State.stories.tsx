import React, {type ChangeEvent, useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {userEvent, within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';
import {Coffee, WaterGlass, WineGlass} from '@ezcater/icons';
import dedent from 'ts-dedent';
import {EzPage} from '../../../EzPage';
import EzAlert from '../../../EzAlert';
import EzCheckbox from '../../EzCheckbox';
import EzFormControl from '../../../EzFormControl';
import EzFormControlLabel from '../../../EzFormControlLabel';
import EzFormGroup from '../../../EzFormGroup';
import EzFormLabel from '../../../EzFormLabel';
import EzIcon from '../../../EzIcon';
import EzLayout from '../../../EzLayout';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzCheckbox> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCheckbox,
  title: 'Input/EzCheckbox/State',
};

export default meta;
type Story = StoryObj<typeof EzCheckbox>;

const IndeterminateStateJSX = dedent`
  const [checked, setChecked] = React.useState([true, false]);
  const handleChange1 = event => setChecked([event.target.checked, event.target.checked]);
  const handleChange2 = event => setChecked([event.target.checked, checked[1]]);
  const handleChange3 = event => setChecked([checked[0], event.target.checked]);

  return (
    <EzLayout layout="stack">
      <EzFormControlLabel
        label="Parent"
        control={
          <EzCheckbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            name="parent"
            onChange={handleChange1}
          />
        }
        value="parent"
      />

      {/* Note: inline styles are discouraged and used here only for demo purposes */}
      <EzLayout layout="stack" style={{marginLeft: '32px'}}>
        <EzFormControlLabel
          label="Child 1"
          control={<EzCheckbox checked={checked[0]} name="child1" onChange={handleChange2} />}
          value="child1"
        />

        <EzFormControlLabel
          label="Child 2"
          control={<EzCheckbox checked={checked[1]} name="child2" onChange={handleChange3} />}
          value="child2"
        />
      </EzLayout>
    </EzLayout>
  );
`;

export const Indeterminate: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: IndeterminateStateJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${IndeterminateStateJSX}
        })()}
      `,
    },
  },
  render: function IndeterminateStateRender() {
    const [checked, setChecked] = useState([true, false]);
    const handleChange1 = (event: ChangeEvent<HTMLInputElement>) =>
      setChecked([event.target.checked, event.target.checked]);
    const handleChange2 = (event: ChangeEvent<HTMLInputElement>) =>
      setChecked([event.target.checked, checked[1]]);
    const handleChange3 = (event: ChangeEvent<HTMLInputElement>) =>
      setChecked([checked[0], event.target.checked]);

    return (
      <EzLayout layout="stack">
        <EzFormControlLabel
          label="Parent"
          control={
            <EzCheckbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              name="parent"
              onChange={handleChange1}
            />
          }
          value="parent"
        />

        {/* Note: inline styles are discouraged and used here only for demo purposes */}
        <EzLayout layout="stack" style={{marginLeft: '32px'}}>
          <EzFormControlLabel
            label="Child 1"
            control={<EzCheckbox checked={checked[0]} name="child1" onChange={handleChange2} />}
            value="child1"
          />

          <EzFormControlLabel
            label="Child 2"
            control={<EzCheckbox checked={checked[1]} name="child2" onChange={handleChange3} />}
            value="child2"
          />
        </EzLayout>
      </EzLayout>
    );
  },
  play: ({canvasElement}) => {
    const canvas = within(canvasElement);
    const parent = canvas.getAllByRole('checkbox')[0];
    const child1 = canvas.getAllByRole('checkbox')[1];
    const child2 = canvas.getAllByRole('checkbox')[2];

    expect(parent).toHaveAttribute('data-indeterminate', 'true');
    expect(child1).toBeChecked();
    expect(child2).not.toBeChecked();

    userEvent.click(child1);
    expect(parent).toHaveAttribute('data-indeterminate', 'false');
    expect(child1).not.toBeChecked();
    expect(child2).not.toBeChecked();

    userEvent.click(child2);
    expect(parent).toHaveAttribute('data-indeterminate', 'true');
    expect(child1).not.toBeChecked();
    expect(child2).toBeChecked();

    userEvent.click(parent);
    expect(parent).toHaveAttribute('data-indeterminate', 'false');
    expect(child1).toBeChecked();
    expect(child2).toBeChecked();

    userEvent.click(child2);
  },
};

const ErrorStateJSX = dedent`
  const [state, setState] = React.useState({
    coffee: false,
    water: false,
    wine: false,
  });
  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const {coffee, water, wine} = state;
  const error = [coffee, water, wine].filter(v => v).length < 1;

  return (
    <EzPage>
      <EzLayout layout="equal">
        <EzFormControl error={error}>
          <EzFormLabel id="checkbox-buttons-drinks">
            <EzLayout layout="stack">
              Drinks
              {error && <EzAlert headline="Please choose one or more options" use="error" />}
            </EzLayout>
          </EzFormLabel>
          <EzFormGroup ariaLabel="checkbox-buttons-drinks">
            <EzFormControlLabel
              checked={coffee}
              control={<EzCheckbox name="coffee" onChange={handleChange} />}
              label="Coffee"
              helperText="Caffineated"
              value="coffee"
            />
            <EzFormControlLabel
              checked={water}
              control={<EzCheckbox name="water" onChange={handleChange} />}
              label="Water"
              value="water"
            />
            <EzFormControlLabel
              checked={wine}
              control={<EzCheckbox name="wine" onChange={handleChange} />}
              label="Wine"
              value="wine"
            />
          </EzFormGroup>
        </EzFormControl>
      </EzLayout>
    </EzPage>
  );
`;

export const Error: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: ErrorStateJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${ErrorStateJSX}
        })()}
      `,
    },
  },
  render: function ErrorStateRender() {
    const [state, setState] = useState({
      coffee: false,
      water: false,
      wine: false,
    });
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };
    const {coffee, water, wine} = state;
    const error = [coffee, water, wine].filter(v => v).length < 1;

    return (
      <EzPage>
        <EzLayout layout="equal">
          <EzFormControl error={error}>
            <EzFormLabel id="checkbox-buttons-drinks">
              <EzLayout layout="stack">
                Drinks
                {error && <EzAlert headline="Please choose one or more options" use="error" />}
              </EzLayout>
            </EzFormLabel>
            <EzFormGroup ariaLabel="checkbox-buttons-drinks">
              <EzFormControlLabel
                checked={coffee}
                control={<EzCheckbox name="coffee" onChange={handleChange} />}
                label="Coffee"
                helperText="Caffineated"
                value="coffee"
              />
              <EzFormControlLabel
                checked={water}
                control={<EzCheckbox name="water" onChange={handleChange} />}
                label="Water"
                value="water"
              />
              <EzFormControlLabel
                checked={wine}
                control={<EzCheckbox name="wine" onChange={handleChange} />}
                label="Wine"
                value="wine"
              />
            </EzFormGroup>
          </EzFormControl>
        </EzLayout>
      </EzPage>
    );
  },
  play: ({canvasElement}) => {
    const canvas = within(canvasElement);
    const coffee = canvas.getAllByRole('checkbox')[0];
    const water = canvas.getAllByRole('checkbox')[1];
    const wine = canvas.getAllByRole('checkbox')[2];
    const errorAlert = canvas.getAllByRole('alert')[0];

    expect(coffee).not.toBeChecked();
    expect(water).not.toBeChecked();
    expect(wine).not.toBeChecked();
    expect(errorAlert).toBeInTheDocument();

    userEvent.click(coffee);
    expect(coffee).toBeChecked();
    expect(water).not.toBeChecked();
    expect(wine).not.toBeChecked();
    expect(errorAlert).not.toBeInTheDocument();

    userEvent.click(coffee);
  },
};

const DisabledStateJSX = dedent`
  const {Coffee, WaterGlass, WineGlass} = require('@ezcater/icons');
  const [state, setState] = React.useState({
    coffee: true,
    water: false,
    wine: false,
  });

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <EzLayout layout="stack">
      <EzLayout layout="equal">
        <EzLayout layout="stack">
          <EzLayout layout="basic">
            <EzCheckbox disabled name="disabledA" />
            <EzCheckbox defaultChecked disabled name="disabledB" />
            <EzCheckbox defaultChecked name="enabled" />
          </EzLayout>

          {/* Note: inline styles are discouraged and used here only for demo purposes */}
          <EzLayout layout="stack" style={{backgroundColor: '#034a34'}}>
            <EzLayout layout="basic">
              <EzCheckbox disabled name="filledDisabledA" variant="filled" />
              <EzCheckbox defaultChecked disabled name="filledDisabledB" variant="filled" />
              <EzCheckbox defaultChecked name="filledEnabled" variant="filled" />
            </EzLayout>
          </EzLayout>

          <EzLayout layout="basic">
            <EzLayout layout="basic">
              <EzCheckbox disabled name="filledInverseDisabledA" variant="filled-inverse" />
              <EzCheckbox
                defaultChecked
                disabled
                name="filledInverseDisabledB"
                variant="filled-inverse"
              />
              <EzCheckbox defaultChecked name="filledInverseEnabled" variant="filled-inverse" />
            </EzLayout>
          </EzLayout>
        </EzLayout>

        <EzPage>
          <EzFormControl>
            <EzFormLabel id="checkbox-drinks">Drinks</EzFormLabel>
            <EzFormControlLabel
              control={<EzCheckbox name="coffeeDisabled" />}
              disabled
              label="Coffee"
              value="coffee"
            />
            <EzFormControlLabel
              control={<EzCheckbox defaultChecked name="waterDisabled" />}
              disabled
              label="Water"
              value="water"
            />
            <EzFormControlLabel
              control={<EzCheckbox defaultChecked name="wineEnabled" />}
              label="Wine"
              value="wine"
            />
          </EzFormControl>
        </EzPage>
      </EzLayout>

      <EzPage>
        <EzFormControl>
          <EzFormGroup ariaLabel="super-checkbox-buttons" labelWidth={120} row>
            <EzFormControlLabel
              checked={state.coffee}
              control={<EzCheckbox name="coffee" onChange={handleChange} />}
              disabled
              icon={<EzIcon icon={Coffee} size="xlarge" />}
              label="Coffee"
              value="coffee"
            />

            <EzFormControlLabel
              checked={state.water}
              control={<EzCheckbox name="water" onChange={handleChange} />}
              disabled
              icon={<EzIcon icon={WaterGlass} size="xlarge" />}
              label="Water"
              value="water"
            />

            <EzFormControlLabel
              checked={state.wine}
              control={<EzCheckbox name="wine" onChange={handleChange} />}
              icon={<EzIcon icon={WineGlass} size="xlarge" />}
              label="Wine"
              value="wine"
            />
          </EzFormGroup>
        </EzFormControl>
      </EzPage>
    </EzLayout>
  );
`;

export const Disabled: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: DisabledStateJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${DisabledStateJSX}
        })()}
      `,
    },
  },
  render: function DisabledStateRender() {
    const [state, setState] = useState({
      coffee: true,
      water: false,
      wine: false,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };

    return (
      <EzLayout layout="stack">
        <EzLayout layout="equal">
          <EzLayout layout="stack">
            <EzLayout layout="basic">
              <EzCheckbox disabled name="disabledA" />
              <EzCheckbox defaultChecked disabled name="disabledB" />
              <EzCheckbox defaultChecked name="enabled" />
            </EzLayout>

            {/* Note: inline styles are discouraged and used here only for demo purposes */}
            <EzLayout layout="stack" style={{backgroundColor: '#034a34'}}>
              <EzLayout layout="basic">
                <EzCheckbox disabled name="filledDisabledA" variant="filled" />
                <EzCheckbox defaultChecked disabled name="filledDisabledB" variant="filled" />
                <EzCheckbox defaultChecked name="filledEnabled" variant="filled" />
              </EzLayout>
            </EzLayout>

            <EzLayout layout="basic">
              <EzLayout layout="basic">
                <EzCheckbox disabled name="filledInverseDisabledA" variant="filled-inverse" />
                <EzCheckbox
                  defaultChecked
                  disabled
                  name="filledInverseDisabledB"
                  variant="filled-inverse"
                />
                <EzCheckbox defaultChecked name="filledInverseEnabled" variant="filled-inverse" />
              </EzLayout>
            </EzLayout>
          </EzLayout>

          <EzPage>
            <EzFormControl>
              <EzFormLabel id="checkbox-drinks">Drinks</EzFormLabel>
              <EzFormControlLabel
                control={<EzCheckbox name="coffeeDisabled" />}
                disabled
                label="Coffee"
                value="coffee"
              />
              <EzFormControlLabel
                control={<EzCheckbox defaultChecked name="waterDisabled" />}
                disabled
                label="Water"
                value="water"
              />
              <EzFormControlLabel
                control={<EzCheckbox defaultChecked name="wineEnabled" />}
                label="Wine"
                value="wine"
              />
            </EzFormControl>
          </EzPage>
        </EzLayout>

        <EzPage>
          <EzFormControl>
            <EzFormGroup ariaLabel="super-checkbox-buttons" labelWidth={120} row>
              <EzFormControlLabel
                checked={state.coffee}
                control={<EzCheckbox name="coffee" onChange={handleChange} />}
                disabled
                icon={<EzIcon icon={Coffee} size="xlarge" />}
                label="Coffee"
                value="coffee"
              />

              <EzFormControlLabel
                checked={state.water}
                control={<EzCheckbox name="water" onChange={handleChange} />}
                disabled
                icon={<EzIcon icon={WaterGlass} size="xlarge" />}
                label="Water"
                value="water"
              />

              <EzFormControlLabel
                checked={state.wine}
                control={<EzCheckbox name="wine" onChange={handleChange} />}
                icon={<EzIcon icon={WineGlass} size="xlarge" />}
                label="Wine"
                value="wine"
              />
            </EzFormGroup>
          </EzFormControl>
        </EzPage>
      </EzLayout>
    );
  },
};
