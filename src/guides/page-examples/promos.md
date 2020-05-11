---
name: promos-form
title: Create Promotion (Complex Form)
category: Form/Creation Screens
path: '/cookbook/promos'
tags: ['wide']
---

### New promotion example

The new promotion form demonstrates a more complex layout for form content than the simpler [lead form](/cookbook/lead-form), and also demonstrates a wider variety of form inputs: text inputs, date inputs, segmented controls, radio buttons and lastly an acknowledgement checkbox.

An additional detail to note, is the use of nested layouts to organize form content for presenting the "Promotion value" inputs. Logically the page is presenting two controls under the label "Promotion Value". Semantically however, the code is presenting two separate components, and visually hiding the label of one of them. An alternative approach (not explored here) might instead use a [custom input field](/components/ez-field#custom-input-field) to present both the text field and the segmented control under a single field label.

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
          title="Create New Promo"
          breadcrumb={{label: 'Back to Promotions', onClick}}
        />
        <EzPage>
          <EzBanner
            title="Welcome to ezOrdering Promotions"
            message="Create a promotion and share the code with your leads and customers. The promotion can be redeemed on orders placed through your ezOrdering page."
            link={{
              label: 'Learn more',
              href: '#',
              onClick,
            }}
            use="marketing"
            onDismiss={() => {}}
          />
          <EzCard
            title="Promo Overview"
            subtitle="Promos are self-funded and are available for use within both ezOrdering and Direct Entry."
          >
            <EzCardSection>
              <EzFormLayout>
                <EzLayout layout="equal" alignY="top">
                  <EzField
                    type="text"
                    label="Promo Name"
                    helperText="The name appears in ezManage and on customer receipts"
                  />
                  <EzField
                    type="text"
                    label="Unique Promotion Code"
                    helperText="The your customers will use to redeem the promotion"
                    maxLength={15}
                  />
                </EzLayout>
                <EzLayout layout="equal">
                  <EzLayout layout="equal" alignY="bottom">
                    <EzField type="text" label="Promotion Value" placeholder="0" />
                    <EzSegmentedControl
                      name="promo-value-unit"
                      label="Promotion value: unit"
                      labelPosition="hidden"
                      options={[
                        {label: '%', value: 'percentage'},
                        {label: '$', value: 'dollar'},
                      ]}
                      active="percentage"
                    />
                  </EzLayout>
                  <EzField type="text" label="Minimum Order Value (optional)" placeholder="$" />
                </EzLayout>
              </EzFormLayout>
            </EzCardSection>
            <EzCardSection
              title="Promo Schedule"
              subtitle={`Promotions become active upon creation. Best practice for distribution and tracking is 12 weeks or less.`}
            >
              <EzFormLayout>
                <EzLayout layout="equal">
                  <EzField
                    type="date"
                    label="End Date"
                    placeholder="Choose"
                    style={{width: '100%'}}
                  />
                  <EzField
                    type="radio"
                    bordered
                    label="Eligible Days of the Week"
                    options={[
                      {label: 'Weekdays only', value: 'weekdays'},
                      {label: 'All days of the week', value: 'all'},
                    ]}
                  />
                </EzLayout>
              </EzFormLayout>
            </EzCardSection>
            <EzCardSection title="Customer Details">
              <EzField
                type="radio"
                bordered
                label="Redemptions per Customer"
                options={[
                  {label: 'One per customer', value: 'once'},
                  {label: 'Unlimited', value: 'unlimited'},
                ]}
              />
            </EzCardSection>
            <EzCardSection title="Store Details">
              <EzField
                type="radio"
                bordered
                label="Participating Stores"
                options={[
                  {label: 'All stores', value: 'all'},
                  {label: 'Specific stores', value: 'specific'},
                ]}
              />
            </EzCardSection>
            <EzCardSection>
              <EzCheckbox
                acknowledgement
                label="I agree to fund this promotion"
                terms="I understand that the value of the promotion will be removed from my payment runs from ezCater wherever the promotion has been applied. I am aware that I am responsible for funding and marketing promotion, and that I can cancel this promotion at any time. I understand that this promotion cannot be redeemed by customers on ezCater Marketplace."
              />
            </EzCardSection>
            <EzCardSection>
              <EzLayout layout="basic">
                <EzButton use="primary">Finalize Promotion</EzButton>
                <EzButton use="secondary">Cancel</EzButton>
              </EzLayout>
            </EzCardSection>
          </EzCard>
        </EzPage>
      </EzNavigation>
    </EzAppLayout>
  );
};
```

---

## Related components

- [High level application layout](/components/ez-app-layout)
- [Navigation](/components/ez-navigation)
- [Page header](/components/ez-page-header)
- [Page](/components/ez-page)
- [Marketing banner](/components/ez-banner)
- [Card](/components/ez-card)
- [Card sections](/components/ez-card#card-with-sections)
- [Small-scale layout](/components/ez-layout)
- [Input fields](/components/ez-field)
- [Bordered multiple choice input](/components/ez-field#bordered-multiple-choice-input)
- [Segmented control](/components/ez-segmented-control)
- [Acknowledgement checkbox](/components/ez-checkbox#acknowledgement-checkbox)
- [Button](/components/ez-button)
