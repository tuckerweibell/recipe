import React, {type ChangeEvent, useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {Coffee} from '@ezcater/icons';
import DefaultMeta from './Default.stories';
import EzCheckbox from '../../EzCheckbox';
import EzFormControl from '../../../EzFormControl';
import EzFormControlLabel from '../../../EzFormControlLabel';
import EzFormGroup from '../../../EzFormGroup';
import EzFormLabel from '../../../EzFormLabel';
import EzIcon from '../../../EzIcon';
import EzLayout from '../../../EzLayout';
import {EzFormControlLabelProps} from '../../../EzFormControlLabel/EzFormControlLabel.types';
import {EzFormGroupProps} from '../../../EzFormGroup/EzFormGroup.types';
import {EzIconProps} from '../../../EzIcon/EzIcon.types';

const meta: Meta<typeof EzCheckbox> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCheckbox,
  title: 'Input/EzCheckbox/Regression',
};

export default meta;
type Story = StoryObj<typeof EzCheckbox>;

export const VariantsUnchecked: Story = {
  render: () => (
    <EzLayout>
      <EzCheckbox />
      <EzLayout style={{backgroundColor: '#034a34'}}>
        <EzCheckbox variant="filled" />
      </EzLayout>
      <EzCheckbox variant="filled-inverse" />
    </EzLayout>
  ),
};

export const VariantsChecked: Story = {
  render: () => (
    <EzLayout>
      <EzCheckbox checked />
      <EzLayout style={{backgroundColor: '#034a34'}}>
        <EzCheckbox checked variant="filled" />
      </EzLayout>
      <EzCheckbox checked variant="filled-inverse" />
    </EzLayout>
  ),
};

export const ColorsUnchecked: Story = {
  render: () => (
    <EzLayout layout="stack">
      <EzLayout>
        <EzCheckbox color="primary" />
        <EzCheckbox color="secondary" />
        <EzCheckbox color="error" />
        <EzCheckbox color="warning" />
        <EzCheckbox color="info" />
        <EzCheckbox color="success" />
        <EzCheckbox color="alert" />
        <EzCheckbox color="neutral" />
        <EzCheckbox color="common.red100" />
        <EzCheckbox color="common.black" />
      </EzLayout>

      <EzLayout style={{backgroundColor: '#034a34'}}>
        <EzCheckbox color="primary" variant="filled" />
        <EzCheckbox color="secondary" variant="filled" />
        <EzCheckbox color="error" variant="filled" />
        <EzCheckbox color="warning" variant="filled" />
        <EzCheckbox color="info" variant="filled" />
        <EzCheckbox color="success" variant="filled" />
        <EzCheckbox color="alert" variant="filled" />
        <EzCheckbox color="neutral" variant="filled" />
        <EzCheckbox color="common.red100" variant="filled" />
        <EzCheckbox color="common.black" variant="filled" />
      </EzLayout>

      <EzLayout>
        <EzCheckbox color="primary" variant="filled-inverse" />
        <EzCheckbox color="secondary" variant="filled-inverse" />
        <EzCheckbox color="error" variant="filled-inverse" />
        <EzCheckbox color="warning" variant="filled-inverse" />
        <EzCheckbox color="info" variant="filled-inverse" />
        <EzCheckbox color="success" variant="filled-inverse" />
        <EzCheckbox color="alert" variant="filled-inverse" />
        <EzCheckbox color="neutral" variant="filled-inverse" />
        <EzCheckbox color="common.red100" variant="filled-inverse" />
        <EzCheckbox color="common.black" variant="filled-inverse" />
      </EzLayout>
    </EzLayout>
  ),
};

