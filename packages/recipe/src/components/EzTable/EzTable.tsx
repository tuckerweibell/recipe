import React, {FC, createContext, createElement, useContext} from 'react';
import {Box, Stack} from '@mui/material';
import {
  faChevronLeft,
  faChevronRight,
  faSort,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import theme from '../theme.config';
import {EzCard} from '../EzCard';
import EzCheckbox from '../EzCheckbox';
import EzButton from '../EzButton';
import EzLayout from '../EzLayout';
import EzIcon from '../EzIcon';
import EzIconButton from '../EzIconButton';
import TableCardSection from './TableCardSection';
import {EzTableProps} from './EzTable.types';
import useSorting from './useSorting';
import en from './en';
import {clsx} from '../../utils';
import {useTranslation} from '../../utils/hooks';
import useExpandedClickTarget from './useExpandedClickTarget';
import EzTextStyle from '../EzTextStyle';
import {EzFooter} from '../EzContent';
import {ezTheme} from '../../themes';

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

const checkboxCell = theme.css({
  '.EzCheckbox': {
    marginLeft: '-5px',
  },
});

const numericCell = theme.css({
  textAlign: 'right',
});

const numericPaddedCell = theme.css({
  textAlign: 'right',
  paddingRight: '32px',
});

const noWrap = theme.css({
  whiteSpace: 'nowrap',
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

const fullWidthTable = theme.css({
  width: '100%',
});

const alignTop = theme.css({
  verticalAlign: 'top',
});

const transparentBackground = theme.css({
  backgroundColor: 'inherit',
});

const base = theme.css({
  margin: 0,
  borderCollapse: 'collapse',
  width: 'auto',
  fontFamily: '$defaultFont',
  fontWeight: '$regular',
  fontSize: '$100',
  lineHeight: '$table',
  color: '$table-text',
  backgroundColor: 'white',

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
        'tr th:not(:last-of-type), tr td:not(:last-of-type)': {
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

const SortIcon = ({direction, isSorted}) => (
  <Box fontSize="0.6rem" sx={{svg: {fill: ezTheme.palette.common.grey150}}}>
    <EzIcon
      icon={isSorted ? (direction === 'asc' ? faSortUp : faSortDown) : faSort}
      size="inherit"
    />
  </Box>
);

type ThProps = {
  children: any;
  isSelection?: boolean;
  isSortableColumn?: boolean;
  numeric?: boolean;
  numericPadded?: boolean;
  onClick?: any;
  sorted?: boolean;
  width?: number;
};

const Th: FC<ThProps> = ({
  children,
  isSelection,
  isSortableColumn,
  numeric,
  numericPadded,
  onClick,
  sorted,
  width,
}) => (
  <Box
    component="th"
    className={clsx(
      isSelection ? checkboxCell() : cell(),
      numeric && numericCell(),
      numericPadded && numericPaddedCell(),
      header(),
      isSortableColumn && sortableColumn(),
      sorted && sortedCell()
    )}
    onClick={onClick}
    width={width || 'auto'}
  >
    {children}
  </Box>
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
          <Th isSelection>
            <EzCheckbox
              ariaLabel="checkbox-header"
              checked={items.length === selection.rowsSelectedOnCurrentPage.length}
              color="common.grey150"
              indeterminate={
                items.length !== selection.rowsSelectedOnCurrentPage.length &&
                selection.rowsSelectedOnCurrentPage.length > 0
              }
              name="select all"
              onChange={selection.onBulkSelectClick}
              size="small"
            />
          </Th>
        )}
        {columns.map((column, cellIndex) => {
          const {sortable, heading, numeric, numericPadded, icon, width} = column;
          return (
            <Th
              key={column.key || cellIndex}
              numeric={numeric}
              numericPadded={numericPadded}
              isSortableColumn={sortable}
              sorted={isSorted(column)}
              onClick={event => onClick(event, column, sorting.onSortClick)}
              width={width}
            >
              <Stack
                alignItems="center"
                direction="row"
                gap={0.5}
                justifyContent={(numeric || numericPadded) && 'flex-end'}
              >
                <Box whiteSpace="normal">{heading}</Box>
                <Stack alignItems="center" direction="row" gap={0.5}>
                  {icon && icon}
                  {sortable && <SortIcon direction={direction} isSorted={isSorted(column)} />}
                </Stack>
              </Stack>
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
  const {columns, selection, pagination} = useContext(TableContext);

  if (!selection || selection.totalRowsSelected === 0 || !pagination) return null;
  if (!selection.onSelectAllClick) return null;

  return (
    <tr>
      <td colSpan={columns.length + 1} className={selectionStateCell()}>
        <EzLayout layout="cluster" alignX="center">
          {selection.totalRowsSelected === pagination.totalRows && (
            <Fragment>
              <EzTextStyle align="center">
                {t('All {{totalRowCount}} rows are selected.', {
                  totalRowCount: pagination.totalRows,
                })}
              </EzTextStyle>
              <EzButton variant="text" onClick={selection.onSelectNoneClick}>
                {t('Clear selection')}
              </EzButton>
            </Fragment>
          )}
          {selection.totalRowsSelected < pagination.totalRows && (
            <EzTextStyle align="center">
              {t('{{partialTotalCount}} out of {{totalPageCount}} rows are selected.', {
                partialTotalCount: selection.totalRowsSelected,
                totalPageCount: pagination.totalRows,
              })}
            </EzTextStyle>
          )}
          {!selection.disableMultiPageSelection &&
            selection.totalRowsSelected < pagination.totalRows && (
              <EzButton variant="text" onClick={selection.onSelectAllClick}>
                {t('Select all {{totalRowCount}} rows', {
                  totalRowCount: pagination.totalRows,
                })}
              </EzButton>
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
        <td className={checkboxCell()}>
          <EzCheckbox
            ariaLabel="checkbox-row"
            checked={selection.rowsSelectedOnCurrentPage.includes(item)}
            color="common.grey150"
            name="select row"
            onChange={event => selection.onRowSelectClick(event, {item})}
            size="small"
          />
        </td>
      )}
      {columns.map(({allowWrap, component, numeric, numericPadded}, cellIndex) => (
        <td
          className={clsx(
            cell(),
            !allowWrap && noWrap(),
            numeric && numericCell(),
            numericPadded && numericPaddedCell()
          )}
          key={cellIndex}
        >
          {createElement(component, {item, linkRef: targetRef})}
        </td>
      ))}
    </tr>
  );
};

const Tbody = () => {
  const {alignY, items} = useContext(TableContext);
  return (
    <tbody className={clsx(alignY === 'top' && alignTop())}>
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

const paginationNav = theme.css({
  display: 'flex',
  alignItems: 'center',
  '> * + *': {
    marginLeft: '16px',
  },
});

const virtualTouchable = theme.css({
  '& button': {
    position: 'relative',
    minWidth: 0,
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
    '&:disabled': {
      opacity: 0.45,
    },
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
    outline: '$outlines$focusOutline',
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

const cardWithoutHeaderActions = theme.css({
  '&&': {
    padding: '$250 $250 $50 $250',
  },
});

const TablePagination = ({pagination}) => {
  const {t} = useTranslation(en);
  const {
    totalRows,
    rowsPerPage,
    currentPage: page,
    totalFilteredRows: count = totalRows,
  } = pagination;
  const pages = Math.ceil(count / pagination.rowsPerPage);
  const from = (page - 1) * rowsPerPage + 1;
  const to = Math.min(count, page * rowsPerPage);
  const range = count === 1 ? 1 : `${from}-${to}`;

  return (
    <EzFooter>
      <EzLayout layout="right">
        <nav aria-label={t('Pagination')} className={paginationNav()}>
          <span className={noWrap()}>{t('{{range}} of {{count}}', {range, count})}</span>

          <div className={virtualTouchable()}>
            <EzIconButton
              ariaLabel={t('Previous Page')}
              color="common.grey160"
              disabled={pagination.currentPage === 1}
              onClick={pagination.onPrevPageClick}
              size="small"
              variant="basic"
            >
              <EzIcon icon={faChevronLeft} size="small" />
            </EzIconButton>
          </div>

          <div className={virtualTouchable()}>
            <EzIconButton
              ariaLabel={t('Next Page')}
              color="common.grey160"
              disabled={pagination.currentPage === pages}
              onClick={pagination.onNextPageClick}
              size="small"
              variant="basic"
            >
              <EzIcon icon={faChevronRight} size="small" />
            </EzIconButton>
          </div>
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
const EzTable: FC<EzTableProps> = ({
  actions,
  alignY = 'center',
  ariaLabel,
  blankState,
  columns,
  fullWidth,
  items,
  onSortClick,
  pagination,
  selection,
  showCardWithoutHeading,
  subtitle,
  title,
  titleIcon,
  transparent,
}) => {
  const rowsSelectedOnCurrentPage = selection && items.filter(selection.isRowSelected);

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
        alignY,
        items,
        selection: selection && {
          ...selection,
          rowsSelectedOnCurrentPage,
        },
        columns: mappedColumns,
        pagination,
        sorting: {onSortClick},
      }}
    >
      <div className={responsive()}>
        <table
          aria-label={ariaLabel}
          className={clsx(
            base({use: title || showCardWithoutHeading ? 'card' : 'simple'}),
            fullWidth && fullWidthTable(),
            transparent && transparentBackground()
          )}
        >
          <Thead selectable={!!selection} />
          <Tbody />
        </table>
      </div>
    </TableContext.Provider>
  );

  if (!title && !showCardWithoutHeading) return table;

  return (
    <EzCard
      title={showCardWithoutHeading ? null : title}
      subtitle={showCardWithoutHeading ? null : subtitle}
      actions={!showCardWithoutHeading ? actions : null}
      titleIcon={titleIcon}
      transparent={transparent}
    >
      <TableCardSection showCardWithoutHeading={showCardWithoutHeading}>
        {actions && showCardWithoutHeading && (
          <div className={cardWithoutHeaderActions()}>{actions}</div>
        )}
        {blankState && items.length === 0 ? blankState : table}
      </TableCardSection>
      {pagination && <TablePagination pagination={pagination} />}
    </EzCard>
  );
};

EzTable.displayName = 'EzTable';

export default EzTable;
