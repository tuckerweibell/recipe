import React, {useState} from 'react';
import {EzCard} from '../EzCard';
import {EzCheckbox} from '../EzCheckbox';
import {Table, Th, Td, TableCardSection, ColumnSortIndicator} from './EzTable.styles';

type Column = {
  heading: string;
  accessor: any;
  numeric?: boolean;
  sortable?: boolean;
};

type BulkSelectionDisabled = {
  onBulkSelectClick?: never;
  onRowSelectClick?: never;
  isRowSelected?: never;
};

type BulkSelectionProps = {
  onRowSelectClick: (event: React.MouseEvent<HTMLInputElement>, value: any) => void;
  onBulkSelectClick: React.MouseEventHandler;
  isRowSelected: (item: any) => boolean;
};

type OnSortClickOptions = {
  column: Column;
  direction: 'asc' | 'desc';
};

type TableProps = (BulkSelectionProps | BulkSelectionDisabled) & {
  title?: string;
  subtitle?: string;
  columns: Column[];
  items: any[];
  onSortClick?: (event: React.MouseEvent<HTMLInputElement>, options: OnSortClickOptions) => void;
};

const handleSortClick = ({
  onSortClick,
  column,
  activeSortValue,
  updateActiveSortValue,
  sortDirection,
  updateSortDirection,
}) => event => {
  const newSortDirection =
    column.accessor === activeSortValue
      ? sortDirection === 'asc'
        ? 'desc'
        : 'asc'
      : sortDirection;

  updateSortDirection(newSortDirection);
  updateActiveSortValue(column.accessor);
  onSortClick(event, {column, direction: newSortDirection});
};

const Thead = ({columns, items, onBulkSelectClick, onSortClick, isRowSelected}) => {
  const [activeSortValue, updateActiveSortValue] = useState(null);
  const [sortDirection, updateSortDirection] = useState('asc');

  return (
    <thead>
      <tr>
        {onBulkSelectClick && (
          <Th>
            <EzCheckbox
              label="Select all"
              onChange={onBulkSelectClick}
              checked={items.every(isRowSelected)}
            />
          </Th>
        )}
        {columns.map((column, cellIndex) => (
          <Th
            key={cellIndex}
            numeric={column.numeric}
            clickable={column.sortable}
            onClick={
              column.sortable &&
              handleSortClick({
                column,
                onSortClick,
                activeSortValue,
                updateActiveSortValue,
                sortDirection,
                updateSortDirection,
              })
            }
          >
            {column.heading}{' '}
            {column.sortable && (
              <ColumnSortIndicator isActive={column.accessor === activeSortValue}>
                <svg
                  width="0.5em"
                  height="0.4em"
                  viewBox="0 0 1 1"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  {sortDirection === 'asc' ? (
                    <polygon points="0.5,0 1,1 0,1" />
                  ) : (
                    <polygon points="0.5,1 0,0 1,0" />
                  )}
                </svg>
              </ColumnSortIndicator>
            )}
          </Th>
        ))}
      </tr>
    </thead>
  );
};

const Tbody = ({columns, items, onRowSelectClick, isRowSelected}) => (
  <tbody>
    {items.map((item, rowIndex) => (
      <tr key={rowIndex}>
        {onRowSelectClick && (
          <Td>
            <EzCheckbox
              label="Select row"
              checked={isRowSelected(item)}
              onChange={event => onRowSelectClick(event, {item})}
            />
          </Td>
        )}
        {columns.map(({accessor, numeric}, cellIndex) => (
          <Td key={cellIndex} numeric={numeric}>
            {typeof accessor === 'function' ? accessor({item}) : item[accessor]}
          </Td>
        ))}
      </tr>
    ))}
  </tbody>
);

/**
 * Tables display information in a way that’s easy to scan,
 * so that users can look for patterns and insights.
 * They can be embedded in primary content, such as cards.
 */
const EzTable: React.FC<TableProps> = ({
  title,
  subtitle,
  columns,
  items,
  onBulkSelectClick,
  onRowSelectClick,
  isRowSelected,
  onSortClick,
}) => {
  const table = (
    <Table>
      <Thead
        columns={columns}
        items={items}
        onBulkSelectClick={onBulkSelectClick}
        onSortClick={onSortClick}
        isRowSelected={isRowSelected}
      />
      <Tbody
        columns={columns}
        items={items}
        onRowSelectClick={onRowSelectClick}
        isRowSelected={isRowSelected}
      />
    </Table>
  );

  if (!title) return table;

  return (
    <EzCard title={title} subtitle={subtitle}>
      <TableCardSection>{table}</TableCardSection>
    </EzCard>
  );
};

export default EzTable;
