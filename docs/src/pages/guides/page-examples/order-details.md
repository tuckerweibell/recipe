---
name: order-details
title: Order Details
category: Detail Screens
path: '/cookbook/order-details'
tags: ['wide']
---

Details pages form the basis of most screens in admin-style applications.

Details pages are usually divided into primary/secondary content columns, showing details for an individual entity such as an order, and keeping the most important content visually separated from less frequently used or non-essential information.

Details pages should:

- Use an [application layout](/components/ez-app-layout) component to structure top-level page content, such as primary navigation, page headers and the page content.
- Use a [page](/components/ez-page) component to host the page content and optionally divide the page content into columns.
- Use [card](/components/ez-card) components to further structure the page content, visually grouping related content on a page.
- Use a [page header](/components/ez-page-header) to call attention to the identifying information about the page. The page header may optionally offer status information or actions that may be important enough to appear before the page content.
- Offer a navigation path back to the parent page or list page using the [breadcrumb](/components/ez-page-header/#page-header-with-breadcrumb) in the page header.

---

### Order details example

```jsx
() => {
  const {FileDownload, Printer} = require('@ezcater/icons');
  const onClick = e => e.preventDefault();

  return (
    <EzAppLayout layout="centered">
      <EzNavigation
        home={{href: '#', label: 'Homepage', logo: {src: ezCaterLogoPath, width: 100}}}
        links={[
          {href: '#', label: 'Orders', onClick},
          {href: '#', label: 'Club Soda', onClick},
          {href: '#', label: 'Dashboard', onClick},
          {href: '#', label: 'Payments', onClick},
          {href: '#', label: 'Rankings', onClick},
          {href: '#', label: 'Customer Management', onClick},
          {href: '#', label: 'Performance', onClick},
          {href: '#', label: 'Reports', onClick},
          {href: '#', label: 'Reviews', onClick},
          {href: '#', label: 'Settings', onClick},
        ]}
        utilityLinks={[
          {href: '#', onClick, label: 'Chat'},
          {href: '#', onClick, label: '24/7 Support'},
        ]}
        userMenu={{
          links: [
            {href: '#', onClick, label: 'Settings'},
            {href: '#', onClick, label: 'Sign out'},
          ],
          name: 'Stefania Mallett',
        }}
      >
        <EzPageHeader
          title="Order # XYZ-123"
          breadcrumb={{label: 'Back to Orders', onClick: e => e.preventDefault()}}
          actions={
            <EzLayout layout={{base: 'stack', medium: 'basic'}}>
              <EzButton>Order Support</EzButton>
            </EzLayout>
          }
          subheader={
            <EzLayout layout={{base: 'equal', medium: 'right'}}>
              <EzButton variant="text" startIcon={<EzIcon icon={Printer} />}>
                Print Order
              </EzButton>

              <EzButton variant="text" startIcon={<EzIcon icon={FileDownload} />}>
                Download PDF
              </EzButton>
            </EzLayout>
          }
        />
        <EzPage>
          <EzFlashMessage use="success">
            <p>Store changed to #1060 - 123 Main Street, Atlanta, GA, 30309</p>
          </EzFlashMessage>
          <EzPageSection use="main">
            <EzCard title="Order Details">
              <EzLayout layout="tile" columns={{base: 2, medium: 1, large: 2}}>
                <div>
                  <EzLabel position="top" use="secondary">Order Status</EzLabel>
                  <EzChip label="Reconfirmed" variant="neutral" size="small" />
                </div>
                
                <div>
                  <EzLabel position="top" use="secondary">Date</EzLabel>
                  Thursday, January 16, 2020 at 10:45am
                </div>

                <div>
                  <EzLabel position="top" use="secondary">Headcount</EzLabel>
                  20 people
                </div>

                <div>
                  <EzLabel position="top" use="secondary">Confirmation Code</EzLabel>
                  89080676
                </div>

                <div>
                  <EzLabel position="top" use="secondary">Store</EzLabel>
                  <address style={{fontStyle: 'normal'}}>
                    <p>Atlanta GA - Midtown, #1058</p>
                    <p>933 Peachtree St NA, Suite 921, Atlanta, GA, 303309</p>
                  </address>
                </div>
              </EzLayout>
            </EzCard>

            <EzOrderSummary
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
          </EzPageSection>

          <EzPageSection use="aside">
            <EzCard title="Delivery Details">
              <EzLayout layout="tile" columns={{base: 2, medium: 1}}>
                <div>
                  <EzLabel position="top" use="secondary">Delivery Status</EzLabel>
                  Delivery
                </div>

                <div>
                  <EzLabel position="top" use="secondary">Location</EzLabel>
                  Next Gear Solutions
                </div>

                <div>
                  <EzLabel position="top" use="secondary">Address</EzLabel>
                  <EzLink onClick={onClick}>
                    <address style={{fontStyle: 'normal'}}>
                      <p>36790 Cremin Park</p>
                      <p>Atlanta, GA, 303309</p>
                    </address>
                  </EzLink>
                </div>

                <div>
                  <EzLabel position="top" use="secondary">Distance</EzLabel>
                  1.3 mi
                </div>

                <div>
                  <EzLabel position="top" use="secondary">Upon delivery ask for</EzLabel>
                  Jeff Brettell
                </div>

                <div>
                  <EzLabel position="top" use="secondary">Phone</EzLabel>
                  225-555-7146
                </div>

                <div>
                  <EzLabel position="top" use="secondary">Delivery instructions</EzLabel>
                  Building 400 of Colony Square, 17th floor, Suite 1740, Next Gear Solutions
                </div>
              </EzLayout>
            </EzCard>
          </EzPageSection>
        </EzPage>
      </EzNavigation>
    </EzAppLayout>
  );
};
```

---

## Related components

- [Order summary](/components/ez-order-summary)
- [High level application layout](/components/ez-app-layout)
- [Navigation](/components/ez-navigation)
- [Page header](/components/ez-page-header)
- [Page](/components/ez-page)
- [Page sections](/components/ez-page#page-sections)
- [Card](/components/ez-card)
- [Small-scale layout](/components/ez-layout)
- [Label](/components/ez-label)
- [Flash messages](/components/ez-flash-message)
