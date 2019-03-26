---
name: EzOrderSummary
title: Order summary
path: '/components/ez-order-summary'
---

An order summary is an at-a-glance breakdown of billable items that make up an order.

---

<EzAlert
  headline="This component is under development"
  tagline="There will likely be breaking changes to the API. Proceed with caution."
  use="warning"
/>

<br/>
<br/>

Features still in consideration include:

- Displaying per-unit prices
- Edit support
- Customizable content
- Customizable title and header content
- Customizable footer

---

## Best Practices

Order summaries should:

- Show pricing information across various line items
- Minimize clutter by only including values relevant to the data's purpose.
- Include a totals section to surface a summary of the values that factor into the total for the order. This should include any added costs or discounts applied to the order, such as taxes, delivery charges, coupons and/or gift cards.
- Be used within an [Page](/components/ez-page)

Order summaries should not:

- Be used for an actionable list. Line items should not link to details pages.
- Be used to present the Order without prices/totals (i.e for order prep)
- Be nested within a [Card](/components/ez-card). An order summary represents a cohesive set of content and should not be grouped with other card content.

## Examples

### Order summary

An order summary should be used to present an at-a-glance breakdown of billable items that make up an order.

```jsxwide
<EzPage>
  <EzOrderSummary
    title="Required heading"
    subtitle="Optional subtitle"
    actions={<EzButton use="secondary">Available card actions</EzButton>}
    items={[
      {
        name: 'Make-Your-Own Bowl',
        price: '$120.00',
        quantity: 2,
        total: '$240.00',
        options: [
          {label: 'Base', value: 'Vermicelli Noodles'},
          {label: 'Proteins', value: 'Ginger-Curry Chicken, Ginger-Curry Tofu'},
          {label: 'Dressings', value: 'Ginger Miso Dressing'},
          {label: 'This group includes', value: '4 Vegetarians'},
        ],
      },
      {
        name: 'Caesar Salad w/ Chicken',
        price: '$34.99',
        quantity: 1,
        total: '$34.99',
        specialInstructions: 'Salad dressing and croutons on the side please!',
      },
      {
        name: 'Chocolate Chunk Cookies',
        price: '$1.29',
        quantity: 14,
        total: '$18.06',
      },
    ]}
    tableware={{
      options: [{label: 'Include', value: 'Cups, Napkins, Plates, Utensils'}],
    }}
    summary={{
      lineItems: [
        {label: 'Subtotal', value: '$471.97'},
        {label: 'Delivery Fee', value: '$20.00'},
        {label: 'ezRewards Promo', value: '-$15.00'},
        {label: '7.0% Sales Tax', value: '$33.04'},
      ],
      total: '$510.01',
      perHead: '$13.03',
    }}
  />
</EzPage>
```
