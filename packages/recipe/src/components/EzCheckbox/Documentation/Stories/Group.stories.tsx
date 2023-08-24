import React, {type ChangeEvent, useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {userEvent, within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';
import {Coffee, WaterGlass, WineGlass} from '@ezcater/icons';
import {capitalize} from '@mui/material';
import dedent from 'ts-dedent';
import {EzPage} from '../../../EzPage';
import EzCheckbox from '../../EzCheckbox';
import EzField from '../../../EzField';
import EzFormControl from '../../../EzFormControl';
import EzFormControlLabel from '../../../EzFormControlLabel';
import EzFormGroup from '../../../EzFormGroup';
import EzFormLabel from '../../../EzFormLabel';
import EzIcon from '../../../EzIcon';
import EzLayout from '../../../EzLayout';
import {EzCheckboxProps} from '../../EzCheckbox.types';
import {EzFormControlProps} from '../../../EzFormControl/EzFormControl.types';
import {EzFormGroupProps} from '../../../EzFormGroup/EzFormGroup.types';
import DefaultMeta, {Default} from './Default.stories';
import getJSXString from '../../../../utils/getJSXString';

const meta: Meta<typeof EzCheckbox> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCheckbox,
  title: 'Input/EzCheckbox/Group',
};

export default meta;
type Story = StoryObj<typeof EzCheckbox>;

type EzCheckboxLabelProps = {
  args?: EzCheckboxProps;
  label: string;
  helperText?: string;
};

const EzCheckboxLabel = ({args, label, helperText}: EzCheckboxLabelProps) => (
  <EzFormControlLabel
    control={<EzCheckbox {...args} name={label} />}
    helperText={helperText || undefined}
    label={capitalize(label)}
    value={label}
  />
);

type EzCheckboxGroupProps = {
  checkboxArgs?: EzCheckboxProps;
  formControlArgs?: Omit<EzFormControlProps, 'children'>;
  formGroupArgs?: Omit<EzFormGroupProps, 'children'>;
};

const EzCheckboxGroup = ({checkboxArgs, formControlArgs, formGroupArgs}: EzCheckboxGroupProps) => (
  <EzFormControl {...formControlArgs}>
    <EzFormLabel id="checkbox-drinks">Drinks</EzFormLabel>
    <EzFormGroup ariaLabel="checkbox-drinks" {...formGroupArgs}>
      <EzCheckboxLabel args={checkboxArgs} label="coffee" helperText="Caffineated" />
      <EzCheckboxLabel args={checkboxArgs} label="water" />
      <EzCheckboxLabel args={checkboxArgs} label="wine" />
    </EzFormGroup>
  </EzFormControl>
);

type CheckboxGroupJSXProps = {
  checkboxArgs?: EzCheckboxProps;
  formControlArgsJSX?: string;
  formGroupArgsJSX?: string;
  formLabelArgsJSX?: string;
};

const CheckboxGroupJSX = ({
  checkboxArgs,
  formControlArgsJSX,
  formGroupArgsJSX,
  formLabelArgsJSX,
}: CheckboxGroupJSXProps) => dedent`
  <EzFormControl${formControlArgsJSX ? ` ${formControlArgsJSX}` : ''}>
    <EzFormLabel id="drinks-checkbox-group"${formLabelArgsJSX ? ` ${formLabelArgsJSX}` : ''}>
      Drinks
    </EzFormLabel>
    <EzFormGroup ariaLabel="drinks-checkbox-group"${formGroupArgsJSX ? ` ${formGroupArgsJSX}` : ''}>
      ${getJSXString(
        EzCheckboxLabel({args: checkboxArgs, label: 'coffee', helperText: 'Caffineated'})
      )}
      ${getJSXString(EzCheckboxLabel({args: checkboxArgs, label: 'water'}))}
      ${getJSXString(EzCheckboxLabel({args: checkboxArgs, label: 'wine'}))}
    </EzFormGroup>
  </EzFormControl>
`;

const checkboxArgs = {
  ...Default.args,
  defaultChecked: true,
};

export const Uncontrolled: Story = {
  args: checkboxArgs,
  parameters: {
    docs: {source: {code: CheckboxGroupJSX({checkboxArgs})}},
    playroom: {code: CheckboxGroupJSX({checkboxArgs})},
  },
  render: args => <EzCheckboxGroup checkboxArgs={args} />,
};

export const UncontrolledRow: Story = {
  args: checkboxArgs,
  parameters: {
    docs: {source: {code: CheckboxGroupJSX({checkboxArgs, formGroupArgsJSX: 'row'})}},
    playroom: {code: CheckboxGroupJSX({checkboxArgs, formGroupArgsJSX: 'row'})},
  },
  render: args => <EzCheckboxGroup checkboxArgs={args} formGroupArgs={{row: true}} />,
};

const ControlledJSX = dedent`
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
    <EzFormControl>
      <EzFormLabel id="checkbox-group-drinks">Drinks</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-group-drinks">
        <EzFormControlLabel
          checked={state.coffee}
          control={<EzCheckbox name="coffee" onChange={handleChange} />}
          label="Coffee"
          helperText="Caffineated"
          value="coffee"
        />
        <EzFormControlLabel
          checked={state.water}
          control={<EzCheckbox name="water" onChange={handleChange} />}
          label="Water"
          value="water"
        />
        <EzFormControlLabel
          checked={state.wine}
          control={<EzCheckbox name="wine" onChange={handleChange} />}
          label="Wine"
          value="wine"
        />
      </EzFormGroup>
    </EzFormControl>
  );
`;

export const Controlled: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: ControlledJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${ControlledJSX}
        })()}
      `,
    },
  },
  render: function ControlledRender() {
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
      <EzFormControl>
        <EzFormLabel id="checkbox-group-drinks">Drinks</EzFormLabel>
        <EzFormGroup ariaLabel="checkbox-group-drinks">
          <EzFormControlLabel
            checked={state.coffee}
            control={<EzCheckbox name="coffee" onChange={handleChange} />}
            label="Coffee"
            helperText="Caffineated"
            value="coffee"
          />
          <EzFormControlLabel
            checked={state.water}
            control={<EzCheckbox name="water" onChange={handleChange} />}
            label="Water"
            value="water"
          />
          <EzFormControlLabel
            checked={state.wine}
            control={<EzCheckbox name="wine" onChange={handleChange} />}
            label="Wine"
            value="wine"
          />
        </EzFormGroup>
      </EzFormControl>
    );
  },
};

const ConditionalJSX = dedent`
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
    <EzFormControl fullWidth>
      <EzFormLabel id="checkbox-group-drinks">Drinks</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-group-drinks">
        <EzFormControlLabel
          checked={state.coffee}
          control={<EzCheckbox name="coffee" onChange={handleChange} />}
          label="Coffee"
          helperText="Caffineated"
          value="coffee"
        />
        {state.coffee && (
          <EzField
            type="textarea"
            placeholder="Coffee details..."
            label="Coffee details"
            labelHidden
          />
        )}
        <EzFormControlLabel
          checked={state.water}
          control={<EzCheckbox name="water" onChange={handleChange} />}
          label="Water"
          value="water"
        />
        {state.water && (
          <EzField
            type="textarea"
            placeholder="Water details..."
            label="Water details"
            labelHidden
          />
        )}
        <EzFormControlLabel
          checked={state.wine}
          control={<EzCheckbox name="wine" onChange={handleChange} />}
          label="Wine"
          value="wine"
        />
        {state.wine && (
          <EzField
            type="textarea"
            placeholder="Wine details..."
            label="Wine details"
            labelHidden
          />
        )}
      </EzFormGroup>
    </EzFormControl>
  );
