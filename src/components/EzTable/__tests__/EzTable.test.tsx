import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import Component from 'react-component-component';
import markdown from '../EzTable.md';
import EzTable from '../EzTable';
import {EzPage, EzCard, EzHeading, EzAlert, EzTextStyle} from '../../index';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzTable, EzPage, EzCard, EzHeading, EzAlert, EzTextStyle, Component};

describe('EzTable', () => {
  visualSnapshots({markdown, scope});

  const columns = [
    {heading: 'Store name', accessor: ({item}) => item.store},
    {heading: 'Total sales', accessor: 'total', numeric: true},
    {heading: 'Average order value', accessor: 'average', numeric: true},
  ];
  const items = [
    {id: '#004', store: '123 Example Store', total: 23267, average: 327.79},
    {id: '#007', store: '45 Meadowview Lane', total: 22788, average: 367.55},
  ];

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzTable columns={columns} items={items} />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
