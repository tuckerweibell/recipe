---
name: lead-form
title: Create Lead (Simple Form)
category: Form/Creation Screens
path: '/cookbook/lead-form'
tags: ['wide']
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
        <EzPageHeader title="Create New Lead" breadcrumb={{label: 'Back to Leads', onClick}} />
        <EzPage>
          <EzCard title="Contact Information">
            <EzCardSection>
              <EzFormLayout>
                <EzLayout layout="equal">
                  <EzField type="text" label="First Name" />
                  <EzField type="text" label="Last Name" />
                </EzLayout>
                <EzLayout layout="equal">
                  <EzField type="text" label="Email" placeholder="example@ezcater.com" />
                  <EzField type="text" label="Phone Number (optional)" placeholder="555-55-5555" />
                </EzLayout>
                <EzField type="text" label="Location (optional)" />
              </EzFormLayout>
            </EzCardSection>
            <EzCardSection>
              <EzHeading size="3">Work Info</EzHeading>
              <EzFormLayout>
                <EzLayout layout="equal">
                  <EzField type="text" label="Title (optional)" placeholder="Office Manager" />
                  <EzField type="text" label="Company (optional)" placeholder="Acme Industries" />
                </EzLayout>
                <EzLayout layout="equal">
                  <EzField
                    type="select"
                    label="Industry (optional)"
                    placeholder="Choose..."
                    options={[
                      {label: 'Accounting', value: 'a'},
                      {label: 'Advertising', value: 'b'},
                      {label: 'Construction', value: 'c'},
                      {label: 'Consulting', value: 'd'},
                      {label: 'Education', value: 'e'},
                      {label: 'Finance', value: 'f'},
                      {label: 'Healthcare', value: 'g'},
                    ]}
                  />
                  <EzField type="text" label="Tax Exempt ID (optional)" placeholder="0000000" />
                </EzLayout>
                <EzField type="text" label="Location (optional)" />
              </EzFormLayout>
            </EzCardSection>
            <EzCardSection>
              <EzHeading size="3">Notes</EzHeading>
              <EzFormLayout>
                <EzField
                  type="textarea"
                  label="Internal Note (optional)"
                  placeholder="e.g. Connected on the phone yesterday. Ready to place an order next week."
                  size="medium"
                  helperText="Notes will display on this contact's activity timeline for you and your teammates to reference. Please note: this is not a designated spot for credit card numbers or other sensitive information."
                  maxLength={2000}
                />
              </EzFormLayout>
            </EzCardSection>
            <EzCardSection>
              <EzButton use="primary">Save</EzButton>
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
- [Card](/components/ez-card)
- [Card sections](/components/ez-card#card-with-sections)
- [Small-scale layout](/components/ez-layout)
- [Input Fields](/components/ez-field)
- [Button](/components/ez-button)