export const ColorsChecked: Story = {
  render: () => (
    <EzLayout layout="stack">
      <EzLayout>
        <EzCheckbox checked color="primary" />
        <EzCheckbox checked color="secondary" />
        <EzCheckbox checked color="error" />
        <EzCheckbox checked color="warning" />
        <EzCheckbox checked color="info" />
        <EzCheckbox checked color="success" />
        <EzCheckbox checked color="alert" />
        <EzCheckbox checked color="neutral" />
        <EzCheckbox checked color="common.red100" />
        <EzCheckbox checked color="common.black" />
      </EzLayout>

      <EzLayout style={{backgroundColor: '#034a34'}}>
        <EzCheckbox checked color="primary" variant="filled" />
        <EzCheckbox checked color="secondary" variant="filled" />
        <EzCheckbox checked color="error" variant="filled" />
        <EzCheckbox checked color="warning" variant="filled" />
        <EzCheckbox checked color="info" variant="filled" />
        <EzCheckbox checked color="success" variant="filled" />
        <EzCheckbox checked color="alert" variant="filled" />
        <EzCheckbox checked color="neutral" variant="filled" />
        <EzCheckbox checked color="common.red100" variant="filled" />
        <EzCheckbox checked color="common.black" variant="filled" />
      </EzLayout>

      <EzLayout>
        <EzCheckbox checked color="primary" variant="filled-inverse" />
        <EzCheckbox checked color="secondary" variant="filled-inverse" />
        <EzCheckbox checked color="error" variant="filled-inverse" />
        <EzCheckbox checked color="warning" variant="filled-inverse" />
        <EzCheckbox checked color="info" variant="filled-inverse" />
        <EzCheckbox checked color="success" variant="filled-inverse" />
        <EzCheckbox checked color="alert" variant="filled-inverse" />
        <EzCheckbox checked color="neutral" variant="filled-inverse" />
        <EzCheckbox checked color="common.red100" variant="filled-inverse" />
        <EzCheckbox checked color="common.black" variant="filled-inverse" />
      </EzLayout>
    </EzLayout>
  ),
};

export const IndeterminateVariants: Story = {
  render: function IndeterminateVariantsRender() {
    const [checked, setChecked] = useState([true, false]);
    const handleChange1 = event => setChecked([event.target.checked, event.target.checked]);
    const handleChange2 = event => setChecked([event.target.checked, checked[1]]);
    const handleChange3 = event => setChecked([checked[0], event.target.checked]);

    const FormGroup = ({variant}) => (
      <EzLayout layout="stack">
        <EzFormControlLabel
          label="Parent"
          control={
            <EzCheckbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              name="parent"
              onChange={handleChange1}
              variant={variant}
            />
          }
          value="parent"
        />

        <EzLayout layout="stack" style={{marginLeft: '32px'}}>
          <EzFormControlLabel
            label="Child 1"
            control={
              <EzCheckbox
                checked={checked[0]}
                name="child1"
                onChange={handleChange2}
                variant={variant}
              />
            }
            value="child1"
          />

          <EzFormControlLabel
            label="Child 2"
            control={
              <EzCheckbox
                checked={checked[1]}
                name="child2"
                onChange={handleChange3}
                variant={variant}
              />
            }
            value="child2"
          />
        </EzLayout>
      </EzLayout>
    );

    return (
      <EzLayout layout="stack">
        <FormGroup variant="outlined" />

        <EzLayout style={{backgroundColor: '#034a34', color: 'white', padding: '16px'}}>
          <FormGroup variant="filled" />
        </EzLayout>

        <FormGroup variant="filled-inverse" />
      </EzLayout>
    );
  },
};

const GroupColors = (checked: boolean) => (
  <EzLayout>
    <EzFormControl>
      <EzFormLabel id="checkbox-groups-unchecked-colors">Numbers</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-groups-unchecked-colors">
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="primary" />}
          label="one"
          value="one"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="secondary" />}
          label="two"
          value="two"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="error" />}
          label="three"
          value="three"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="warning" />}
          label="four"
          value="four"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="info" />}
          label="five"
          value="five"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="success" />}
          label="six"
          value="six"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="alert" />}
          label="seven"
          value="seven"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="neutral" />}
          label="eight"
          value="eight"
        />
      </EzFormGroup>
    </EzFormControl>

    <EzLayout style={{backgroundColor: '#034a34', color: 'white', padding: '1em'}}>
      <EzFormControl>
        <EzFormLabel id="checkbox-groups-unchecked-colors">Numbers</EzFormLabel>
        <EzFormGroup ariaLabel="checkbox-groups-unchecked-colors">
          <EzFormControlLabel
            control={<EzCheckbox checked={checked} color="primary" variant="filled" />}
            label="one"
            value="one"
          />
          <EzFormControlLabel
            control={<EzCheckbox checked={checked} color="secondary" variant="filled" />}
            label="two"
            value="two"
          />
          <EzFormControlLabel
            control={<EzCheckbox checked={checked} color="error" variant="filled" />}
            label="three"
            value="three"
          />
          <EzFormControlLabel
            control={<EzCheckbox checked={checked} color="warning" variant="filled" />}
            label="four"
            value="four"
          />
          <EzFormControlLabel
            control={<EzCheckbox checked={checked} color="info" variant="filled" />}
            label="five"
            value="five"
          />
          <EzFormControlLabel
            control={<EzCheckbox checked={checked} color="success" variant="filled" />}
            label="six"
            value="six"
          />
          <EzFormControlLabel
            control={<EzCheckbox checked={checked} color="alert" variant="filled" />}
            label="seven"
            value="seven"
          />
          <EzFormControlLabel
            control={<EzCheckbox checked={checked} color="neutral" variant="filled" />}
            label="eight"
            value="eight"
          />
        </EzFormGroup>
      </EzFormControl>
    </EzLayout>

    <EzFormControl>
      <EzFormLabel id="checkbox-groups-unchecked-colors">Numbers</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-groups-unchecked-colors">
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="primary" variant="filled-inverse" />}
          label="one"
          value="one"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="secondary" variant="filled-inverse" />}
          label="two"
          value="two"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="error" variant="filled-inverse" />}
          label="three"
          value="three"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="warning" variant="filled-inverse" />}
          label="four"
          value="four"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="info" variant="filled-inverse" />}
          label="five"
          value="five"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="success" variant="filled-inverse" />}
          label="six"
          value="six"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="alert" variant="filled-inverse" />}
          label="seven"
          value="seven"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked={checked} color="neutral" variant="filled-inverse" />}
          label="eight"
          value="eight"
        />
      </EzFormGroup>
    </EzFormControl>
  </EzLayout>
);

