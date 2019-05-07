import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import Component from 'react-component-component';
import {fireEvent, cleanup} from 'react-testing-library';
import regressionTests from './EzTable.test.md';
import markdown from '../EzTable.md';
import EzTable from '../EzTable';
import {EzButton, EzPage, EzCard, EzHeading, EzAlert, EzTextStyle} from '../../index';
import {fullRender, renderToHtml} from '../../../jest-globals';

const scope = {EzButton, EzTable, EzPage, EzCard, EzHeading, EzAlert, EzTextStyle, Component};

describe('EzTable', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});
  afterEach(cleanup);

  const columns = [
    {heading: 'Store name', accessor: ({item}) => item.store},
    {heading: 'Total sales', accessor: 'total', numeric: true},
    {heading: 'Average order value', accessor: 'average', numeric: true},
  ];
  const items = [
    {id: '#004', store: '123 Example Store', total: 23267, average: 327.79},
    {id: '#007', store: '45 Meadowview Lane', total: 22788, average: 367.55},
  ];

  describe('column sorting', () => {
    describe('when the user requests a column to be sorted', () => {
      const onSortClick = jest.fn();
      const sortableColumns = [
        {heading: 'Store name', accessor: 'name', sortable: true},
        {heading: 'Total sales', accessor: 'total', sortable: true},
      ];
      const props = {columns: sortableColumns, items, onSortClick};
      const mockEvent = expect.any(Object);

      beforeEach(() => {
        onSortClick.mockClear();
      });

      it('notifies the client that sort is requested', () => {
        const {getByText} = fullRender(<EzTable {...props} />);

        fireEvent.click(getByText(sortableColumns[0].heading));

        expect(onSortClick).toHaveBeenCalledTimes(1);
        expect(onSortClick).toHaveBeenCalledWith(
          mockEvent,
          expect.objectContaining({
            column: sortableColumns[0],
            direction: 'asc',
          })
        );
      });

      it('does NOT notify the client of a sort when a column is not sortable', () => {
        const {getByText} = fullRender(
          <EzTable
            {...props}
            columns={[
              {heading: 'Store name', accessor: 'name', sortable: false},
              {heading: 'Total sales', accessor: 'total', sortable: true},
            ]}
          />
        );

        fireEvent.click(getByText(sortableColumns[0].heading));

        expect(onSortClick).not.toHaveBeenCalled();
      });

      it('can sort a single column in both ascending and descending order', () => {
        const {getByText} = fullRender(<EzTable {...props} />);

        fireEvent.click(getByText(sortableColumns[1].heading));

        expect(onSortClick).toHaveBeenCalledWith(
          mockEvent,
          expect.objectContaining({
            column: sortableColumns[1],
            direction: 'asc',
          })
        );

        fireEvent.click(getByText(sortableColumns[1].heading));

        expect(onSortClick).toHaveBeenCalledWith(
          mockEvent,
          expect.objectContaining({
            column: sortableColumns[1],
            direction: 'desc',
          })
        );
      });

      it('should not change the sort order if the provided onSortClick callback prevents default', () => {
        const {getByText} = fullRender(<EzTable {...props} />);

        onSortClick.mockImplementation(event => event.preventDefault());

        fireEvent.click(getByText(sortableColumns[1].heading));

        expect(onSortClick).toHaveBeenCalledWith(
          mockEvent,
          expect.objectContaining({
            column: sortableColumns[1],
            direction: 'asc',
          })
        );

        fireEvent.click(getByText(sortableColumns[1].heading));

        expect(onSortClick).toHaveBeenCalledWith(
          mockEvent,
          expect.objectContaining({
            column: sortableColumns[1],
            direction: 'asc',
          })
        );
      });
    });
  });

  describe('bulk-select', () => {
    function render(props) {
      const {queryByLabelText, queryAllByLabelText} = fullRender(<EzTable {...props} />);
      return {
        bulkSelectInput: queryByLabelText('Select all'),
        rowSelectInputs: queryAllByLabelText('Select row'),
      };
    }

    describe('when a bulk-select is requested', () => {
      const onRowSelectClick = jest.fn();
      const onBulkSelectClick = jest.fn();
      const isRowSelected = jest.fn() as any;
      const selection = {onBulkSelectClick, onRowSelectClick, isRowSelected};
      const props = {columns, items, selection};

      beforeEach(() => {
        onRowSelectClick.mockClear();
        onBulkSelectClick.mockClear();
        isRowSelected.mockImplementation(() => false);
      });

      it('renders a bulk-select input in a column header', () => {
        const {bulkSelectInput} = render(props);
        expect(bulkSelectInput).not.toBeNull();
      });

      it('renders a row-select input for each row', () => {
        const {rowSelectInputs} = render(props);
        expect(rowSelectInputs).toHaveLength(items.length);
      });

      describe('the bulk-select input', () => {
        it('calls the provided click handler when the input state changes', () => {
          const {bulkSelectInput} = render(props);

          bulkSelectInput.click();

          expect(onBulkSelectClick).toHaveBeenCalledTimes(1);
          expect(onBulkSelectClick).toHaveBeenCalledWith(expect.any(Object));
        });

        describe('checked state', () => {
          let expectedState;

          afterEach(() => {
            const {bulkSelectInput} = render(props);
            expect(bulkSelectInput.checked).toBe(expectedState);
          });

          it('is checked when every row has been selected', () => {
            isRowSelected.mockImplementation(() => true);
            expectedState = true;
          });

          it('is not checked when only some rows are selected', () => {
            isRowSelected.mockImplementation(item => item.id === items[0].id);
            expectedState = false;
          });

          it('is not checked when no rows are selected', () => {
            isRowSelected.mockImplementation(() => false);
            expectedState = false;
          });
        });
      });

      describe('the row-select input', () => {
        it('calls the provided click handler when clicked', () => {
          const {rowSelectInputs} = render(props);

          fireEvent.click(rowSelectInputs[0]);

          expect(onRowSelectClick).toHaveBeenCalledTimes(1);
          expect(onRowSelectClick).toHaveBeenCalledWith(expect.any(Object), {item: items[0]});
        });

        it('determines its checked state based on the provided function', () => {
          isRowSelected.mockImplementation(item => item.id === items[0].id);

          const {rowSelectInputs} = render(props);

          expect(rowSelectInputs[0].checked).toBe(true);
          expect(rowSelectInputs[1].checked).toBe(false);
        });
      });
    });

    describe('when a bulk-select functionality is not requested', () => {
      it('does not render a bulk-select input in a column header', () => {
        const {bulkSelectInput} = render({columns, items});
        expect(bulkSelectInput).toBeNull();
      });

      it('does not render a row-select input for each row', () => {
        const {rowSelectInputs} = render({columns, items});
        expect(rowSelectInputs[0]).toBeUndefined();
      });
    });

    it('should meet accessibility guidelines', async () => {
      const wrapper = renderToHtml(
        <EzTable
          columns={columns}
          items={items}
          selection={{
            onBulkSelectClick: () => null,
            onRowSelectClick: () => null,
            isRowSelected: () => false,
          }}
        />
      );
      const actual = await axe(wrapper);
      expect(actual).toHaveNoViolations();
    });
  });

  describe('table select banner', () => {
    const data = [
      {first: 'Tiffany', last: 'Morin'},
      {first: 'Mitchell', last: 'Hoffman'},
      {first: 'Léo', last: 'Gonzalez'},
      {first: 'Alberto', last: 'Arias'},
      {first: 'Olivier', last: 'Campos'},
      {first: 'Ömür', last: 'Ekici'},
      {first: 'Énio', last: 'Barros'},
      {first: 'Ava', last: 'Ma'},
      {first: 'Norberta', last: 'Novaes'},
      {first: 'Deni', last: 'Lubbers'},
    ];

    it('shows option to select all rows when a page is selected', () => {
      const onSelectAllClick = jest.fn();

      const {getByText} = fullRender(
        <EzTable
          title="All Stores"
          subtitle="Compared to the same period last year"
          selection={{
            onRowSelectClick: () => {},
            onBulkSelectClick: () => {},
            isRowSelected: () => true,
            onSelectAllClick,
            onSelectNoneClick: () => {},
          }}
          columns={[
            {heading: 'First Name', accessor: 'first'},
            {heading: 'Last Name', accessor: 'last'},
          ]}
          items={data.slice(0, 5)}
          pagination={{
            currentPage: 1,
            totalRows: 10,
            rowsPerPage: 5,
            rowsPerPageOptions: [5, 10, 20, 30],
            onPrevPageClick: () => {},
            onNextPageClick: () => {},
            onRowsPerPageChange: () => {},
          }}
        />
      );

      const selectAllButton = getByText('Select all 10 rows');

      fireEvent.click(selectAllButton);

      expect(onSelectAllClick).toHaveBeenCalled();
    });
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzTable columns={columns} items={items} />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
