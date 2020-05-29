---
name: promos-form
title: Create Promotion (Complex Form)
category: Form/Creation Screens
path: '/cookbook/promos'
tags: ['wide']
---

## New promotion example

The new promotion form demonstrates a more complex layout for form content than the simpler [lead form](/cookbook/lead-form), and also demonstrates a wider variety of form inputs: text inputs, date inputs, segmented controls, radio buttons and an acknowledgement checkbox.

### Validation

This form uses the [Field validation API](/components/ez-field#field-with-validation-error) to prompt the user to fill out required fields and to ensure that values entered are within the expected range. The validation logic applied in this example has been intentionally kept simple to demonstrate the concepts.

Each field that requires validation accepts a `touched` prop and an `error` prop. These properties are used to determine whether or not to show an error and helps to avoid overwhelming users with error messages for fields they have not interacted with.

- The `error` provides a validation message to display to the user. The presence of a value indicates that the field is currently in an invalid state.
- The `touched` indicates that the user has interacted with or has visited the field. This let's us know that we're ready to display the validation outcome.

The code sample below demonstrates some example react hooks to maintain `error` and `touched` values for each field. In a real application, these functions would likely live in a separate module/package from the page. For example, both the [Formik](https://jaredpalmer.com/formik/) and [Final Form](https://final-form.org/react) libraries have similar React hooks for helping maintain the form state.

### Composite component layouts

One detail to note is the use of nested layouts to organize the form content presenting the "Promotion value" inputs. Logically the page is presenting two controls under the label "Promotion Value". Semantically, the example code is presenting two separate components and visually hiding the label of one of them. While this does make the form submission simpler by exposing two separate values in the submitted result, there may be accessibility implications since the visible label only relates to one of the two inputs.

An alternative approach (not explored here) might instead use a [custom input field](/components/ez-field#custom-input-field) to present both the text field and the segmented control under a single field label.

```jsx
() => {
  const onClick = e => e.preventDefault();

  // NOTE: This code is provided inline to demonstrate what is possible with the EzField validation API.
  // A React-hook like this would typically live in a separate module/package
  const useForm = () => {
    const values = React.useRef({});
    const [isSubmitting, setSubmitting] = React.useState(false);

    return {
      values: values.current,
      setFieldValue: (name, value) => {
        values.current[name] = value;
      },
      isSubmitting,
      setSubmitting,
    };
  };

  const {values, setFieldValue, isSubmitting, setSubmitting} = useForm();

  // NOTE: This code is provided inline to demonstrate what is possible with the EzField validation API.
  // A React-hook like this would typically live in a separate module/package
  const useField = nameOrOptions => {
    const options = typeof nameOrOptions === 'string' ? {name: nameOrOptions} : nameOrOptions;
    const {name, type} = options;
    const [value, setValue] = React.useState(options.initialValue);
    const [touched, setTouched] = React.useState(options.initialTouched || false);
    const fieldValue = type === 'radio' || type === 'checkbox' ? {checked: value} : {value};
    const validate = options.validate || (() => false);

    return {
      onChange: eventOrValue => {
        const target =
          eventOrValue && eventOrValue.target ? eventOrValue.target : {value: eventOrValue};
        setFieldValue(name, target.value);
        setValue(target.value);
      },
      onBlur: () => setTouched(true),
      name,
      touched: isSubmitting ? true : touched,
      error: validate(value),
    };
  };

  // these validation rules can be reused across multiple fields
  const required = value => (value ? undefined : 'Required');
  const isEmpty = value => value === null || value === undefined || value === '';
  const greaterThanZero = value =>
    !isEmpty(value) && value <= 0 ? 'Must be greater than zero' : false;
  const numeric = value => (!isEmpty(value) && isNaN(value) ? 'Must be a numeric value' : false);

  // helper function to combine validation rules
  const rules = (...rules) => value => rules.reduce((res, rule) => res || rule(value), false);

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
                    {...useField({name: 'promo-name', validate: required})}
                  />
                  <EzField
                    type="text"
                    label="Unique Promotion Code"
                    helperText="The your customers will use to redeem the promotion"
                    maxLength={15}
                    {...useField({name: 'unique-promo-code', validate: required})}
                  />
                </EzLayout>
                <EzLayout layout="equal">
                  <EzLayout layout="equal" alignY="bottom">
                    <EzField
                      type="text"
                      label="Promotion Value"
                      placeholder="0"
                      {...useField({
                        name: 'promo-value',
                        validate: rules(required, numeric, greaterThanZero),
                      })}
                    />
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
                  <EzField
                    type="text"
                    label="Minimum Order Value (optional)"
                    placeholder="$"
                    {...useField({
                      name: 'min-order-value',
                      validate: rules(numeric, greaterThanZero),
                    })}
                  />
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
                    {...useField({name: 'end-date', validate: required})}
                  />
                  <EzField
                    type="radio"
                    bordered
                    label="Eligible Days of the Week"
                    options={[
                      {label: 'Weekdays only', value: 'weekdays'},
                      {label: 'All days of the week', value: 'all'},
                    ]}
                    {...useField({name: 'eligible-days', type: 'radio'})}
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
                {...useField({name: 'redemptions', type: 'radio'})}
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
                {...useField({name: 'participating-stores', type: 'radio'})}
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
                <EzButton
                  use="primary"
                  onClick={() => {
                    setSubmitting(true);
                    alert(JSON.stringify(values, null, 2));
                  }}
                >
                  Finalize Promotion
                </EzButton>
                <EzButton use="secondary" onClick={() => window.location.reload()}>
                  Cancel
                </EzButton>
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
