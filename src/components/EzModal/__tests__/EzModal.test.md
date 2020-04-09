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

### Confirmation modals

```jsx
<EzModal
  isOpen
  submitLabel="Submit"
  destructive
  dismissLabel="Dismiss"
  headerText="Header goes here"
>
  <p>Modal content goes here!</p>
</EzModal>
```
