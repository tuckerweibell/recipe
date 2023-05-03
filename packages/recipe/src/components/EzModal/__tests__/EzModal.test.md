### EzModal vertically spaces content

```jsx
<EzModal
  isOpen={true}
  onDismiss={() => {}}
  onSubmit={() => {}}
  submitLabel="Submit"
  dismissLabel="Dismiss"
  headerText="Header goes here"
>
  <p>Line 1</p>
  <p>Line 2</p>
  <p>Modal content goes here!</p>
</EzModal>
```

### Informational modal

```jsx
<EzModal isOpen dismissLabel="Dismiss" onDismiss={() => {}} headerText="Header goes here">
  <p>Modal content goes here!</p>
</EzModal>
```

### Confirmation modals

```jsx
<EzModal
  isOpen
  submitLabel="Submit"
  destructive
  dismissLabel="Dismiss"
  onDismiss={() => {}}
  onSubmit={() => {}}
  headerText="Header goes here"
>
  <p>Modal content goes here!</p>
</EzModal>
```

### Required action modals

```jsx
<EzModal isOpen submitLabel="Submit" headerText="Header goes here">
  <p>Modal content goes here!</p>
</EzModal>
```

### Modal with header content and footer

```jsx
<EzModal isOpen onDismiss={() => {}}>
  <EzHeader>
    <EzHeading size="2">Header goes here</EzHeading>
  </EzHeader>
  <EzContent>Modal content goes here!</EzContent>
  <EzFooter>
    <EzLayout layout="basic">
      <EzButton onClick={close}>Confirm</EzButton>
      <EzButton variant="outlined" onClick={close}>
        Cancel
      </EzButton>
    </EzLayout>
  </EzFooter>
</EzModal>
```

### Modal with only content

Note: this isn't an typical configuration (a header is usually expected).

```jsx
<EzModal isOpen onDismiss={() => {}}>
  <EzContent>Modal content goes here!</EzContent>
</EzModal>
```

### Modal with only content and header

```jsx
<EzModal isOpen onDismiss={() => {}}>
  <EzHeader>
    <EzHeading size="2">Header goes here</EzHeading>
  </EzHeader>
  <EzContent>Modal content goes here!</EzContent>
</EzModal>
```

### Modal with only content and footer

```jsx
<EzModal isOpen onDismiss={() => {}}>
  <EzContent>Modal content goes here!</EzContent>
  <EzFooter>
    <EzLayout layout="basic">
      <EzButton onClick={close}>Confirm</EzButton>
      <EzButton variant="outlined" onClick={close}>
        Cancel
      </EzButton>
    </EzLayout>
  </EzFooter>
</EzModal>
```

### Modal with preview

```jsx
<EzModal isOpen onDismiss={() => {}}>
  <EzPreview>
    <picture>
      <img
        src="https://dummyimage.com/800x400/00b373/fff"
        alt=""
        style={{width: '100%', maxHeight: 300, objectFit: 'cover'}}
      />
    </picture>
  </EzPreview>
  <EzHeader>
    <EzHeading size="2">Header goes here</EzHeading>
  </EzHeader>
  <EzContent>Modal content goes here!</EzContent>
  <EzFooter>
    <EzLayout layout="basic">
      <EzButton onClick={close}>Confirm</EzButton>
      <EzButton variant="outlined" onClick={close}>
        Cancel
      </EzButton>
    </EzLayout>
  </EzFooter>
</EzModal>
```

### Modal appears above sticky content with z-index

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div style={{height: '600px'}}>
      <EzButton onClick={() => setIsOpen(true)}>Open</EzButton>
      <div
        style={{
          height: '200px',
          width: '400px',
          backgroundColor: '#00b373',
          color: 'white',
          marginTop: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          position: 'sticky',
        }}
      >
        A sticky container that should appear behind the modal
      </div>

      <EzModal
        isOpen={isOpen}
        dismissLabel="Dismiss"
        onDismiss={() => setIsOpen(false)}
        headerText="Header goes here"
      >
        <p>Modal content goes here!</p>
      </EzModal>
    </div>
  );
};
```

### Date picker selection appears above the modal

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [date, setDate] = React.useState('01/01/2020');
  const containerRef = React.createRef();

  return (
    <div style={{minHeight: 800}}>
      <EzButton onClick={() => setIsOpen(true)}>Open</EzButton>
      <EzModal
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        dismissLabel="Dismiss"
        headerText="Header goes here"
      >
        <div ref={containerRef}>
          <Open containerRef={containerRef}>
            <EzField
              type="date"
              value={date}
              label="Select delivery date"
              helperText="This is the date your food will be delivered."
              onChange={value => setDate(value)}
            />
          </Open>
        </div>
      </EzModal>
    </div>
  );
};
```