export const GroupsColorsUnchecked: Story = {
  render: () => GroupColors(false),
};

export const GroupsColorsChecked: Story = {
  render: () => GroupColors(true),
};

const GroupCustomColors = (checked: boolean) => (
  <EzLayout layout="equal">
    <style>
      {`
        .EzCheckbox-outlined .EzCheckbox-unchecked,
        .EzCheckbox-outlined .EzCheckbox-checked,
        .EzCheckbox-filled-inverse .EzCheckbox-checked {
          border-color: orange;
        }
        .EzCheckbox-outlined .EzCheckbox-icon svg,
        .EzCheckbox-filled .EzCheckbox-icon svg {
          fill: orange;
        }
        .EzCheckbox-filled-inverse .EzCheckbox-checked {
          background-color: orange;
        }
      `}
    </style>
    <EzLayout>
      <EzCheckbox checked={checked} />
      <EzLayout style={{backgroundColor: '#034a34'}}>
        <EzCheckbox checked={checked} variant="filled" />
      </EzLayout>
      <EzCheckbox checked={checked} variant="filled-inverse" />
    </EzLayout>

    <EzLayout>
      <EzFormControl>
        <EzFormLabel id="checkbox-numbers">Numbers</EzFormLabel>
        <EzFormGroup ariaLabel="checkbox-numbers">
          <EzLayout style={{padding: '10px'}} layout="stack">
            <EzFormControlLabel
              control={<EzCheckbox checked={checked} />}
              label="one"
              value="one"
            />
            <EzFormControlLabel
              control={<EzCheckbox checked={checked} />}
              label="two"
              value="two"
            />
          </EzLayout>

          <EzLayout
            style={{backgroundColor: '#034a34', color: 'white', padding: '10px'}}
            layout="stack"
          >
            <EzFormControlLabel
              control={<EzCheckbox checked={checked} variant="filled" />}
              label="three"
              value="three"
            />
            <EzFormControlLabel
              control={<EzCheckbox checked={checked} variant="filled" />}
              label="four"
              value="four"
            />
          </EzLayout>

          <EzLayout style={{padding: '10px'}} layout="stack">
            <EzFormControlLabel
              control={<EzCheckbox checked={checked} variant="filled-inverse" />}
              label="five"
              value="five"
            />
            <EzFormControlLabel
              control={<EzCheckbox checked={checked} variant="filled-inverse" />}
              label="six"
              value="six"
            />
          </EzLayout>
        </EzFormGroup>
      </EzFormControl>
    </EzLayout>
  </EzLayout>
);

export const GroupCustomColorsUnchecked: Story = {
  render: () => GroupCustomColors(false),
};

export const GroupCustomColorsChecked: Story = {
  render: () => GroupCustomColors(true),
};

const GroupGapsCheckbox = ({checked, value}: {checked: boolean; value: string}) => (
  <EzFormControlLabel checked={checked} control={<EzCheckbox />} label={value} value={value} />
);

type GroupGapsFormGroupProps = {
  checked: boolean;
  title: string;
  gap?: number;
};

