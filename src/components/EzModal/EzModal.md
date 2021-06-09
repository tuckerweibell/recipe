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

- Create a “wizard” flow with two or more steps. Instead, favor full-page layouts for “wizard” style flows.

---

## Content

A standard Modal has the following anatomy:

|                                                                                                                                                                                 |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![Image illustrating through labels the component parts of a standard-style modal, including a title and empty content areas for body content and dialog actions.](Anatomy.svg) |

The areas within a modal can be populated either by providing the relevant props (`headerText`, `submitLabel`, `dismissLabel` etc), or by providing the following content components to your modal as **direct descendants** to the modal:

- [EzPreview](/components/ez-preview) (image or illustration)
- [EzHeader](/components/ez-header) (title and other header content e.g. card actions)
- [EzContent](/components/ez-content) (body)
- [Footer](/components/ez-footer).

The `EzHeader`, `EzContent`, and `EzFooter` content elements accept any renderable node, not just strings, allowing you to create dialogs for more complex workflows.

A modal can be shown or hidden using the `isOpen` prop.

## Example

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const close = React.useCallback(() => setIsOpen(false), []);

  return (
    <>
      <EzButton onClick={() => setIsOpen(true)}>Open</EzButton>
      <EzModal isOpen={isOpen} onDismiss={close}>
        <EzHeader>
          <EzHeading size="2">Submit Order</EzHeading>
        </EzHeader>
        <EzContent>Are you ready to submit this order?</EzContent>
        <EzFooter>
          <EzLayout layout="basic">
            <EzButton use="primary" onClick={close}>
              Confirm
            </EzButton>
            <EzButton onClick={close}>Cancel</EzButton>
          </EzLayout>
        </EzFooter>
      </EzModal>
    </>
  );
};
```

---

### Informational modal

Informational modals are used to focus the user’s attention on specific information.

Use this variant when presenting information that is not essential to the completion of the actions on the page. This variant can be useful when there is otherwise too much content to display in a tooltip, or where content formatting is needed.

Provide a both the `dismissLabel` prop and the `onDismiss` prop to present the user with a close button and enable the dialog to be automatically closed when clicking away or when pressing the escape key.

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <EzButton onClick={() => setIsOpen(true)}>Open</EzButton>
      <EzModal
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        dismissLabel="Dismiss"
        headerText="Header goes here"
      >
        Modal content goes here!
      </EzModal>
    </>
  );
};
```

### Editing modals

Editing modals can contain any form elements and should be kept as brief as possible. Long or complex forms should almost always be done in a new section/page instead of a modal. Editing modals are suitable for prompting the user to take a specific action before they are allowed proceed with their regular page interactions.

The `onSubmit` function will be called when the user clicking the button labelled by the provided `submitLabel`.

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(null);

  return (
    <>
      <EzButton onClick={() => setIsOpen(true)}>Open</EzButton>
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
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <EzButton onClick={() => setIsOpen(true)}>Open</EzButton>
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
    </>
  );
};
```

### Required action modals

Use a required action modal only when the user must accept or submit the modal information to move forward on the site.

- Use sparingly as the modal will block use of the site until submitted. Most use cases for required actions should original from our legal team.

A required action modal will be presented when both of the following conditions are met:

- The `dismissLabel` prop is not provided
- The `onDismiss` prop is not provided

The `submitLabel` prop and the corresponding `onSubmit` prop should be provided to handle the user's acknowledgement and close the dialog.

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(null);

  return (
    <>
      <EzButton onClick={() => setIsOpen(true)}>Open</EzButton>
      <EzModal
        isOpen={isOpen}
        submitLabel="Submit"
        headerText="Header goes here"
        onSubmit={() => {
          setSubmitted(true);
          setIsOpen(false);
        }}
      >
        Modal content goes here!
      </EzModal>
      <div>
        {submitted !== null ? (
          submitted ? (
            <EzAlert headline="Submitted" use="success" />
          ) : null
        ) : null}
      </div>
    </>
  );
};
```

### Asynchronous actions

When triggering an action that may take some time, is can be useful for the user to remain on the modal until the action has completed.

You can set the `isSubmitting` prop to indicate that the modal is processing the action.

```jsx
() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(null);

  return (
    <>
      <EzButton onClick={() => setIsOpen(true)}>Open</EzButton>
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
    </>
  );
};
```