`;

export const Conditional: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: ConditionalJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${ConditionalJSX}
        })()}
      `,
    },
  },
  render: function ConditionalRender() {
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
      <EzFormControl fullWidth>
        <EzFormLabel id="checkbox-group-drinks">Drinks</EzFormLabel>
        <EzFormGroup ariaLabel="checkbox-group-drinks">
          <EzFormControlLabel
            checked={state.coffee}
            control={<EzCheckbox name="coffee" onChange={handleChange} />}
            label="Coffee"
            helperText="Caffineated"
            value="coffee"
          />
          {state.coffee && (
            <EzField
              type="textarea"
              placeholder="Coffee details..."
              label="Coffee details"
              labelHidden
            />
          )}
          <EzFormControlLabel
            checked={state.water}
            control={<EzCheckbox name="water" onChange={handleChange} />}
            label="Water"
            value="water"
          />
          {state.water && (
            <EzField
              type="textarea"
              placeholder="Water details..."
              label="Water details"
              labelHidden
            />
          )}
          <EzFormControlLabel
            checked={state.wine}
            control={<EzCheckbox name="wine" onChange={handleChange} />}
            label="Wine"
            value="wine"
          />
          {state.wine && (
            <EzField
              type="textarea"
              placeholder="Wine details..."
              label="Wine details"
              labelHidden
            />
          )}
        </EzFormGroup>
      </EzFormControl>
    );
  },
  play: ({canvasElement}) => {
    const canvas = within(canvasElement);
    const coffee = canvas.getAllByRole('checkbox')[0];
    const water = canvas.getAllByRole('checkbox')[1];
    const wine = canvas.getAllByRole('checkbox')[2];

    const getDetails = () => ({
      coffeeDetails: canvas.queryAllByRole('textbox', {name: 'Coffee details'})[0] || null,
      waterDetails: canvas.queryAllByRole('textbox', {name: 'Water details'})[0] || null,
      wineDetails: canvas.queryAllByRole('textbox', {name: 'Wine details'})[0] || null,
    });

    let {coffeeDetails, waterDetails, wineDetails} = getDetails();
    expect(coffee).toBeChecked();
    expect(water).not.toBeChecked();
    expect(wine).not.toBeChecked();
    expect(coffeeDetails).toBeInTheDocument();
    expect(waterDetails).not.toBeInTheDocument();
    expect(wineDetails).not.toBeInTheDocument();

    userEvent.click(water);
    ({coffeeDetails, waterDetails, wineDetails} = getDetails());
    expect(coffee).toBeChecked();
    expect(water).toBeChecked();
    expect(wine).not.toBeChecked();
    expect(coffeeDetails).toBeInTheDocument();
    expect(waterDetails).toBeInTheDocument();
    expect(wineDetails).not.toBeInTheDocument();

    userEvent.click(wine);
    ({coffeeDetails, waterDetails, wineDetails} = getDetails());
    expect(coffee).toBeChecked();
    expect(water).toBeChecked();
    expect(wine).toBeChecked();
    expect(coffeeDetails).toBeInTheDocument();
    expect(waterDetails).toBeInTheDocument();
    expect(wineDetails).toBeInTheDocument();

    userEvent.click(water);
    userEvent.click(wine);
  },
};

