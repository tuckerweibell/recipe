import React, {FC, createContext, createElement, useContext, useState, useEffect} from 'react';
import theme from '../theme.config';
import {EzCard} from '../EzCard';
import EzCheckbox from '../EzCheckbox';
import EzButton from '../EzButton';
import EzLayout from '../EzLayout';
import TableCardSection from './TableCardSection';
import {TableProps} from './EzTable.types';
import useSorting from './useSorting';
import en from './en';
import {clsx, wrapEvent} from '../../utils';
import {useTranslation} from '../../utils/hooks';
import useExpandedClickTarget from './useExpandedClickTarget';
import EzTextStyle from '../EzTextStyle';
import {EzFooter} from '../EzContent';

const cell = theme.css({
  textAlign: 'left',
  padding: '$150 $100',
});

/*
  With table-layout: auto, widths of table cells only shrink to the size of their content,
  so setting the width to a size smaller than the content size causes the cell to always fit
  the content and not stretch to fill the available space.
*/
const selectionCell = theme.css({
  'th:first-of-type, td:first-of-type': {
    width: '1%',
    whiteSpace: 'normal',
  },
  'tr + tr': {
    td: {
      backgroundColor: '$table-message-bg',
      borderColor: '$table-message-border',
      borderTopStyle: 'solid',
      padding: '$100',
      '> *': {
        justifyContent: 'center',
      },
    },
  },
});

const numericCell = theme.css({
  textAlign: 'right',
});

const header = theme.css({
  fontWeight: '$table-heading',
  fontSize: '$table-heading',
  lineHeight: '$table',
  color: '$table-heading-text',
});

const sortableColumn = theme.css({
  cursor: 'pointer',
  userSelect: 'none',
  span: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  svg: {
    fill: '$gray600',
    marginLeft: '$100',
    opacity: 0,
  },
});

const sortedCell = theme.css({
  svg: {
    opacity: 1,
  },
});

const rowHover = theme.css({
  '&&:hover': {
    td: {
      userSelect: 'none',
      cursor: 'pointer',
    },
  },
});

const base = theme.css({
  margin: 0,
  borderCollapse: 'collapse',
  width: 'auto',
  fontFamily: '$sans',
  fontWeight: '$regular',
  fontSize: '$100',
  lineHeight: '$table',
  color: '$table-text',
  backgroundColor: 'white',
  whiteSpace: 'nowrap',

  variants: {
    use: {
      simple: {
        'th, td': {
          border: 'none',
        },
        'tr th:first-of-type, tr td:first-of-type': {
          paddingLeft: '$150',
        },
        'tr th:last-of-type, tr td:last-of-type': {
          paddingRight: '$150',
        },
        'tr th': {
          paddingTop: 0,
          paddingBottom: '6px',
        },
        'tr td': {
          paddingTop: '$50',
          paddingBottom: '$50',
        },
        'tr td:not(:last-of-type)': {
          paddingRight: '$400',
        },
        'tr:nth-of-type(odd) td': {
          backgroundColor: '$table-bg-alt',
        },
      },
      card: {
        borderRadius: '6px',
        overflow: 'hidden',

        // space the content of the table columns with "card" padding
        'th, td': {
          '&:first-of-type': {
            paddingLeft: '$250',
          },
          '&:last-of-type': {
            paddingRight: '$250',
          },
        },
        // give the table some borders
        'tbody tr:first-of-type td': {
          borderTopStyle: 'solid',
        },
        td: {
          borderBottomStyle: 'solid',
          borderColor: '$gray300',
          borderWidth: '$thin',
        },
        'tbody tr:last-of-type td': {
          borderBottomStyle: 'none',
        },

        // and highlight hovered rows
        'tbody tr:hover td': {
          backgroundColor: '$table-bg-hover',
        },
      },
    },
  },
});

const responsive = theme.css({
  overflowX: 'auto',
  overflowY: 'hidden',
  '-webkit-overflow-scrolling': 'touch',
});

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

type ThProps = {
  children: any;
  numeric?: boolean;
  isSortableColumn?: boolean;
  sorted?: boolean;
  onClick?: any;
};

const Th: FC<ThProps> = ({children, numeric, isSortableColumn, sorted, onClick}) => (
  <th
    className={clsx(
      cell(),
      numeric && numericCell(),
      header(),
      isSortableColumn && sortableColumn(),
      sorted && sortedCell()
    )}
    onClick={onClick}
  >
    {children}
  </th>
);

