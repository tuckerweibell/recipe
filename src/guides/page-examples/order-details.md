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
              <EzButton use="primary">Order Support</EzButton>
            </EzLayout>
          }
          subheader={
            <EzLayout layout={{base: 'equal', medium: 'right'}}>
              <EzButton
                use="tertiary"
                icon={
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.06295 4.07865C2.06295 3.87385 2.21417 3.70787 2.40075 3.70787H3.46066C3.64712 3.70787 3.79846 3.87385 3.79846 4.07865C3.79846 4.28345 3.64712 4.44944 3.46066 4.44944H2.40075C2.21417 4.44944 2.06295 4.28345 2.06295 4.07865ZM9.45842 7.53933H8.12197L7.98009 6.53178C7.95093 6.32043 7.78529 6.17978 7.5905 6.17978H2.76884C2.57404 6.17978 2.40841 6.32043 2.37924 6.53178L2.23737 7.53933H0.900802V2.8427H9.45842V7.53933ZM2.68 10.1348L3.10743 7.04494H7.25191L7.67934 10.1348H2.68ZM3.37801 1.85393H6.98122V0.741573H3.37801V1.85393ZM9.90882 1.85393H7.65682V0.370787C7.65682 0.165989 7.55818 0 7.3716 0H2.98774C2.80127 0 2.70241 0.165989 2.70241 0.370787V1.85393H0.450401C0.201667 1.85393 0 2.06627 0 2.33929V8.00961C0 8.28263 0.201667 8.52809 0.450401 8.52809H2.10033L1.83189 10.4526C1.81455 10.5773 1.84766 10.7288 1.92254 10.8245C1.99742 10.9202 2.10664 11 2.22149 11H8.13796C8.25281 11 8.36192 10.9141 8.4368 10.8184C8.51168 10.7228 8.54478 10.5928 8.52755 10.468L8.259 8.52809H9.90882C10.1576 8.52809 10.3592 8.28263 10.3592 8.00961V2.33929C10.3592 2.06627 10.1576 1.85393 9.90882 1.85393Z"
                      fill="#8B99A6"
                    />
                  </svg>
                }
              >
                Print Order
              </EzButton>
              <EzButton
                use="tertiary"
                icon={
                  <svg viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.0922 6.4042C4.18006 6.5002 4.30045 6.5543 4.42607 6.5543C4.55178 6.5543 4.67207 6.5002 4.76002 6.4042L6.62441 4.3676C6.80499 4.1704 6.80191 3.8538 6.6175 3.6605C6.43308 3.4674 6.13717 3.4706 5.95659 3.6679L4.8934 4.8293V0.5C4.8934 0.2239 4.68413 0 4.42607 0C4.168 0 3.95873 0.2239 3.95873 0.5V4.8292L2.89573 3.6679C2.71515 3.4706 2.41942 3.4674 2.23482 3.6605C2.05051 3.8538 2.04742 4.1703 2.228 4.3676L4.0922 6.4042ZM8.44515 5.7771V8.5C8.44515 8.7761 8.23588 9 7.97782 9H0.874318C0.616255 9 0.406982 8.7761 0.406982 8.5V5.7771C0.406982 5.501 0.616255 5.2771 0.874318 5.2771C1.13238 5.2771 1.34165 5.501 1.34165 5.7771V8H7.51048V5.7771C7.51048 5.501 7.71975 5.2771 7.97782 5.2771C8.23588 5.2771 8.44515 5.501 8.44515 5.7771V5.7771Z"
                      fill="#8B99A6"
                    />
                  </svg>
                }
              >
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
                <EzLabelledItem position="top" size="small" title="Order Status">
                  <EzStatus text="Reconfirmed" use="neutral" size="small" />
                </EzLabelledItem>

                <EzLabelledItem position="top" size="small" title="Date">
                  Thursday, January 16, 2020 at 10:45am
                </EzLabelledItem>

                <EzLabelledItem position="top" size="small" title="Headcount">
                  20 people
                </EzLabelledItem>

                <EzLabelledItem position="top" size="small" title="Confirmation Code">
                  89080676
                </EzLabelledItem>

                <EzLabelledItem position="top" size="small" title="Store">
                  <address style={{fontStyle: 'normal'}}>
                    <p>Atlanta GA - Midtown, #1058</p>
                    <p>933 Peachtree St NA, Suite 921, Atlanta, GA, 303309</p>
                  </address>
                </EzLabelledItem>
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
                <EzLabelledItem position="top" size="small" title="Delivery Status">
                  Delivery
                </EzLabelledItem>
                <EzLabelledItem position="top" size="small" title="Location">
                  Next Gear Solutions
                </EzLabelledItem>
                <EzLabelledItem position="top" size="small" title="Address">
                  <EzLink href="#" onClick={onClick}>
                    <address style={{fontStyle: 'normal'}}>
                      <p>36790 Cremin Park</p>
                      <p>Atlanta, GA, 303309</p>
                    </address>
                  </EzLink>
                </EzLabelledItem>
                <EzLabelledItem position="top" size="small" title="Distance">
                  1.3 mi
                </EzLabelledItem>
                <EzLabelledItem position="top" size="small" title="Upon delivery ask for">
                  Jeff Brettell
                </EzLabelledItem>
                <EzLabelledItem position="top" size="small" title="Phone">
                  225-555-7146
                </EzLabelledItem>
                <EzLabelledItem position="top" size="small" title="Delivery instructions">
                  Building 400 of Colony Square, 17th floor, Suite 1740, Next Gear Solutions
                </EzLabelledItem>
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
- [Labelled Item](/components/ez-labelled-item)
- [Flash messages](/components/ez-flash-message)
