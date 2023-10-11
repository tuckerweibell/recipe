import React from 'react';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import {EzTableProps} from '../EzTable.types';
import EzButton from '../../EzButton';
import EzIcon from '../../EzIcon';
import EzLayout from '../../EzLayout';
import EzTable from '../EzTable';
import EzTooltip from '../../EzTooltip';
import getJSXString from '../../../utils/getJSXString';

const ActionButtons = (
  <EzLayout layout="right">
    <EzButton fontSize="small" variant="text">
      View
    </EzButton>
    <EzButton color="destructive" fontSize="small" variant="text">
      Delete
    </EzButton>
  </EzLayout>
);

export const EXAMPLE_COLUMNS = [
  {heading: 'Store name', key: 'store'},
  {
    heading: 'Total sales',
    key: 'total',
    icon: (
      <EzTooltip message="Gross sales in the last 12 months">
        <EzIcon icon={faCircleInfo} size="inherit" />
      </EzTooltip>
    ),
    numeric: true,
  },
  {heading: 'Average order value', key: 'average', numeric: true},
  {heading: '', key: 'actions'},
];

export const EXAMPLE_ITEMS = [
  {id: '#001', store: 'Ten Forward', total: 23267, average: 327.79, actions: ActionButtons},
  {id: '#002', store: "Sisko's Kitchen", total: 22788, average: 367.55, actions: ActionButtons},
  {id: '#003', store: "Quark's Bar", total: 12392, average: 210.21, actions: ActionButtons},
  {id: '#004', store: 'Betazoid Bakery', total: 13085, average: 184.29, actions: ActionButtons},
  {id: '#005', store: "Neelix's Nutrients", total: 16209, average: 205.38, actions: ActionButtons},
  {id: '#006', store: 'Orion Dive Bar', total: 51730, average: 460.13, actions: ActionButtons},
  {id: '#007', store: 'Lower Decks Froyo', total: 64021, average: 82.42, actions: ActionButtons},
  {id: '#008', store: "Pike's Home Cooking", total: 31472, average: 429.51, actions: ActionButtons},
  {id: '#009', store: 'Tribble Tuffles', total: 92742, average: 722.64, actions: ActionButtons},
  {id: '#010', store: 'Plomeek Soup', total: 72084, average: 98.29, actions: ActionButtons},
  {id: '#011', store: "T'Pril's", total: 82012, average: 103.92, actions: ActionButtons},
  {id: '#012', store: 'Bloodwine & Gagh', total: 1922, average: 10.32, actions: ActionButtons},
];

export const getColumns = (keys = []) => EXAMPLE_COLUMNS.filter(({key}) => keys.includes(key));
export const getItems = (keys = [], totalItems = 3) =>
  EXAMPLE_ITEMS.map(item =>
    Object.fromEntries(Object.entries(item).filter(([key]) => key === 'id' || keys.includes(key)))
  ).slice(0, totalItems);

const EzTableExample = (keys: string[], args?: EzTableProps) => {
  return <EzTable columns={getColumns(keys)} items={getItems(keys)} {...args} />;
};

const EzTableExampleJSX = (keys: string[], args?: EzTableProps) =>
  getJSXString(EzTableExample(keys, args));

export {EzTableExample, EzTableExampleJSX};