const GroupGapsFormGroup = ({checked, title, gap}: GroupGapsFormGroupProps) => (
  <EzLayout>
    <EzFormControl>
      <EzFormLabel id="checkbox-group">{title}</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-group" gap={gap} row>
        <GroupGapsCheckbox checked={checked} value="one" />
        <GroupGapsCheckbox checked={checked} value="two" />
        <GroupGapsCheckbox checked={checked} value="three" />
        <GroupGapsCheckbox checked={checked} value="four" />
      </EzFormGroup>
    </EzFormControl>
  </EzLayout>
);

const GroupGaps = (checked: boolean) => (
  <EzLayout layout="stack">
    <GroupGapsFormGroup checked={checked} title="default gap unchecked" />
    <GroupGapsFormGroup checked={checked} title="gap of 2 unchecked" gap={2} />
    <GroupGapsFormGroup checked={checked} title="gap of 3 unchecked" gap={3} />
    <GroupGapsFormGroup checked={checked} title="gap of 4 unchecked" gap={4} />
  </EzLayout>
);

export const GroupsGapsUnchecked: Story = {
  render: () => GroupGaps(false),
};

export const GroupsGapsChecked: Story = {
  render: () => GroupGaps(true),
};

export const SuperCheckboxVariants: Story = {
  render: function SuperCheckboxVariantsRender() {
    const [state, setState] = useState({
      one: true,
      two: false,
      three: false,
      four: false,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };

    const SuperCheckboxButton = ({value}: EzFormControlLabelProps['value']) => (
      <EzFormControlLabel
        checked={state[value]}
        control={<EzCheckbox name={value} onChange={handleChange} />}
        label={value}
        icon={<EzIcon icon={Coffee} />}
        value={value}
      />
    );

    type SuperCheckboxGroupProps = {
      title: string;
      theme: EzFormGroupProps['theme'];
    };

    const SuperCheckboxGroup = ({title, theme}: SuperCheckboxGroupProps) => (
      <EzLayout>
        <EzFormControl>
          <EzFormLabel id="super-checkbox-button-group">{title}</EzFormLabel>
          <EzFormGroup ariaLabel="super-checkbox-button-group" row theme={theme}>
            <SuperCheckboxButton value="one" />
            <SuperCheckboxButton value="two" />
            <SuperCheckboxButton value="three" />
            <SuperCheckboxButton value="four" />
          </EzFormGroup>
        </EzFormControl>
      </EzLayout>
    );

    return (
      <EzLayout layout="stack">
        <SuperCheckboxGroup title="filled variant" theme={{variant: 'filled'}} />
        <SuperCheckboxGroup title="outlined variant" theme={{variant: 'outlined'}} />
        <SuperCheckboxGroup
          title="theme with color alert and outlined variant"
          theme={{
            color: 'alert',
            variant: 'outlined',
          }}
        />
        <SuperCheckboxGroup
          title="custom theme"
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
        />
      </EzLayout>
    );
  },
};

export const SuperCheckboxIconSizes: Story = {
  render: function SuperCheckboxIconSizesRender() {
    const [state, setState] = useState({
      one: true,
      two: false,
      three: false,
      four: false,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };

    type SuperCheckboxButtonProps = {
      iconSize: EzIconProps['size'];
      label: EzFormControlLabelProps['label'];
      value: EzFormControlLabelProps['value'];
    };

    const SuperCheckboxButton = ({iconSize, label, value}: SuperCheckboxButtonProps) => (
      <EzFormControlLabel
        checked={state[value]}
        control={<EzCheckbox name={value} onChange={handleChange} />}
        label={label}
        icon={<EzIcon icon={Coffee} size={iconSize} />}
        value={value}
      />
    );

    type SuperCheckboxGroupProps = {
      iconSize: EzIconProps['size'];
      label?: EzFormControlLabelProps['label'];
      title: string;
    };

    const SuperCheckboxGroup = ({iconSize, label, title}: SuperCheckboxGroupProps) => (
      <EzLayout>
        <EzFormControl>
          <EzFormLabel id="super-checkbox-button-group">{title}</EzFormLabel>
          <EzFormGroup ariaLabel="super-checkbox-button-group" row>
            <SuperCheckboxButton iconSize={iconSize} label={label} value="one" />
            <SuperCheckboxButton iconSize={iconSize} label={label} value="two" />
            <SuperCheckboxButton iconSize={iconSize} label={label} value="three" />
            <SuperCheckboxButton iconSize={iconSize} label={label} value="four" />
          </EzFormGroup>
        </EzFormControl>
      </EzLayout>
    );

    return (
      <EzLayout layout="stack">
        <SuperCheckboxGroup title="small icon, no label" iconSize="small" />
        <SuperCheckboxGroup title="medium icon, no label" iconSize="medium" />
        <SuperCheckboxGroup title="large icon, no label" iconSize="large" />
        <SuperCheckboxGroup title="xlarge icon, no label" iconSize="xlarge" />
        <SuperCheckboxGroup title="small icon, with label" iconSize="small" label="one" />
        <SuperCheckboxGroup title="medium icon, with label" iconSize="medium" label="one" />
        <SuperCheckboxGroup title="large icon, with label" iconSize="large" label="one" />
        <SuperCheckboxGroup title="xlarge icon, with label" iconSize="xlarge" label="one" />
      </EzLayout>
    );
  },
};

export const SuperCheckboxLabelWidth: Story = {
  render: function SuperCheckboxLabelWidthRender() {
    const [state, setState] = useState({
      one: true,
      two: false,
      three: false,
      four: false,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };

    const SuperCheckboxButton = ({value}: {value: EzFormControlLabelProps['value']}) => (
      <EzFormControlLabel
        checked={state[value]}
        control={<EzCheckbox name={value} onChange={handleChange} />}
        label={value}
        icon={<EzIcon icon={Coffee} />}
        value={value}
      />
    );

    type SuperCheckboxGroupProps = {
      labelWidth?: EzFormGroupProps['labelWidth'];
      title: string;
    };

    const SuperCheckboxGroup = ({labelWidth, title}: SuperCheckboxGroupProps) => (
      <EzLayout>
        <EzFormControl>
          <EzFormLabel id="super-checkbox-button-group">{title}</EzFormLabel>
          <EzFormGroup ariaLabel="super-checkbox-button-group" labelWidth={labelWidth} row>
            <SuperCheckboxButton value="one" />
            <SuperCheckboxButton value="two" />
            <SuperCheckboxButton value="three" />
            <SuperCheckboxButton value="four" />
          </EzFormGroup>
        </EzFormControl>
      </EzLayout>
    );

    return (
      <EzLayout layout="stack">
        <SuperCheckboxGroup title="default labelWidth" />
        <SuperCheckboxGroup title="labelWidth of 100" labelWidth={100} />
        <SuperCheckboxGroup title="labelWidth of 200" labelWidth={200} />
      </EzLayout>
    );
  },
};

export const SuperCheckboxLabels: Story = {
  render: function SuperCheckboxLabelsRender() {
    const [state, setState] = useState({
      one: true,
      two: false,
      three: false,
      four: false,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };

    type SuperCheckboxButtonProps = Pick<EzFormControlLabelProps, 'label' | 'value'>;

    const SuperCheckboxButton = ({label, value}: SuperCheckboxButtonProps) => (
      <EzFormControlLabel
        checked={state[value]}
        control={<EzCheckbox name={value} onChange={handleChange} />}
        label={label}
        icon={<EzIcon icon={Coffee} />}
        value={value}
      />
    );

    type SuperCheckboxGroupProps = {
      label?: EzFormControlLabelProps['label'];
      labelWidth?: EzFormGroupProps['labelWidth'];
      title: string;
    };

    const SuperCheckboxGroup = ({label, labelWidth, title}: SuperCheckboxGroupProps) => (
      <EzLayout>
        <EzFormControl>
          <EzFormLabel id="super-checkbox-button-group">{title}</EzFormLabel>
          <EzFormGroup ariaLabel="super-checkbox-button-group" labelWidth={labelWidth} row>
            <SuperCheckboxButton label={label} value="one" />
            <SuperCheckboxButton label={label} value="two" />
            <SuperCheckboxButton label={label} value="three" />
            <SuperCheckboxButton label={label} value="four" />
          </EzFormGroup>
        </EzFormControl>
      </EzLayout>
    );

    return (
      <EzLayout layout="stack">
        <SuperCheckboxGroup title="no labels" />
        <SuperCheckboxGroup title="short labels" label="one" />
        <SuperCheckboxGroup title="long labels" label="one one one one one one one" />
        <SuperCheckboxGroup
          title="long labels with labelWidth of 100"
          label="one one one one one one one"
          labelWidth={100}
        />
        <SuperCheckboxGroup
          title="long labels with labelWidth of 150"
          label="one one one one one one one"
          labelWidth={150}
        />
        <SuperCheckboxGroup
          title="long labels with labelWidth of 200"
          label="one one one one one one one"
          labelWidth={200}
        />
      </EzLayout>
    );
  },
};
