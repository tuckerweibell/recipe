### EzModal vertically spaces content

```jsx
<EzModal
  isOpen={true}
  onDismiss={() => {}}
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
      <EzButton use="primary" onClick={close}>
        Confirm
      </EzButton>
      <EzButton onClick={close}>Cancel</EzButton>
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
      <EzButton use="primary" onClick={close}>
        Confirm
      </EzButton>
      <EzButton onClick={close}>Cancel</EzButton>
    </EzLayout>
  </EzFooter>
</EzModal>
```
