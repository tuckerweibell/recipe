import React from 'react';
import EzTable from '../EzTable';

describe('EzTable', () => {
  const columns = [
    {heading: 'Store name', accessor: ({item}) => item.store},
    {heading: 'Total sales', accessor: 'total', numeric: true},
    {heading: 'Average order value', accessor: 'average', numeric: true},
  ];
  const items = [
    {id: '#004', store: '123 Example Store', total: 23267, average: 327.79},
    {id: '#007', store: '45 Meadowview Lane', total: 22788, average: 367.55},
  ];

  it('should render with default styles', () => {
    const actual = create(<EzTable columns={columns} items={items} />);
    expect(actual).toMatchSnapshot();
  });

  it('should render with full bleed styles', () => {
    const actual = create(<EzTable title="My Table" columns={columns} items={items} />);
    expect(actual).toMatchSnapshot();
  });

  /**
   * Accessibility tests.
   */
  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzTable columns={columns} items={items} />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
