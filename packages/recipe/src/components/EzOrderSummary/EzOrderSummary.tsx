import React, {FC, type ReactNode} from 'react';
import en from './en';
import {useTranslation} from '../../utils/hooks';
import theme from '../theme.config';
import {EzCard, EzCardSection} from '../EzCard';
import EzLayout from '../EzLayout';
import EzTable from '../EzTable';
import EzTextStyle from '../EzTextStyle';
import TableCardSection from '../EzTable/TableCardSection';

type LabelValuePair = {label: string; value: string};
type Price = string;

type Item = {
  name: string;
  price: Price;
  quantity: number;
  total: Price;
  options?: LabelValuePair[];
  specialInstructions?: string;
};

type Tableware = {
  options: LabelValuePair[];
};

type Summary = {
  lineItems: LabelValuePair[];
  total: Price;
  perHead?: Price;
};

type ActionsProps = {
  actions: ReactNode;
  title: string;
};

type OptionalTitle = {
  actions?: never;
  title?: string;
};

type Props = (ActionsProps | OptionalTitle) & {
  items: Item[];
  tableware: Tableware;
  subtitle?: string;
  summary: Summary;
};

/*
  With table-layout: auto, widths of table cells only shrink to the size of their content,
  so setting the width to a size smaller than the content size causes the cell to always fit
  the content and not stretch to fill the available space.
*/
const table = theme.css({
  '&& table td': {
    border: '$order-summary-table-border',
    verticalAlign: 'top',
    whiteSpace: 'normal',
  },
  '&& table tr th, && table tr td': {
    padding: '$order-summary-table-py $order-summary-table-px',
    backgroundColor: '$order-summary-table-bg',
  },
  'tbody tr:first-of-type td': {
    borderTopStyle: 'solid',
    borderColor: '$gray300',
    borderWidth: '$thin',
  },
  '&& table tr th:first-of-type, && table tr td:first-of-type': {
    paddingLeft: '$order-summary-table-pl',
  },
  '&& table tr th:last-of-type, && table tr td:last-of-type': {
    paddingRight: '$order-summary-table-pr',
  },
  'th:first-of-type, td:first-of-type': {
    width: '$order-summary-table-first-w',
  },
  'td:last-of-type': {
    width: '$order-summary-table-last-w',
  },
});

const card = theme.css({
  fontSize: '$order-summary-card-font-size',
  fontWeight: '$order-summary-card-font-weight',
});

// left padding here is the fixed width of the first column of the previous table
// plus the padding of the second column
const totals = theme.css({
  '&&': {
    paddingLeft: '$order-summary-totals-pl',
  },
  table: {
    width: '$order-summary-totals-table-w',
    marginLeft: '$order-summary-totals-ml',
    marginRight: '$order-summary-totals-mr',
  },
  'th, td': {
    textAlign: 'left',
    fontWeight: '$order-summary-totals-font-weight',
    width: '$order-summary-totals-cells-w',
    border: '$order-summary-totals-border',
    padding: '$order-summary-totals-py $order-summary-totals-px',
  },
  'td:last-of-type': {
    textAlign: 'right',
  },
  'tr:nth-of-type(even)': {
    backgroundColor: '$order-summary-totals-bg',
  },
});

const instructions = theme.css({
  backgroundColor: '$order-summary-instructions-bg',
  borderRadius: '$order-summary-instructions-radii',
  display: 'inline-block',
  fontSize: '$order-summary-instructions-font-size',
  marginTop: '$order-summary-instructions-mt',
  padding: '$order-summary-instructions-py $order-summary-instructions-px',
});

const Item: FC<{item: Item}> = ({item}) => {
  const {t} = useTranslation(en);
  return (
    <div>
      <div>
        {item.name ? (
          <span>
            {item.name} @ {item.price}
          </span>
        ) : (
          <span>{t('Tableware')}</span>
        )}
      </div>
      {item.options &&
        item.options.map((option, index) => (
          <div key={index}>
            <EzTextStyle use="subdued">
              {option.label}: {option.value}
            </EzTextStyle>
          </div>
        ))}
      {item.specialInstructions && (
        <div className={instructions()}>
          <div>
            <EzTextStyle use="strong">{t('Special Instructions:')}</EzTextStyle>
          </div>
          {item.specialInstructions}
        </div>
      )}
    </div>
  );
};

/**
 * An order summary is an at-a-glance breakdown of billable items that make up an order.
 */
const EzOrderSummary: FC<Props> = ({actions, items, subtitle, tableware, title, summary}) => {
  const {t} = useTranslation(en);
  return (
    <EzCard actions={actions} title={title} subtitle={subtitle}>
      <TableCardSection className={table()}>
        <EzTable
          columns={[
            {heading: t('Qty'), accessor: 'quantity', numeric: true},
            {heading: t('Item'), accessor: Item},
            {heading: t('Price'), accessor: 'total', numeric: true},
          ]}
          items={[...items, tableware]}
        />
      </TableCardSection>
      <EzCardSection className={totals()}>
        <table role="presentation">
          <tbody>
            {summary.lineItems.map(subtotal => (
              <tr key={subtotal.label}>
                <th>{subtotal.label}</th>
                <td>{subtotal.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <EzLayout layout="split">
            <span className={card()}>{t('Total')}</span>
            <span className={card()}>{summary.total}</span>
          </EzLayout>
          {summary.perHead && (
            <EzLayout layout="split">
              <EzTextStyle use="subdued">{t('Price per head')}</EzTextStyle>
              <EzTextStyle use="subdued">
                {t('{{perHead}}/person', {perHead: summary.perHead})}
              </EzTextStyle>
            </EzLayout>
          )}
        </div>
      </EzCardSection>
    </EzCard>
  );
};

export default EzOrderSummary;