const Thead = ({selectable}) => {
  const {columns, items, sorting, selection} = useContext(TableContext);
  const col = columns.find(c => c.defaultSort);
  const initialSort = col && {column: col, direction: col.defaultSort};
  const {direction, onClick, isSorted} = useSorting(initialSort);
  return (
    <thead className={clsx(selectable && selectionCell())}>
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
              isSortableColumn={sortable}
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

const selectionStateCell = theme.css({
  '&&': {
    padding: '12px 20px',
  },
});

const SelectionStateBanner = () => {
  const {t} = useTranslation(en);
  const {columns, items, selection, pagination} = useContext(TableContext);

  if (!selection || !pagination) return null;
  if (!selection.onSelectAllClick) return null;
  if (selection.selected.length !== items.length && !selection.allSelected) return null;

  return (
    <tr>
      <td colSpan={columns.length + 1} className={selectionStateCell()}>
        <EzLayout layout="cluster" alignX="center">
          {selection.allSelected || items.length === pagination.totalRows ? (
            <Fragment>
              <EzTextStyle align="center">
                {t('All {{totalRowCount}} rows are selected.', {
                  totalRowCount: pagination.totalRows,
                })}
              </EzTextStyle>
              <EzButton use="tertiary" onClick={selection.onSelectNoneClick}>
                {t('Clear selection')}
              </EzButton>
            </Fragment>
          ) : (
            <Fragment>
              <EzTextStyle align="center">
                {t('All {{selectedCount}} rows on this page are selected.', {
                  selectedCount: selection.selected.length,
                })}
              </EzTextStyle>
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
    <tr
      className={clsx(clickable && rowHover)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      ref={ref as any}
    >
      {selection && (
        <td className={cell()}>
          <EzCheckbox
            label="Select row"
            checked={selection.selected.includes(item)}
            onChange={event => selection.onRowSelectClick(event, {item})}
          />
        </td>
      )}
      {columns.map(({component, numeric}, cellIndex) => (
        <td className={clsx(cell(), numeric && numericCell())} key={cellIndex}>
          {createElement(component, {item, linkRef: targetRef})}
        </td>
      ))}
    </tr>
  );
};

const Tbody = () => {
  const {items} = useContext(TableContext);
  return (
    <tbody>
      {items.map((item, rowIndex) => (
        <TRow key={item.key || rowIndex} item={item} />
      ))}
    </tbody>
  );
};

const iconSize = theme.css({
  height: 24,
  width: 24,
});

const rangeWrapper = theme.css({
  whiteSpace: 'nowrap',
});

const paginationNav = theme.css({
  display: 'flex',
  '> * + *': {
    marginLeft: '16px',
  },
});

const iconStates = theme.css({
  fill: '#8B99A6',
  ':hover': {
    fill: '#212b36',
  },
  ':active': {
    fill: '#637381',
  },
});

const virtualTouchable = theme.css({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '-10px',
    right: '-10px',
    transform: 'translateY(-50%)',
    minHeight: '44px',
    minWidth: '44px',
    height: '100%',
    top: '50%',
  },
});

const rowsPerPageOpacity = theme.css({
  // opacity 0 is ignored by some screen readers
  opacity: 0.001,
});

const rowsPerPageSvg = theme.css({
  pointerEvents: 'none',
  fill: '#8B99A6',
  'select:focus + &': {
    borderRadius: '3px',
    boxShadow: '#3e90d6 0px 0px 0px 2px',
  },
  'select:hover + &': {
    fill: '#212b36',
  },
  'select:active + &': {
    fill: '#637381',
  },
});

const rowsPerPageWrapper = theme.css({
  position: 'relative',
  '& > *': {
    position: 'absolute',
    left: '-10px',
    right: '-10px',
    transform: 'translateY(-50%)',
    minHeight: '44px',
    minWidth: '44px',
    height: '100%',
    top: '50%',
  },
});

const TablePagination = ({pagination}) => {
  const {t} = useTranslation(en);
  const {rowsPerPage, currentPage: page, totalRows: count} = pagination;
  const pages = Math.ceil(pagination.totalRows / pagination.rowsPerPage);
  const from = (page - 1) * rowsPerPage + 1;
  const to = Math.min(count, page * rowsPerPage);
  const range = count === 1 ? 1 : `${from}-${to}`;

  return (
    <EzFooter>
      <EzLayout layout="right">
        <nav aria-label={t('Pagination')} className={paginationNav()}>
          <span className={rangeWrapper()}>{t('{{range}} of {{count}}', {range, count})}</span>
          <EzButton
            use="tertiary"
            title={t('Previous Page')}
            aria-label={t('Previous Page')}
            onClick={pagination.onPrevPageClick}
            disabled={pagination.currentPage === 1}
            className={virtualTouchable()}
            icon={
              <svg viewBox="6 5 14 14" xmlns="http://www.w3.org/2000/svg" className={iconStates()}>
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
            className={virtualTouchable()}
            icon={
              <svg viewBox="6 5 14 14" xmlns="http://www.w3.org/2000/svg" className={iconStates()}>
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            }
          />
        </nav>
        <div className={clsx(rowsPerPageWrapper(), iconSize())}>
          <select
            className={rowsPerPageOpacity()}
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
          <span className={rowsPerPageSvg()}>
            <svg focusable={false} viewBox="-8 -8 40 40" aria-hidden="true">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </span>
        </div>
      </EzLayout>
    </EzFooter>
  );
};

/**
 * Tables display information in a way that’s easy to scan,
 * so that users can look for patterns and insights.
 * They can be embedded in primary content, such as cards.
 */
const EzTable: FC<TableProps> = ({
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
      <div className={responsive()}>
        <table className={base({use: title ? 'card' : 'simple'})}>
          <Thead selectable={!!selection} />
          <Tbody />
        </table>
      </div>
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