### Time picker selection appears above the modal

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [time, setTime] = React.useState('12:00 pm');
  const containerRef = React.createRef();

  return (
    <div style={{minHeight: 800}}>
      <EzButton onClick={() => setIsOpen(true)}>Open</EzButton>
      <EzModal
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        dismissLabel="Dismiss"
        headerText="Header goes here"
      >
        <div ref={containerRef}>
          <Open containerRef={containerRef}>
            <EzField
              type="time"
              value={time}
              start="9:00 am"
              end="5:00 pm"
              step={30}
              label="Select delivery time"
              placeholder="Choose..."
              helperText="This is the time your food will be delivered."
              onChange={e => setTime(e.target.value)}
            />
          </Open>
        </div>
      </EzModal>
    </div>
  );
};
```

### Tooltip appears above the modal

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(true);
  const containerRef = React.createRef();

  return (
    <div style={{minHeight: 600}}>
      <EzButton onClick={() => setIsOpen(true)}>Open</EzButton>
      <EzModal
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        dismissLabel="Dismiss"
        headerText="Header goes here"
      >
        <div ref={containerRef}>
          <Focus containerRef={containerRef}>
            <EzTooltip message="This is some tooltip content" position="horizontal">
              <EzField
                label="Input label"
                maxLength={120}
                placeholder="Hover here to test tooltips"
                touched
              />
            </EzTooltip>
          </Focus>
        </div>
      </EzModal>
    </div>
  );
};
```

### Select appears above the modal

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [choice, setChoice] = React.useState(null);
  const containerRef = React.createRef();

  return (
    <div style={{minHeight: 740}}>
      <EzButton onClick={() => setIsOpen(true)}>Open</EzButton>
      <EzModal
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        dismissLabel="Dismiss"
        headerText="Header goes here"
      >
        <div ref={containerRef}>
          <Open containerRef={containerRef}>
            <EzField
              type="select"
              label="Select dropdown"
              placeholder="Choose..."
              options={[
                {label: 'All Upcoming', value: 'upcoming'},
                {label: 'Today', value: 'today'},
                {label: 'Tomorrow', value: 'tomorrow'},
                {label: 'All Time', value: 'all'},
                {label: 'Yesterday', value: 'yesterday'},
                {label: 'Last 7 Days', value: 'week'},
                {label: 'This Month', value: 'month'},
              ]}
              value={choice}
              onSelectionChange={setChoice}
            />
          </Open>
        </div>
      </EzModal>
    </div>
  );
};
```

### Autosuggest appears above the modal

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [suggestChoice, setSuggestChoice] = React.useState(null);
  const cities = useCitySearch(searchTerm);
  const containerRef = React.createRef();

  function sort(a, b) {
    // if there is a non-empty search term, sort by earliest match
    if (searchTerm.trim() !== '') {
      const indexA = a.toLowerCase().indexOf(searchTerm.toLowerCase());
      const indexB = b.toLowerCase().indexOf(searchTerm.toLowerCase());
      return indexA - indexB;
    }
    // retain provided ordering
    return 0;
  }

  function useCitySearch(searchTerm) {
    // call your server API here to fetch results
    const data = [
      'Montgomery, Alabama',
      'Phoenix, Arizona',
      'Sacramento, California',
      'Denver, Colorado',
      'Hartford, Connecticut',
      'Dover, Delaware',
      'Tallahassee, Florida',
      'Atlanta, Georgia',
      'Honolulu, Hawaii',
      'Boise, Idaho',
      'Augusta, Maine',
      'Boston, Massachusetts',
      'Lansing, Michigan',
      'Concord, New Hampshire',
      'Trenton, New Jersey',
      'Santa Fe, New Mexico',
      'Albany, New York',
      'Providence, Rhode Island',
      'Austin, Texas',
      'Olympia, Washington',
    ];

    data.sort(sort);

    return data.filter(city => city.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  return (
    <div style={{minHeight: 800}}>
      <EzButton onClick={() => setIsOpen(true)}>Open</EzButton>
      <EzModal
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        dismissLabel="Dismiss"
        headerText="Header goes here"
      >
        <div ref={containerRef}>
          <Open containerRef={containerRef}>
            <EzField
              type="autosuggest"
              label="City"
              placeholder="Select a city..."
              options={cities.map(value => ({label: value, value}))}
              value={suggestChoice}
              onSelectionChange={setSuggestChoice}
              onFilter={setSearchTerm}
            />
          </Open>
        </div>
      </EzModal>
    </div>
  );
};
```
