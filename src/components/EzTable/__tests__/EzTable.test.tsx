import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import Component from 'react-component-component';
import markdown from '../EzTable.md';
import EzTable from '../EzTable';
import {EzPage, EzCard, EzHeading, EzAlert, EzTextStyle} from '../../index';
import {mount, renderToHtml} from '../../../jest-globals';

const scope = {EzTable, EzPage, EzCard, EzHeading, EzAlert, EzTextStyle, Component};

describe('EzTable', () => {
  visualSnapshots({markdown, scope});

  const columns = [
    {heading: 'Store name', accessor: ({item}) => item.store},
    {heading: 'Total sales', accessor: 'total', numeric: true},
    {heading: 'Average order value', accessor: 'average', numeric: true},
  ];
  const items = [
    {id: '#004', store: '123 Example Store', total: 23267, average: 327.79},
    {id: '#007', store: '45 Meadowview Lane', total: 22788, average: 367.55},
  ];

  describe('bulk-select functionality', () => {
    const findBulkSelectInput = table => table.find(`[aria-label="Select all"]`);
    const findRowSelectInput = table => table.find(`[aria-label="Select row"]`);

    describe('when a bulk-select functionality is requested', () => {
      let table;

      beforeEach(() => {
        table = mount(
          <EzTable
            columns={columns}
            items={items}
            onBulkSelectClick={() => null}
            onRowClick={() => null}
            rowIsSelected={() => false}
          />
        );
      });

      it('renders a bulk-select input in a column header', () => {
        expect(findBulkSelectInput(table)).toHaveLength(1);
      });

      it('renders a row-select input for each row', () => {
        expect(findRowSelectInput(table)).toHaveLength(items.length);
      });

      describe('the bulk-select input', () => {
        it('calls the provided click handler when the input state changes', () => {
          const mockHandler = jest.fn();

          table.setProps({onBulkSelectClick: mockHandler});
          findBulkSelectInput(table).simulate('change');

          expect(mockHandler).toHaveBeenCalledTimes(1);
          expect(mockHandler).toHaveBeenCalledWith(expect.any(Object));
        });

        it('is checked when every row has been selected', () => {
          const itemIds = items.map(({id}) => id);
          const rowIsSelected = item => itemIds.some(id => item.id === id);

          table.setProps({rowIsSelected});

          expect(findBulkSelectInput(table).prop('checked')).toBe(true);
        });

        it('is not checked when only some rows are selected', () => {
          const rowIsSelected = item => item.id === items[0].id;

          table.setProps({rowIsSelected});

          expect(findBulkSelectInput(table).prop('checked')).toBe(false);
        });

        it('is not checked when no rows are selected', () => {
          const rowIsSelected = item => item.id === 'foobarbaz';

          table.setProps({rowIsSelected});

          expect(findBulkSelectInput(table).prop('checked')).toBe(false);
        });
      });

      describe('the row-select input', () => {
        it('calls the provided click handler when clicked', () => {
          const mockHandler = jest.fn();

          table.setProps({onRowClick: mockHandler});

          findRowSelectInput(table)
            .first()
            .simulate('change');

          expect(mockHandler).toHaveBeenCalledTimes(1);
          expect(mockHandler).toHaveBeenCalledWith(expect.any(Object), {item: items[0]});
        });

        it('determines its checked state based on the provided function', () => {
          const rowIsSelected = item => item.id === items[0].id;

          table.setProps({rowIsSelected});

          expect(
            findRowSelectInput(table)
              .at(0)
              .prop('checked')
          ).toBe(true);
          expect(
            findRowSelectInput(table)
              .at(1)
              .prop('checked')
          ).toBe(false);
        });
      });
    });

    describe('when a bulk-select functionality is not requested', () => {
      let table;

      beforeEach(() => {
        table = mount(<EzTable columns={columns} items={items} />);
      });

      it('does not render a bulk-select input in a column header', () => {
        expect(findBulkSelectInput(table)).toHaveLength(0);
      });

      it('does not render a row-select input for each row', () => {
        expect(findRowSelectInput(table)).toHaveLength(0);
      });
    });

    it('should meet accessibility guidelines', async () => {
      const wrapper = renderToHtml(
        <EzTable
          columns={columns}
          items={items}
          onBulkSelectClick={() => null}
          onRowClick={() => null}
          rowIsSelected={() => false}
        />
      );
      const actual = await axe(wrapper);
      expect(actual).toHaveNoViolations();
    });
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzTable columns={columns} items={items} />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
