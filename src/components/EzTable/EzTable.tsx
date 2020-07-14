/** @jsx jsx */
import {jsx, Interpolation} from '@emotion/core';
import React, {createContext, createElement, useContext, useState, useEffect} from 'react';
import {EzCard, EzCardFooter} from '../EzCard';
import EzCheckbox from '../EzCheckbox';
import EzButton from '../EzButton';
import EzLayout from '../EzLayout';
import {TableProps} from './EzTable.types';
import {Container, Table, Th, Td, ClickableTr, TableCardSection} from './EzTable.styles';
import useSorting from './useSorting';
import en from './en';
import {wrapEvent} from '../../utils';
import {useTranslation, useScrollPosition} from '../../utils/hooks';
import useOverflowDetection from './useOverflowDetection';
import useExpandedClickTarget from './useExpandedClickTarget';

const {Fragment} = React;
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
              key={column.key || cellIndex}
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
      <td colSpan={columns.length + 1} style={{padding: '12px 20px'}}>
        <EzLayout layout="cluster">
          {selection.allSelected || items.length === pagination.totalRows ? (
            <Fragment>
              <span>
                {t('All {{totalRowCount}} rows are selected.', {
                  totalRowCount: pagination.totalRows,
                })}
              </span>
              <EzButton use="tertiary" onClick={selection.onSelectNoneClick}>
                {t('Clear selection')}
              </EzButton>
            </Fragment>
          ) : (
            <Fragment>
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
            </Fragment>
          )}
        </EzLayout>
      </td>
    </tr>
  );
};

const TRow = ({item}) => {
  const {columns, selection} = useContext(TableContext);
  const [targetRef, {ref, clickable, onClick, onMouseEnter}] = useExpandedClickTarget();

  return (
    <ClickableTr {...{ref: ref as any, clickable, onClick, onMouseEnter}}>
      {selection && (
        <Td>
          <EzCheckbox
            label="Select row"
            checked={selection.selected.includes(item)}
            onChange={event => selection.onRowSelectClick(event, {item})}
          />
        </Td>
      )}
      {columns.map(({component, numeric}, cellIndex) => (
        <Td key={cellIndex} numeric={numeric}>
          {createElement(component, {item, linkRef: targetRef})}
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

const iconSize: Interpolation = {
  height: 24,
  width: 24,
};

const iconStates: Interpolation = {
  fill: '#8B99A6',
  ':hover': {fill: '#212b36'},
  ':active': {fill: '#637381'},
};

const cx = (...args): Interpolation => Object.assign({}, ...args);

const TablePagination = ({pagination}) => {
  const {t} = useTranslation(en);
  const {rowsPerPage, currentPage: page, totalRows: count} = pagination;
  const pages = Math.ceil(pagination.totalRows / pagination.rowsPerPage);
  const from = (page - 1) * rowsPerPage + 1;
  const to = Math.min(count, page * rowsPerPage);
  const range = count === 1 ? 1 : `${from}-${to}`;

  return (
    <EzCardFooter>
      <EzLayout layout="right">
        <nav
          aria-label={t('Pagination')}
          css={{
            display: 'flex',
            '> * + *': {marginLeft: 16},
          }}
        >
          <span css={{whiteSpace: 'nowrap'}}>{t('{{range}} of {{count}}', {range, count})}</span>
          <EzButton
            use="tertiary"
            title={t('Previous Page')}
            aria-label={t('Previous Page')}
            onClick={pagination.onPrevPageClick}
            disabled={pagination.currentPage === 1}
            icon={
              <svg viewBox="6 5 14 14" xmlns="http://www.w3.org/2000/svg" css={iconStates}>
                <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
              </svg>
            }
          />
          <EzButton
            use="tertiary"
            title={t('Next Page')}
            aria-label={t('Next Page')}
            onClick={pagination.onNextPageClick}
            disabled={pagination.currentPage === pages}
            icon={
              <svg viewBox="6 5 14 14" xmlns="http://www.w3.org/2000/svg" css={iconStates}>
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            }
          />
        </nav>
        <div css={{position: 'relative'}}>
          <select
            css={cx(iconSize, {opacity: 0.001})} // opacity 0 is ignored by some screen readers
            defaultValue={pagination.rowsPerPage}
            onChange={pagination.onRowsPerPageChange}
            title={t('Show rows per page options')}
            aria-label={t('Show rows per page options')}
          >
            {pagination.rowsPerPageOptions.map(value => (
              <option key={value} value={value}>
                {t('{{num}} rows per page', {num: value})}
              </option>
            ))}
          </select>
          <svg
            focusable={false}
            viewBox="0 0 24 24"
            aria-hidden="true"
            css={cx(iconSize, {
              top: 0,
              right: 0,
              bottom: 0,
              position: 'absolute',
              pointerEvents: 'none',
              fill: iconStates.fill,
              'select:focus + &': {
                borderRadius: 3,
                boxShadow: '#3e90d6 0px 0px 0px 2px',
              },
              'select:hover + &': iconStates[':hover'],
              'select:active + &': iconStates[':active'],
            })}
          >
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
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

  const mappedColumns = columns.map(
    ({
      heading,
      accessor,
      key = typeof accessor === 'string' ? accessor : undefined,
      component = typeof accessor === 'function'
        ? accessor
        : ({item}: any) => <Fragment>{item[key]}</Fragment>,
      sortable,
      ...rest
    }) => ({
      heading,
      key,
      component,
      sortable,
      ...rest,
    })
  );

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
        columns: mappedColumns,
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
        ref={overflowDetection.ref}
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
