### Narrow order summary

An order summary should be used to present an at-a-glance breakdown of billable items that make up an order.

```jsx
<EzPage>
  <div style={{width: '400px'}}>
    <EzOrderSummary
      title="Order XYZ-123"
      subtitle="Optional subtitle"
      actions={<EzButton>Available card actions</EzButton>}
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
  </div>
</EzPage>
```
