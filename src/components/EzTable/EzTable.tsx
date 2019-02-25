import React from 'react';
import {EzCard} from '../EzCard';
import {EzCheckbox} from '../EzCheckbox';
import {Table, Th, Td, TableCardSection} from './EzTable.styles';

interface OnRowClickData {
  item: object;
}

interface OnRowClick {
  (event?: object, data?: OnRowClickData): null;
}

interface OnBulkSelectClick {
  (event?: object): null;
}

interface RowIsSelected {
  (item: object): boolean;
}

type Column = {
  heading: string;
  accessor: any;
  numeric?: boolean;
};

type BulkSelectionDisabled = {onBulkSelectClick?: never; onRowClick?: never; rowIsSelected?: never};

type BulkSelectionProps = {
  onRowClick: OnRowClick;
  onBulkSelectClick: OnBulkSelectClick;
  rowIsSelected: RowIsSelected;
};

type TableProps = (BulkSelectionProps | BulkSelectionDisabled) & {
  title?: string;
  subtitle?: string;
  columns: Column[];
  items: any[];
};

const BulkSelector = ({items, onBulkSelectClick, rowIsSelected}) => (
  <Th numeric={false}>
    <EzCheckbox
      aria-label="Select all"
      onChange={event => onBulkSelectClick(event)}
      checked={items.every(item => rowIsSelected(item))}
    />
  </Th>
);

const RowSelector = ({item, onRowClick, rowIsSelected}) => (
  <Td numeric={false}>
    <EzCheckbox
      aria-label="Select row"
      checked={rowIsSelected(item)}
      onChange={event => onRowClick(event, {item})}
    />
  </Td>
);

const Thead = ({columns, items, onBulkSelectClick, rowIsSelected}) => (
  <thead>
    <tr>
      {onBulkSelectClick && (
        <BulkSelector
          items={items}
          onBulkSelectClick={onBulkSelectClick}
          rowIsSelected={rowIsSelected}
        />
      )}
      {columns.map(({heading, numeric}, cellIndex) => (
        <Th key={cellIndex} numeric={numeric}>
          {heading}
        </Th>
      ))}
    </tr>
  </thead>
);

const Tbody = ({columns, items, onBulkSelectClick, onRowClick, rowIsSelected}) => (
  <tbody>
    {items.map((item, rowIndex) => (
      <tr key={rowIndex}>
        {onBulkSelectClick && (
          <RowSelector item={item} rowIsSelected={rowIsSelected} onRowClick={onRowClick} />
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
const EzTable: React.SFC<TableProps> = ({
  title,
  subtitle,
  columns,
  items,
  onBulkSelectClick,
  onRowClick,
  rowIsSelected,
}) => {
  const table = (
    <Table>
      <Thead
        columns={columns}
        items={items}
        onBulkSelectClick={onBulkSelectClick}
        rowIsSelected={rowIsSelected}
      />
      <Tbody
        columns={columns}
        items={items}
        onBulkSelectClick={onBulkSelectClick}
        onRowClick={onRowClick}
        rowIsSelected={rowIsSelected}
      />
    </Table>
  );

  if (title) {
    return (
      <EzCard title={title} subtitle={subtitle}>
        <TableCardSection>{table}</TableCardSection>
      </EzCard>
    );
  }

  return table;
};

export default EzTable;
