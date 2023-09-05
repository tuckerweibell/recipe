/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzButton from '../../../EzButton';
import {EzCard} from '../../../EzCard';
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

const AutosuggestSearchJSX = dedent`
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
      label="Search"
      onFilter={setSearchTerm}
      onSelectionChange={setSelectedOption}
      options={cities.map(value => ({label: value, value}))}
      placeholder="Search a city..."
      type="autosuggest-search"
      value={selectedOption}
    />
  );
`;

export const AutosuggestSearch: Story = {
  args: {
    ...Default.args,
    label: 'Search',
    placeholder: 'Search a city...',
    value: undefined,
  },
  parameters: {
    docs: {source: {code: AutosuggestSearchJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${AutosuggestSearchJSX}
        })()}
      `,
    },
  },
  render: function AutosuggestSearchRender(args: EzFieldProps) {
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
        type="autosuggest-search"
        value={selectedOption}
      />
    );
  },
};

const AutosuggestAsyncSearchJSX = dedent`
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const data = [
    {group: 'Order #', name: 'N83-HCU'},
    {group: 'Orderer', name: 'James T. Kirk'},
    {group: 'Orderer', name: 'Nyota Uhura'},
    {group: 'Caterer', name: "Ana's Bakery"},
    {group: 'Caterer', name: "Brandon's Cafe"},
    {group: 'Caterer', name: 'Tacos Mexico'},
    {group: 'Caterer', name: 'Brit Bakery'},
    {group: 'Caterer', name: 'Corner Bakery'},
    {group: 'Caterer', name: 'Bagels & More'},
    {group: 'Caterer', name: 'Italian To Go'},
    {group: 'Caterer', name: 'Goblin City Bakery'},
    {group: 'Caterer', name: 'Retro Bakery'},
  ];

  // your loading status/options should take the place of these hooks
  // this is purely to show a loading state example using EzField autosuggest search
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (searchTerm === '') {
      setOptions(opts => (opts.length === 0 ? opts : []));
      setLoading(false);
      return undefined;
    }

    if (selectedOption === searchTerm) return undefined;

    setLoading(true);

    const timerId = setTimeout(() => {
      const filteredData = data.filter(dataItem =>
        dataItem.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setOptions(
        filteredData.length === 0
          ? [{label: 'No results', value: 'No results', disabled: true}]
          : filteredData.map(dataItem => ({
              label: dataItem.name,
              value: dataItem.name,
              group: dataItem.group,
            }))
      );
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timerId);
  }, [searchTerm]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedOption('');
    setOptions([]);
  };

  return (
    <EzCard>
      <EzField
        label="Search"
        loading={loading}
        onFilter={setSearchTerm}
        onSelectionChange={setSelectedOption}
        options={loading ? [] : options}
        placeholder="Search by order #, orderer, or caterer"
        type="autosuggest-search"
        value={selectedOption}
      />
      <EzButton color="destructive" onClick={handleClearFilters} size="small">
        Clear
      </EzButton>
    </EzCard>
  );
`;

export const AutosuggestAsyncSearch: Story = {
  args: {
    ...Default.args,
    onChange: undefined,
  },
  parameters: {
    docs: {source: {code: AutosuggestAsyncSearchJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${AutosuggestAsyncSearchJSX}
        })()}
      `,
    },
  },
  render: function AutosuggestAsyncSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const data = [
      {group: 'Order #', name: 'N83-HCU'},
      {group: 'Orderer', name: 'James T. Kirk'},
      {group: 'Orderer', name: 'Nyota Uhura'},
      {group: 'Caterer', name: "Ana's Bakery"},
      {group: 'Caterer', name: "Brandon's Cafe"},
      {group: 'Caterer', name: 'Tacos Mexico'},
      {group: 'Caterer', name: 'Brit Bakery'},
      {group: 'Caterer', name: 'Corner Bakery'},
      {group: 'Caterer', name: 'Bagels & More'},
      {group: 'Caterer', name: 'Italian To Go'},
      {group: 'Caterer', name: 'Goblin City Bakery'},
      {group: 'Caterer', name: 'Retro Bakery'},
    ];

    // your loading status/options should take the place of these hooks
    // this is purely to show a loading state example using EzField autosuggest search
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState([]);

    useEffect(() => {
      if (searchTerm === '') {
        setOptions(opts => (opts.length === 0 ? opts : []));
        setLoading(false);
        return undefined;
      }

      if (selectedOption === searchTerm) return undefined;

      setLoading(true);

      const timerId = setTimeout(() => {
        const filteredData = data.filter(dataItem =>
          dataItem.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setOptions(
          filteredData.length === 0
            ? [{label: 'No results', value: 'No results', disabled: true}]
            : filteredData.map(dataItem => ({
                label: dataItem.name,
                value: dataItem.name,
                group: dataItem.group,
              }))
        );
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timerId);
    }, [searchTerm]);

    const handleClearFilters = () => {
      setSearchTerm('');
      setSelectedOption('');
      setOptions([]);
    };

    return (
      <EzCard>
        <EzField
          label="Search"
          loading={loading}
          onFilter={setSearchTerm}
          onSelectionChange={setSelectedOption as any}
          options={loading ? [] : options}
          placeholder="Search by order #, orderer, or caterer"
          type="autosuggest-search"
          value={selectedOption}
        />
        <EzButton color="destructive" onClick={handleClearFilters} size="small">
          Clear
        </EzButton>
      </EzCard>
    );
  },
};
