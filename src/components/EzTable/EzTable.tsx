import React, {createContext, createElement, useContext, useState, useEffect} from 'react';
import {EzCard, EzCardFooter} from '../EzCard';
import EzCheckbox from '../EzCheckbox';
import EzButton from '../EzButton';
import EzLayout from '../EzLayout';
import {TableProps} from './EzTable.types';
import {
  Container,
  Table,
  Th,
  Td,
  ClickableTr,
  TableCardSection,
  TablePaginationNavItems,
  TablePaginationRowCountDropdown,
} from './EzTable.styles';
import useSorting from './useSorting';
import en from './en';
import {wrapEvent} from '../../utils';
import {useTranslation, useScrollPosition, useOverflowDetection} from '../../utils/hooks';
import useExpandedClickTarget from './useExpandedClickTarget';

const TableContext = createContext(null);

const SortDirection = ({direction}) => (
  <svg
    width="0.5em"
    height="0.4em"
    viewBox="0 0 1 1"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    {direction === 'asc' ? <polygon points="0.5,0 1,1 0,1" /> : <polygon points="0.5,1 0,0 1,0" />}
  </svg>
);

const Thead = () => {
  const {columns, items, sorting, selection} = React.useContext(TableContext);
  const col = columns.find(c => c.defaultSort);
  const initialSort = col && {column: col, direction: col.defaultSort};
  const {direction, onClick, isSorted} = useSorting(initialSort);
  return (
    <thead>
      <tr>
        {selection && (
          <Th>
            <EzCheckbox
              label="Select all"
              onChange={selection.onBulkSelectClick}
              checked={items.length === selection.selected.length}
            />
          </Th>
        )}
        {columns.map((column, cellIndex) => {
          const {sortable, heading, numeric} = column;
          return (
            <Th
              key={cellIndex}
              numeric={numeric}
              sortable={sortable}
              sorted={isSorted(column)}
              onClick={event => onClick(event, column, sorting.onSortClick)}
            >
              <span>
                {heading} {sortable && <SortDirection direction={direction} />}
              </span>
            </Th>
          );
        })}
      </tr>
      <SelectionStateBanner />
    </thead>
  );
};

const SelectionStateBanner = () => {
  const {t} = useTranslation(en);
  const {columns, items, selection, pagination} = useContext(TableContext);

  if (!selection || !pagination) return null;
  if (!selection.onSelectAllClick) return null;
  if (selection.selected.length !== items.length && !selection.allSelected) return null;

  return (
    <tr>
      <td colSpan={columns.length + 1}>
        <EzLayout layout="basic">
          {selection.allSelected || items.length === pagination.totalRows ? (
            <span>
              {t('All {{totalRowCount}} rows are selected.', {
                totalRowCount: pagination.totalRows,
              })}
            </span>
          ) : (
            <>
              <span>
                {t('All {{selectedCount}} rows on this page are selected.', {
                  selectedCount: selection.selected.length,
                })}
              </span>
              <EzButton
                use="tertiary"
                onClick={wrapEvent(selection.onSelectAllClick, () =>
                  selection.setAllSelected(true)
                )}
              >
                {t('Select all {{totalRowCount}} rows', {
                  totalRowCount: pagination.totalRows,
                })}
              </EzButton>
            </>
          )}
          <EzButton use="tertiary" onClick={selection.onSelectNoneClick}>
            {t('Clear selection')}
          </EzButton>
        </EzLayout>
      </td>
    </tr>
  );
};

const TRow = ({item}) => {
  const {columns, selection} = useContext(TableContext);
  const [targetRef, {ref, clickable, onClick, onMouseEnter}] = useExpandedClickTarget();

  return (
    <ClickableTr {...{innerRef: ref, clickable, onClick, onMouseEnter}}>
      {selection && (
        <Td>
          <EzCheckbox
            label="Select row"
            checked={selection.selected.includes(item)}
            onChange={event => selection.onRowSelectClick(event, {item})}
          />
        </Td>
      )}
      {columns.map(({accessor, numeric}, cellIndex) => (
        <Td key={cellIndex} numeric={numeric}>
          {typeof accessor === 'function'
            ? createElement(accessor, {item, linkRef: targetRef})
            : item[accessor]}
        </Td>
      ))}
    </ClickableTr>
  );
};

const Tbody = () => {
  const {items} = useContext(TableContext);
  return (
    <tbody>
      {items.map((item, rowIndex) => (
        <TRow key={rowIndex} item={item} />
      ))}
    </tbody>
  );
};

const TablePagination = ({pagination}) => {
  const {t} = useTranslation(en);
  const pages = Math.ceil(pagination.totalRows / pagination.rowsPerPage);

  return (
    <EzCardFooter>
      <EzLayout layout="split">
        <TablePaginationNavItems>
          <EzButton
            use="tertiary"
            onClick={pagination.onPrevPageClick}
            disabled={pagination.currentPage === 1}
          >
            {'‹ '}
            {t('Previous Page')}
          </EzButton>
          <span>
            {t('Page {{currentPage}} of {{pages}}', {currentPage: pagination.currentPage, pages})}
          </span>
          <EzButton
            use="tertiary"
            onClick={pagination.onNextPageClick}
            disabled={pagination.currentPage === pages}
          >
            {t('Next Page')}
            {' ›'}
          </EzButton>
        </TablePaginationNavItems>
        <TablePaginationRowCountDropdown
          defaultValue={pagination.rowsPerPage}
          onChange={pagination.onRowsPerPageChange}
        >
          {pagination.rowsPerPageOptions.map(value => (
            <option key={value} value={value}>
              {t('{{num}} rows per page', {num: value})}
            </option>
          ))}
        </TablePaginationRowCountDropdown>
      </EzLayout>
    </EzCardFooter>
  );
};

/**
 * Tables display information in a way that’s easy to scan,
 * so that users can look for patterns and insights.
 * They can be embedded in primary content, such as cards.
 */
const EzTable: React.FC<TableProps> = ({
  actions,
  title,
  subtitle,
  columns,
  items,
  selection,
  onSortClick,
  pagination,
}) => {
  const [allSelected, setAllSelected] = useState(false);
  const selected = selection && items.filter(selection.isRowSelected);
  const numSelectedOnPage = selected && selected.length;
  const {currentPage, rowsPerPage} = pagination || ({} as any);
  const [{x}, scrollEvents] = useScrollPosition();
  const isScrolling = x > 0;
  const [isOverflowing, overflowDetection] = useOverflowDetection();

  useEffect(() => setAllSelected(false), [numSelectedOnPage, currentPage, rowsPerPage]);

  const table = (
    <TableContext.Provider
      value={{
        items,
        selection: selection && {
          ...selection,
          selected,
          allSelected,
          setAllSelected,
        },
        columns,
        pagination,
        sorting: {onSortClick},
      }}
    >
      <Container
        cols={columns.length}
        selectable={!!selection}
        overflowing={isOverflowing}
        isScrolling={isScrolling}
        {...scrollEvents}
        innerRef={overflowDetection.ref}
      >
        <Table selectable={!!selection} use={!title ? 'simple' : 'full'}>
          <Thead />
          <Tbody />
        </Table>
      </Container>
    </TableContext.Provider>
  );

  if (!title) return table;

  return (
    <EzCard title={title} subtitle={subtitle} actions={actions}>
      <TableCardSection>{table}</TableCardSection>
      {pagination && <TablePagination pagination={pagination} />}
    </EzCard>
  );
};

export default EzTable;
