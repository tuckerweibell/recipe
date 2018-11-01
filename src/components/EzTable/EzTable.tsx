import React from 'react';
import {EzCard} from '..';
import {Table, Th, Td, TableCardSection} from './EzTable.styles';

const Thead = ({columns}) => (
  <thead>
    <tr>
      {columns.map(({heading, numeric}, cellIndex) => (
        <Th key={cellIndex} numeric={numeric}>
          {heading}
        </Th>
      ))}
    </tr>
  </thead>
);

const Tbody = ({columns, items}) => (
  <tbody>
    {items.map((item, rowIndex) => (
      <tr key={rowIndex}>
        {columns.map(({accessor, numeric}, cellIndex) => (
          <Td key={cellIndex} numeric={numeric}>
            {typeof accessor === 'function' ? accessor({item}) : item[accessor]}
          </Td>
        ))}
      </tr>
    ))}
  </tbody>
);

type Column = {
  heading: string;
  accessor: any;
  numeric?: boolean;
};

type TableProps = {
  title?: string;
  subtitle?: string;
  columns: Column[];
  items: any[];
};

/**
 * Tables display information in a way that’s easy to scan,
 * so that users can look for patterns and insights.
 * They can be embedded in primary content, such as cards.
 */
const EzTable: React.SFC<TableProps> = ({title, subtitle, columns, items}) => {
  const table = (
    <Table>
      <Thead columns={columns} />
      <Tbody columns={columns} items={items} />
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
