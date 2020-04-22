import React from 'react';
import {ItemsSection, Total, SummarySection, SpecialInstructions} from './EzOrderSummary.styles';
import {EzCard, EzTable, EzTextStyle, EzLayout} from '..';
import en from './en';
import {useTranslation} from '../../utils/hooks';

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
  actions: React.ReactNode;
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

const Item = ({item}) => {
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
        <SpecialInstructions>
          <div>
            <EzTextStyle use="strong">{t('Special Instructions:')}</EzTextStyle>
          </div>
          {item.specialInstructions}
        </SpecialInstructions>
      )}
    </div>
  );
};

/**
 * An order summary is an at-a-glance breakdown of billable items that make up an order.
 */
const EzOrderSummary: React.FC<Props> = ({actions, items, subtitle, tableware, title, summary}) => {
  const {t} = useTranslation(en);
  return (
    <EzCard actions={actions} title={title} subtitle={subtitle}>
      <ItemsSection>
        <EzTable
          columns={[
            {heading: t('Qty'), accessor: 'quantity', numeric: true},
            {heading: t('Item'), accessor: Item},
            {heading: t('Price'), accessor: 'total', numeric: true},
          ]}
          items={[...items, tableware]}
        />
      </ItemsSection>
      <SummarySection>
        <table>
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
            <Total>{t('Total')}</Total>
            <Total>{summary.total}</Total>
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
      </SummarySection>
    </EzCard>
  );
};

export default EzOrderSummary;