const SuperCheckboxButtonsJSX = dedent`
  const [state, setState] = React.useState({
    noLabelCoffee: true,
    noLabelWater: false,
    noLabelWine: false,
    noLabelOutlinedCoffee: true,
    noLabelOutlinedWater: false,
    noLabelOutlinedWine: false,
    labelCoffee: true,
    labelWater: false,
    labelWine: false,
  });

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <EzLayout layout="tile">
      <EzPage>
        <EzFormControl>
          <EzFormGroup ariaLabel="super-checkbox-buttons-no-label" row>
            <EzFormControlLabel
              checked={state.noLabelCoffee}
              control={<EzCheckbox name="noLabelCoffee" onChange={handleChange} />}
              icon={<EzIcon icon={Coffee} size="large" />}
              value="coffee"
            />

            <EzFormControlLabel
              checked={state.noLabelWater}
              control={<EzCheckbox name="noLabelWater" onChange={handleChange} />}
              icon={<EzIcon icon={WaterGlass} size="large" />}
              value="water"
            />

            <EzFormControlLabel
              checked={state.noLabelWine}
              control={<EzCheckbox name="noLabelWine" onChange={handleChange} />}
              icon={<EzIcon icon={WineGlass} size="large" />}
              value="wine"
            />
          </EzFormGroup>
        </EzFormControl>
      </EzPage>

      <EzPage>
        <EzFormControl>
          <EzFormGroup
            ariaLabel="super-checkbox-buttons-no-label-outlined"
            row
            theme={{
              color: 'info',
              variant: 'outlined',
            }}
          >
            <EzFormControlLabel
              checked={state.noLabelOutlinedCoffee}
              control={<EzCheckbox name="noLabelOutlinedCoffee" onChange={handleChange} />}
              icon={<EzIcon icon={Coffee} size="large" />}
              value="coffee"
            />

            <EzFormControlLabel
              checked={state.noLabelOutlinedWater}
              control={<EzCheckbox name="noLabelOutlinedWater" onChange={handleChange} />}
              icon={<EzIcon icon={WaterGlass} size="large" />}
              value="water"
            />

            <EzFormControlLabel
              checked={state.noLabelOutlinedWine}
              control={<EzCheckbox name="noLabelOutlinedWine" onChange={handleChange} />}
              icon={<EzIcon icon={WineGlass} size="large" />}
              value="wine"
            />
          </EzFormGroup>
        </EzFormControl>
      </EzPage>

      {/* Note: inline styles are discouraged and used here only for demo purposes */}
      <EzLayout style={{backgroundColor: '#034A34', padding: '20px'}}>
        <EzFormControl>
          <EzFormGroup
            ariaLabel="super-checkbox-buttons-label"
            labelWidth={120}
            row
            theme={{
              color: {
                selected: {
                  backgroundColor: 'common.yellow90',
                  borderColor: 'common.yellow90',
                  iconColor: 'common.green110',
                  textColor: 'common.green110',
                },
                unselected: {
                  backgroundColor: 'common.green105',
                  borderColor: 'common.green105',
                  iconColor: 'common.white',
                  textColor: 'common.white',
                },
                hover: {
                  backgroundColor: 'common.yellow110',
                  borderColor: 'common.white',
                  iconColor: 'common.black',
                  textColor: 'common.green105',
                },
              },
            }}
          >
            <EzFormControlLabel
              checked={state.labelCoffee}
              control={<EzCheckbox name="labelCoffee" onChange={handleChange} />}
              icon={<EzIcon icon={Coffee} size="xlarge" />}
              label="Coffee"
              value="coffee"
            />

            <EzFormControlLabel
              checked={state.labelWater}
              control={<EzCheckbox name="labelWater" onChange={handleChange} />}
              icon={<EzIcon icon={WaterGlass} size="xlarge" />}
              label="Water"
              value="water"
            />

            <EzFormControlLabel
              checked={state.labelWine}
              control={<EzCheckbox name="labelWine" onChange={handleChange} />}
              icon={<EzIcon icon={WineGlass} size="xlarge" />}
              label="Wine"
              value="wine"
            />
          </EzFormGroup>
        </EzFormControl>
      </EzLayout>
    </EzLayout>
  );
`;

