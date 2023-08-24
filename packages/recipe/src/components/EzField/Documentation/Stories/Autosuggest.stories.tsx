import React, {useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzField from '../../EzField';
import {Props as EzFieldProps} from '../../EzField.types';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzField> = {
  argTypes: DefaultMeta.argTypes,
  component: EzField,
  title: 'Input/EzField/Autosuggest',
};

export default meta;
type Story = StoryObj<typeof EzField>;

const AutosuggestJSX = dedent`
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  
  const data = [
    'Albany, New York',
    'Atlanta, Georgia',
    'Augusta, Maine',
    'Austin, Texas',
    'Boise, Idaho',
    'Boston, Massachusetts',
    'Concord, New Hampshire',
    'Denver, Colorado',
    'Dover, Delaware',
    'Hartford, Connecticut',
    'Honolulu, Hawaii',
    'Lansing, Michigan',
    'Montgomery, Alabama',
    'Olympia, Washington',
    'Phoenix, Arizona',
    'Providence, Rhode Island',
    'Sacramento, California',
    'Santa Fe, New Mexico',
    'Tallahassee, Florida',
    'Trenton, New Jersey',
  ];

  const cities = data.filter(city => city.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <EzField
      label="City"
      onFilter={setSearchTerm}
      onSelectionChange={setSelectedOption}
      options={cities.map(value => ({label: value, value}))}
      placeholder="Select a city..."
      type="autosuggest"
      value={selectedOption}
    />
  );
`;

export const Autosuggest: Story = {
  args: {
    ...Default.args,
    label: 'City',
    placeholder: 'Select a city...',
    value: undefined,
  },
  parameters: {
    docs: {source: {code: AutosuggestJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${AutosuggestJSX}
        })()}
      `,
    },
  },
  render: function AutosuggestRender(args: EzFieldProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    const data = [
      'Albany, New York',
      'Atlanta, Georgia',
      'Augusta, Maine',
      'Austin, Texas',
      'Boise, Idaho',
      'Boston, Massachusetts',
      'Concord, New Hampshire',
      'Denver, Colorado',
      'Dover, Delaware',
      'Hartford, Connecticut',
      'Honolulu, Hawaii',
      'Lansing, Michigan',
      'Montgomery, Alabama',
      'Olympia, Washington',
      'Phoenix, Arizona',
      'Providence, Rhode Island',
      'Sacramento, California',
      'Santa Fe, New Mexico',
      'Tallahassee, Florida',
      'Trenton, New Jersey',
    ];

    const cities = data.filter(city => city.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
      <EzField
        {...args}
        onFilter={setSearchTerm}
        onSelectionChange={setSelectedOption}
        options={cities.map(value => ({label: value, value}))}
        type="autosuggest"
        value={selectedOption}
      />
    );
  },
};
