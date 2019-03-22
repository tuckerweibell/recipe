import React from 'react';
import {EzCard} from '../EzCard';
import {EzCheckbox} from '../EzCheckbox';
import {Table, Th, Td, TableCardSection} from './EzTable.styles';

type Column = {
  heading: string;
  accessor: any;
  numeric?: boolean;
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

type TableProps = (BulkSelectionProps | BulkSelectionDisabled) & {
  title?: string;
  subtitle?: string;
  columns: Column[];
  items: any[];
};

const Thead = ({columns, items, onBulkSelectClick, isRowSelected}) => (
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
      {columns.map(({heading, numeric}, cellIndex) => (
        <Th key={cellIndex} numeric={numeric}>
          {heading}
        </Th>
      ))}
    </tr>
  </thead>
);

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
}) => {
  const table = (
    <Table>
      <Thead
        columns={columns}
        items={items}
        onBulkSelectClick={onBulkSelectClick}
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