export const SuperCheckboxButtons: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: SuperCheckboxButtonsJSX}},
    playroom: {
      code: dedent`
        {(() => {
          const {Coffee, WaterGlass, WineGlass} = require('@ezcater/icons');

          ${SuperCheckboxButtonsJSX}
        })()}
      `,
    },
  },
  render: function SuperCheckboxButtonsRender() {
    const [state, setState] = useState({
      noLabelCoffee: true,
      noLabelWater: false,
      noLabelWine: false,
      noLabelOutlinedCoffee: true,
      noLabelOutlinedWater: false,
      noLabelOutlinedWine: false,
      labelCoffee: true,
      labelWater: false,
      labelWine: false,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };

    return (
      <EzLayout layout="tile">
        <EzPage>
          <EzFormControl>
            <EzFormGroup ariaLabel="super-checkbox-buttons-no-label" row>
              <EzFormControlLabel
                checked={state.noLabelCoffee}
                control={<EzCheckbox name="noLabelCoffee" onChange={handleChange} />}
                icon={<EzIcon icon={Coffee} size="large" />}
                value="coffee"
              />

              <EzFormControlLabel
                checked={state.noLabelWater}
                control={<EzCheckbox name="noLabelWater" onChange={handleChange} />}
                icon={<EzIcon icon={WaterGlass} size="large" />}
                value="water"
              />

              <EzFormControlLabel
                checked={state.noLabelWine}
                control={<EzCheckbox name="noLabelWine" onChange={handleChange} />}
                icon={<EzIcon icon={WineGlass} size="large" />}
                value="wine"
              />
            </EzFormGroup>
          </EzFormControl>
        </EzPage>

        <EzPage>
          <EzFormControl>
            <EzFormGroup
              ariaLabel="super-checkbox-buttons-no-label-outlined"
              row
              theme={{
                color: 'info',
                variant: 'outlined',
              }}
            >
              <EzFormControlLabel
                checked={state.noLabelOutlinedCoffee}
                control={<EzCheckbox name="noLabelOutlinedCoffee" onChange={handleChange} />}
                icon={<EzIcon icon={Coffee} size="large" />}
                value="coffee"
              />

              <EzFormControlLabel
                checked={state.noLabelOutlinedWater}
                control={<EzCheckbox name="noLabelOutlinedWater" onChange={handleChange} />}
                icon={<EzIcon icon={WaterGlass} size="large" />}
                value="water"
              />

              <EzFormControlLabel
                checked={state.noLabelOutlinedWine}
                control={<EzCheckbox name="noLabelOutlinedWine" onChange={handleChange} />}
                icon={<EzIcon icon={WineGlass} size="large" />}
                value="wine"
              />
            </EzFormGroup>
          </EzFormControl>
        </EzPage>

        {/* Note: inline styles are discouraged and used here only for demo purposes */}
        <EzLayout style={{backgroundColor: '#034A34', padding: '20px'}}>
          <EzFormControl>
            <EzFormGroup
              ariaLabel="super-checkbox-buttons-label"
              labelWidth={120}
              row
              theme={{
                color: {
                  selected: {
                    backgroundColor: 'common.yellow90',
                    borderColor: 'common.yellow90',
                    iconColor: 'common.green110',
                    textColor: 'common.green110',
                  },
                  unselected: {
                    backgroundColor: 'common.green105',
                    borderColor: 'common.green105',
                    iconColor: 'common.white',
                    textColor: 'common.white',
                  },
                  hover: {
                    backgroundColor: 'common.yellow110',
                    borderColor: 'common.white',
                    iconColor: 'common.black',
                    textColor: 'common.green105',
                  },
                },
              }}
            >
              <EzFormControlLabel
                checked={state.labelCoffee}
                control={<EzCheckbox name="labelCoffee" onChange={handleChange} />}
                icon={<EzIcon icon={Coffee} size="xlarge" />}
                label="Coffee"
                value="coffee"
              />

              <EzFormControlLabel
                checked={state.labelWater}
                control={<EzCheckbox name="labelWater" onChange={handleChange} />}
                icon={<EzIcon icon={WaterGlass} size="xlarge" />}
                label="Water"
                value="water"
              />

              <EzFormControlLabel
                checked={state.labelWine}
                control={<EzCheckbox name="labelWine" onChange={handleChange} />}
                icon={<EzIcon icon={WineGlass} size="xlarge" />}
                label="Wine"
                value="wine"
              />
            </EzFormGroup>
          </EzFormControl>
        </EzLayout>
      </EzLayout>
    );
  },
  play: ({canvasElement}) => {
    const canvas = within(canvasElement);
    const coffee = canvas.getAllByRole('checkbox')[0];
    const water = canvas.getAllByRole('checkbox')[1];
    const wine = canvas.getAllByRole('checkbox')[2];

    expect(coffee).toBeChecked();
    expect(water).not.toBeChecked();
    expect(wine).not.toBeChecked();

    userEvent.click(coffee);
    expect(coffee).not.toBeChecked();
    expect(water).not.toBeChecked();
    expect(wine).not.toBeChecked();

    userEvent.click(water);
    expect(coffee).not.toBeChecked();
    expect(water).toBeChecked();
    expect(wine).not.toBeChecked();

    userEvent.click(wine);
    expect(coffee).not.toBeChecked();
    expect(water).toBeChecked();
    expect(wine).toBeChecked();

    userEvent.click(coffee);
    userEvent.click(water);
    userEvent.click(wine);
  },
};
