---
name: EzSearchInput
title: Search input
path: '/components/ez-search-input'
---

Search inputs allow users to search for specific content by providing search terms or simple keywords.

---

## Best Practices

Search inputs should:

- Provide an accessible name for assistive technologies. Separate visual cues convey the purpose of the field to sighted users.
- Use the `placeholder` prop to provide additional context as to what the user can search for e.g. Search customers.

---

## Examples

### Basic Search input

Used to offer users the opportunity to find specific information from large data sets, or to filter on-screen collections.

```jsx
() => {
  const [searchTerms, setSearchTerms] = React.useState('');
  return (
    <>
      <EzSearchInput
        placeholder="Search"
        aria-label="Search customers"
        value={searchTerms}
        onChange={e => setSearchTerms(e.target.value)}
      />
      {searchTerms && (
        <>
          <br /> <p>You searched for: {searchTerms}</p>
        </>
      )}
    </>
  );
};
```

### Disabled Search input

Use the `disabled` prop to prevent users from being able to interact with the checkbox and to convey the inactive state to assistive technologies.

```jsx
<EzSearchInput placeholder="Search" aria-label="Search stores" disabled />
```

---

## Related components

- [EzField](/components/ez-field)
- [EzFormLayout](/components/ez-form-layout)
