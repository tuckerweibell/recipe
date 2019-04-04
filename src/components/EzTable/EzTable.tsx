import React from 'react';
import {EzCard} from '../EzCard';
import {EzCheckbox} from '../EzCheckbox';
import {TableProps} from './EzTable.types';
import {Table, Th, Td, TableCardSection} from './EzTable.styles';
import useSorting from './useSorting';

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

const Thead = ({columns, items, onBulkSelectClick, onSortClick, isRowSelected}) => {
  const {direction, onClick, isSorted} = useSorting();
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
        {columns.map((column, cellIndex) => {
          const {sortable, heading, numeric} = column;
          return (
            <Th
              key={cellIndex}
              numeric={numeric}
              clickable={sortable}
              sorted={isSorted(column)}
              onClick={event => onClick(event, column, onSortClick)}
            >
              <span>
                {heading} {sortable && <SortDirection direction={direction} />}
              </span>
            </Th>
          );
        })}
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
