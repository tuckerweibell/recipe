import React from 'react';
import {visualSnapshots} from 'sosia';
import {render, getByLabelText, fireEvent, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import markdown from './EzField.autosuggest.test.md';
import EzField from '../EzField';
import {EzFormLayout, EzButton, EzLayout} from '../../index';
import Open from '../Open';
import Media from '../Media';

const scope = {EzField, EzButton, EzLayout, EzFormLayout, Open, Media};

describe('EzField', () => {
  visualSnapshots({markdown, scope: {...scope, fireEvent}});

  describe('autosuggest list', () => {
    jest.useFakeTimers();
    const inputLabel = 'Select dropdown';
    const options = [
      {label: 'All Upcoming', value: 'upcoming'},
      {label: 'Today', value: 'today'},
      {label: 'Tomorrow', value: 'tomorrow'},
      {label: 'All Time', value: 'all'},
      {label: 'Yesterday', value: 'yesterday'},
      {label: 'Last 7 Days', value: 'week'},
      {label: 'This Month', value: 'month'},
    ];

    function LiveFilterExample() {
      const [searchTerm, setSearchTerm] = React.useState('');
      const data = options.filter(x => x.value.toLowerCase().includes(searchTerm.toLowerCase()));
      return (
        <EzField
          type="autosuggest"
          label={inputLabel}
          options={data}
          onFilter={setSearchTerm}
          value={null}
        />
      );
    }

    // see: https://www.digitala11y.com/aria-autocomplete-properties/
    it('behaves like aria-autocomplete=list', () => {
      render(<EzField type="autosuggest" label={inputLabel} options={options} value={null} />);

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      expect(input).not.toHaveAttribute('aria-controls');
      expect(input).not.toHaveAttribute('aria-activedescendant');

      // open the menu
      userEvent.click(input);

      // The element has a value specified for aria-controls that refers to the element that contains the collection of suggested values.
      expect(input).toHaveAttribute('aria-controls', screen.getByRole('listbox').id);
      expect(input).toHaveAttribute('aria-activedescendant', screen.queryAllByRole('option')[0].id);

      // Either the element or a containing element with role combobox has a value for aria-haspopup that matches the role of the element that contains the collection of suggested values.
      expect(input).toHaveAttribute('aria-haspopup', 'listbox');
    });

    it('has the browser autocomplete turned off', () => {
      render(<EzField type="autosuggest" label={inputLabel} options={options} value={null} />);

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      // The browser's autocomplete should be turned off so as not to interfere with the component
      expect(input).toHaveAttribute('autocomplete', 'off');
    });

    it('stays closed on focus', () => {
      render(<EzField type="autosuggest" label={inputLabel} options={options} value={null} />);

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      input.focus();

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('opens on click', () => {
      render(<EzField type="autosuggest" label={inputLabel} options={options} value={null} />);

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      userEvent.click(input);

      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('opens on down arrow', () => {
      render(<EzField type="autosuggest" label={inputLabel} options={options} value={null} />);

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      fireEvent.keyDown(input, {key: 'ArrowDown', code: 40, charCode: 40});

      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('opens on text entered', () => {
      render(<EzField type="autosuggest" label={inputLabel} options={options} value={null} />);

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      userEvent.type(input, 'Today');

      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('closes on blur', () => {
      render(
        <>
          <EzField type="autosuggest" label={inputLabel} options={options} value={null} />
          <button type="button">click me</button>
        </>
      );

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      // open the menu
      userEvent.click(input);

      expect(screen.getByRole('listbox')).toBeInTheDocument();

      // cause blur by changing focus away from combobox
      userEvent.click(screen.getByRole('button', {name: /click me/i}));

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('closes on escape', () => {
      render(<EzField type="autosuggest" label={inputLabel} options={options} value={null} />);

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      // open the menu
      userEvent.click(input);

      expect(screen.getByRole('listbox')).toBeInTheDocument();

      fireEvent.keyDown(input, {key: 'Escape'});

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('closes when a value is selected', () => {
      render(<EzField type="autosuggest" label={inputLabel} options={options} value={null} />);

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      // open the menu
      userEvent.click(input);

      expect(screen.getByRole('listbox')).toBeInTheDocument();

      // select the currently focused item
      fireEvent.keyDown(input, {key: 'Enter'});

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('does not commit the focused item when closing', () => {
      const onSelectionChange = jest.fn();

      render(
        <EzField
          type="autosuggest"
          label={inputLabel}
          options={options}
          value={null}
          onSelectionChange={onSelectionChange}
        />
      );

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      // open the menu
      userEvent.click(input);

      expect(screen.getByRole('listbox')).toBeInTheDocument();

      // select the currently focused item
      fireEvent.keyDown(input, {key: 'Escape'});

      expect(onSelectionChange).not.toHaveBeenCalled();
    });

    it('places virtual focus on the first item', () => {
      render(<EzField type="autosuggest" label={inputLabel} options={options} value={null} />);

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      // open the menu
      userEvent.click(input);

      expect(input).toHaveAttribute('aria-activedescendant', screen.queryAllByRole('option')[0].id);
    });

    it('places virtual focus on the selected item', () => {
      render(<EzField type="autosuggest" label={inputLabel} options={options} value="tomorrow" />);

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      // open the menu
      userEvent.click(input);

      expect(input).toHaveAttribute('aria-activedescendant', screen.queryAllByRole('option')[2].id);
    });

    it('allows the user to select an item via Enter', () => {
      const onSelectionChange = jest.fn();

      render(
        <EzField
          type="autosuggest"
          label={inputLabel}
          options={options}
          value={null}
          onSelectionChange={onSelectionChange}
        />
      );

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      // open the menu
      userEvent.click(input);

      // select the currently focused item
      fireEvent.keyDown(input, {key: 'Enter'});

      expect(onSelectionChange).toHaveBeenCalledWith('upcoming');
    });

    it('allows the user to select an item via Mouse', () => {
      const onSelectionChange = jest.fn();

      render(
        <EzField
          type="autosuggest"
          label={inputLabel}
          options={options}
          value={null}
          onSelectionChange={onSelectionChange}
        />
      );

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      // open the menu
      userEvent.click(input);

      userEvent.click(screen.queryAllByRole('option')[0]);

      expect(onSelectionChange).toHaveBeenCalledWith('upcoming');
    });

    it('clears the current selection if the input text is deleted', () => {
      const onSelectionChange = jest.fn();

      render(
        <EzField
          type="autosuggest"
          label={inputLabel}
          options={options}
          value="upcoming"
          onSelectionChange={onSelectionChange}
        />
      );

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      // open the menu
      userEvent.click(input);

      // delete text from current input
      fireEvent.change(input, {target: {value: ''}});

      expect(input).toHaveValue('');
      expect(onSelectionChange).toHaveBeenCalledWith(null);
    });

    it('clears the current input on blur if no value has been selected', () => {
      render(
        <>
          <EzField type="autosuggest" label={inputLabel} options={options} value={null} />
          <button type="button">click me</button>
        </>
      );

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      // open the menu
      userEvent.click(input);

      userEvent.type(input, 'today');

      // cause blur by changing focus away from combobox
      userEvent.click(screen.getByRole('button', {name: /click me/i}));

      expect(input).toHaveValue('');
    });

    it('should trigger blur when no longer focused', () => {
      const onBlur = jest.fn();

      const {container} = render(
        <>
          <EzField
            type="autosuggest"
            label={inputLabel}
            options={options}
            value="upcoming"
            onBlur={onBlur}
          />
          <button type="button">click me</button>
        </>
      );

      const input = getByLabelText(container, inputLabel) as HTMLInputElement;

      // open the menu
      userEvent.click(input);

      expect(onBlur).not.toHaveBeenCalled();

      // cause blur by changing focus away from combobox
      userEvent.click(screen.getByRole('button', {name: /click me/i}));

      expect(onBlur).toHaveBeenCalled();
    });

    it('filters using the onFilter function', () => {
      const onFilter = jest.fn();

      render(
        <EzField
          type="autosuggest"
          label={inputLabel}
          options={options}
          value={null}
          onFilter={onFilter}
        />
      );

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      // open the menu
      userEvent.click(input);

      userEvent.type(input, 'text');

      expect(onFilter).toHaveBeenCalled();
    });

    it('closes the menu if there are no matching items', () => {
      render(<LiveFilterExample />);

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      userEvent.click(input);

      expect(screen.getByRole('listbox')).toBeInTheDocument();

      userEvent.type(input, 'mismatch');

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('keeps the menu open if the user clears the input field', () => {
      render(<LiveFilterExample />);

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      userEvent.click(input);

      expect(screen.getByRole('listbox')).toBeInTheDocument();

      userEvent.type(input, 'mismatch');

      fireEvent.change(input, {target: {value: ''}});

      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('focuses the first item if the previously focused item is filtered out of the list', () => {
      render(<LiveFilterExample />);

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      userEvent.click(input);

      expect(input).toHaveAttribute(
        'aria-activedescendant',
        screen.getByRole('option', {name: /upcoming/i}).id
      );

      userEvent.type(input, 'to');

      expect(input).toHaveAttribute('aria-activedescendant', screen.queryAllByRole('option')[0].id);
    });

    it('should move virtual focus with arrow keys', () => {
      render(<EzField type="autosuggest" label={inputLabel} options={options} value="upcoming" />);

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      const keyDown = key => fireEvent.keyDown(input, {key});

      keyDown('ArrowDown');

      const option1 = screen.getByRole('option', {name: /All Upcoming/i});
      const option2 = screen.getByRole('option', {name: /Today/i});
      const lastOption = screen.getByRole('option', {name: /This Month/i});

      expect(option1).toHaveAttribute('aria-selected', 'true');
      expect(input.getAttribute('aria-activedescendant')).toEqual(option1.id);
      expect(option2).toHaveAttribute('aria-selected', 'false');

      keyDown('ArrowDown');

      expect(option1).toHaveAttribute('aria-selected', 'false');
      expect(input.getAttribute('aria-activedescendant')).toEqual(option2.id);
      expect(option2).toHaveAttribute('aria-selected', 'true');

      keyDown('ArrowUp');

      expect(option1).toHaveAttribute('aria-selected', 'true');
      expect(input.getAttribute('aria-activedescendant')).toEqual(option1.id);
      expect(option2).toHaveAttribute('aria-selected', 'false');

      keyDown('ArrowUp');

      expect(lastOption).toHaveAttribute('aria-selected', 'true');
      expect(input.getAttribute('aria-activedescendant')).toEqual(lastOption.id);
      expect(option1).toHaveAttribute('aria-selected', 'false');

      keyDown('ArrowDown');

      expect(option1).toHaveAttribute('aria-selected', 'true');
      expect(input.getAttribute('aria-activedescendant')).toEqual(option1.id);
      expect(lastOption).toHaveAttribute('aria-selected', 'false');
    });
  });
});
