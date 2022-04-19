import React from 'react';
import {visualSnapshots} from 'sosia';
import {render, fireEvent} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import regressionTests from './EzTable.test.md';
import markdown from '../EzTable.md';
import EzTable from '../EzTable';
import {EzButton, EzPage, EzCard, EzHeading, EzAlert, EzTextStyle} from '../../index';

const scope = {EzButton, EzTable, EzPage, EzCard, EzHeading, EzAlert, EzTextStyle};

describe('EzTable', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope: {...scope}});

  const columns = [
    {heading: 'Store name', component: ({item}) => item.store, key: 'store'},
    {heading: 'Total sales', numeric: true, key: 'total'},
    {heading: 'Average order value', numeric: true, key: 'average'},
  ];
  const items = [
    {id: '#004', store: '123 Example Store', total: 23267, average: 327.79},
    {id: '#007', store: '45 Meadowview Lane', total: 22788, average: 367.55},
  ];

  describe('column sorting', () => {
    describe('when the user requests a column to be sorted', () => {
      const onSortClick = jest.fn();
      const sortableColumns = [
        {heading: 'Store name', key: 'store', sortable: true},
        {heading: 'Total sales', key: 'total', sortable: true},
      ];
      const props = {columns: sortableColumns, items, onSortClick};
      const mockEvent = expect.any(Object);

      beforeEach(() => {
        onSortClick.mockClear();
      });

      it('notifies the client that sort is requested', () => {
        const {getByText} = render(<EzTable {...props} />);

        fireEvent.click(getByText(sortableColumns[0].heading));

        expect(onSortClick).toHaveBeenCalledTimes(1);
        expect(onSortClick).toHaveBeenCalledWith(
          mockEvent,
          expect.objectContaining({
            column: expect.objectContaining(sortableColumns[0]),
            direction: 'asc',
          })
        );
      });

      it('does NOT notify the client of a sort when a column is not sortable', () => {
        const {getByText} = render(
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
        const {getByText} = render(<EzTable {...props} />);

        fireEvent.click(getByText(sortableColumns[1].heading));

        expect(onSortClick).toHaveBeenCalledWith(
          mockEvent,
          expect.objectContaining({
            column: expect.objectContaining(sortableColumns[1]),
            direction: 'asc',
          })
        );

        fireEvent.click(getByText(sortableColumns[1].heading));

        expect(onSortClick).toHaveBeenCalledWith(
          mockEvent,
          expect.objectContaining({
            column: expect.objectContaining(sortableColumns[1]),
            direction: 'desc',
          })
        );
      });

      it('should not change the sort order if the provided onSortClick callback prevents default', () => {
        const {getByText} = render(<EzTable {...props} />);

        onSortClick.mockImplementation(event => event.preventDefault());

        fireEvent.click(getByText(sortableColumns[1].heading));

        expect(onSortClick).toHaveBeenCalledWith(
          mockEvent,
          expect.objectContaining({
            column: expect.objectContaining(sortableColumns[1]),
            direction: 'asc',
          })
        );

        fireEvent.click(getByText(sortableColumns[1].heading));

        expect(onSortClick).toHaveBeenCalledWith(
          mockEvent,
          expect.objectContaining({
            column: expect.objectContaining(sortableColumns[1]),
            direction: 'asc',
          })
        );
      });
    });
  });

  describe('bulk-select', () => {
    function findInputs(props) {
      const {queryByLabelText, queryAllByLabelText} = render(<EzTable {...props} />);
      return {
        bulkSelectInput: queryByLabelText('Select all') as HTMLInputElement,
        rowSelectInputs: queryAllByLabelText('Select row') as HTMLInputElement[],
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
        const {bulkSelectInput} = findInputs(props);
        expect(bulkSelectInput).not.toBeNull();
      });

      it('renders a row-select input for each row', () => {
        const {rowSelectInputs} = findInputs(props);
        expect(rowSelectInputs).toHaveLength(items.length);
      });

      describe('the bulk-select input', () => {
        it('calls the provided click handler when the input state changes', () => {
          const {bulkSelectInput} = findInputs(props);

          bulkSelectInput.click();

          expect(onBulkSelectClick).toHaveBeenCalledTimes(1);
          expect(onBulkSelectClick).toHaveBeenCalledWith(expect.any(Object));
        });

        describe('checked state', () => {
          let expectedState;

          afterEach(() => {
            const {bulkSelectInput} = findInputs(props);
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
          const {rowSelectInputs} = findInputs(props);

          fireEvent.click(rowSelectInputs[0]);

          expect(onRowSelectClick).toHaveBeenCalledTimes(1);
          expect(onRowSelectClick).toHaveBeenCalledWith(expect.any(Object), {item: items[0]});
        });

        it('determines its checked state based on the provided function', () => {
          isRowSelected.mockImplementation(item => item.id === items[0].id);

          const {rowSelectInputs} = findInputs(props);

          expect(rowSelectInputs[0].checked).toBe(true);
          expect(rowSelectInputs[1].checked).toBe(false);
        });
      });
    });

    describe('when a bulk-select functionality is not requested', () => {
      it('does not render a bulk-select input in a column header', () => {
        const {bulkSelectInput} = findInputs({columns, items});
        expect(bulkSelectInput).toBeNull();
      });

      it('does not render a row-select input for each row', () => {
        const {rowSelectInputs} = findInputs({columns, items});
        expect(rowSelectInputs[0]).toBeUndefined();
      });
    });

    it('should meet accessibility guidelines', async () => {
      const {container} = render(
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
      const actual = await axe(container.outerHTML);
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

      const {getByText} = render(
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
            {heading: 'First Name', key: 'first'},
            {heading: 'Last Name', key: 'last'},
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

  describe('clickable rows', () => {
    const data = [
      {first: 'Tiffany', last: 'Morin'},
      {first: 'Mitchell', last: 'Hoffman'},
    ];

    const link =
      onclick =>
      ({item: {first, last}, linkRef}) =>
        (
          <div>
            <div>
              <a href="/" ref={linkRef} onClick={onclick}>
                {first} {last}
              </a>
            </div>
          </div>
        );

    it('calls the onClick of the link target when clicking inside a table row', () => {
      const spy = jest.fn();

      const {getByText} = render(
        <EzTable
          title="All Stores"
          subtitle="Compared to the same period last year"
          columns={[
            {heading: 'Link', component: link(spy), key: 'link'},
            {heading: 'First Name', key: 'first'},
            {heading: 'Last Name', key: 'last'},
          ]}
          items={data}
        />
      );

      const cell = getByText('Tiffany');

      fireEvent.mouseOver(cell);
      fireEvent.click(cell);

      expect(spy).toHaveBeenCalled();
    });

    it('does NOT call the onClick of the link target if clicking interactive elements in the row', () => {
      const spy = jest.fn();

      const {queryAllByLabelText} = render(
        <EzTable
          title="All Stores"
          subtitle="Compared to the same period last year"
          selection={{
            onRowSelectClick: () => {},
            onBulkSelectClick: () => {},
            isRowSelected: () => true,
          }}
          columns={[
            {heading: 'Link', component: link(spy), key: 'link'},
            {heading: 'First Name', key: 'first'},
            {heading: 'Last Name', key: 'last'},
          ]}
          items={data}
        />
      );

      const checkbox = queryAllByLabelText('Select row')[0];

      fireEvent.click(checkbox);

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('accessor prop compatibility', () => {
    let component;

    const mappableColumns = [
      {heading: 'Name', accessor: ({item}) => item.store},
      {heading: 'Sales', accessor: 'total', numeric: true},
    ];

    beforeEach(() => {
      component = render(
        <EzTable
          title="All Stores"
          subtitle="Compared to the same period last year"
          columns={mappableColumns}
          items={items}
        />
      );
    });

    describe('when the accessor prop is a function', () => {
      it('renders the table properly', () => {
        const {getByText} = component;

        expect(getByText('Name')).toBeDefined();
      });
    });

    describe('when the accessor prop is a string', () => {
      it('renders the table properly', () => {
        const {getByText} = component;

        expect(getByText('Sales')).toBeDefined();
      });
    });
  });

  it('should meet accessibility guidelines', async () => {
    const {container} = render(<EzTable columns={columns} items={items} />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
