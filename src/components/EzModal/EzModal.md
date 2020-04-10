---
name: EzModal
title: Modal
category: Overlays
path: '/components/ez-modal'
---

Modals display content in a layer on top of the application. Modals should be used when it’s necessary to interrupt the user or ensure their attention is focused on specific information. Modals can also be used when you’d like the user to accomplish a lower-priority action without changing the state of the page they’re working in.

---

## Best Practices

Modals should:

- Provide the user with clear paths forward and/or out of the modal.
- Provide tabbable elements in the dialog context when providing content for editing.

Modals should not:

- Create a “wizard” flow with two or more steps.

---

## Examples

### Informational modal

Informational modals are used to focus the user’s attention on specific information. Use when providing information about something that’s not essential to completing the actions on the page, especially if content formatting is needed or there’s too much content to display in a tooltip.

The `isOpen` prop controls whether or not the dialog is displayed to the user, and will only render the `children` content when `isOpen` is `true`.

A title for the modal should be provided by using the `headerText` prop.

When the user clicks outside the modal, hits the escape key, or hits close, the `onDismiss` function will be called. The user may also trigger the `onDismiss` function by clicking the button labelled by the provided `dismissLabel`.

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(
    function openModalUponClosing() {
      const id = setTimeout(setIsOpen, 1000, true);
      return () => clearTimeout(id);
    },
    [isOpen]
  );

  return (
    <EzModal
      isOpen={isOpen}
      onDismiss={() => setIsOpen(false)}
      dismissLabel="Dismiss"
      headerText="Header goes here"
    >
      Modal content goes here!
    </EzModal>
  );
};
```

### Editing modals

Editing modals can contain any form elements and should be kept as brief as possible. Long or complex forms should almost always be done in a new section/page instead of a modal. Editing modals are suitable for prompting the user to take a specific action before they are allowed proceed with their regular page interactions.

The `onSubmit` function will be called when the user clicking the button labelled by the provided `submitLabel`.

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [submitted, setSubmitted] = React.useState(null);

  React.useEffect(
    function openModalUponClosing() {
      const id = setTimeout(setIsOpen, 1000, true);
      return () => clearTimeout(id);
    },
    [isOpen]
  );

  return (
    <>
      <EzModal
        isOpen={isOpen}
        onSubmit={() => {
          setSubmitted(true);
          setIsOpen(false);
        }}
        submitLabel="Submit"
        onDismiss={() => {
          setSubmitted(false);
          setIsOpen(false);
        }}
        dismissLabel="Dismiss"
        headerText="Header goes here"
      >
        Modal content goes here!
      </EzModal>
      <div>
        {submitted !== null ? (
          submitted ? (
            <EzAlert headline="Submitted" use="success" />
          ) : (
            <EzAlert headline="Dismissed" use="info" />
          )
        ) : null}
      </div>
    </>
  );
};
```

### Confirmation modals

Use a confirmation modal to ask the user to confirm changes they’re about to make or confirm a destructive action they’re about to take.

- Use destructive buttons to clearly designate actions with destructive consequences
- Provide a cancel option with a clear label. Make sure the copy isn’t confusing when placed next to a destructive action (cancel order, cancel).
- Provide appropriate detail so the user can make an informed decision.

The `destructive` prop should be used to indicate that the `onSubmit` function is destructive.

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(
    function openModalUponClosing() {
      const id = setTimeout(setIsOpen, 1000, true);
      return () => clearTimeout(id);
    },
    [isOpen]
  );

  return (
    <EzModal
      destructive
      isOpen={isOpen}
      onSubmit={() => setIsOpen(false)}
      submitLabel="Submit"
      onDismiss={() => setIsOpen(false)}
      dismissLabel="Dismiss"
      headerText="Header goes here"
    >
      Modal content goes here!
    </EzModal>
  );
};
```

### Asynchronous actions

When triggering an action that may take some time, is can be useful for the user to remain on the modal until the action has completed.

You can set the `isSubmitting` prop to indicate that the modal is processing the action.

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(null);

  React.useEffect(
    function openModalUponClosing() {
      const id = setTimeout(setIsOpen, 1000, true);
      return () => clearTimeout(id);
    },
    [isOpen]
  );

  return (
    <EzModal
      isSubmitting={isSubmitting}
      isOpen={isOpen}
      onSubmit={() => {
        setIsSubmitting(true);
        setTimeout(() => {
          setIsSubmitting(false);
          setIsOpen(false);
        }, 2000);
      }}
      submitLabel="Submit"
      onDismiss={() => setIsOpen(false)}
      dismissLabel="Dismiss"
      headerText="Header goes here"
    >
      Modal content goes here!
    </EzModal>
  );
};
```
