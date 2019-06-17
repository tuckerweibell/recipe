---
name: Modal
title: Modal
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

```jsx live
<Component initialState={{isOpen: false}}>
  {({state, setState}) => (
    <React.Fragment>
      <button onClick={() => setState({isOpen: true})}>Button</button>
      <EzModal
        isOpen={state.isOpen}
        onDismiss={() => setState({isOpen: false})}
        dismissLabel="Dismiss"
        headerText="Header goes here"
      >
        Modal content goes here!
      </EzModal>
    </React.Fragment>
  )}
</Component>
```

### Editing modals

Editing modals can contain any form elements and should be kept as brief as possible. Long or complex forms should almost always be done in a new section/page instead of a modal. Editing modals are suitable for prompting the user to take a specific action before they are allowed proceed with their regular page interactions.

The `onSubmit` function will be called when the user clicking the button labelled by the provided `submitLabel`.

```jsx live
<Component initialState={{isOpen: false}}>
  {({state, setState}) => (
    <EzCard>
      <button onClick={() => setState({isOpen: true})}>Button</button>
      <EzModal
        isOpen={state.isOpen}
        onSubmit={() => {
          setState({isOpen: false, submitted: true});
        }}
        submitLabel="Submit"
        onDismiss={() => {
          setState({isOpen: false, submitted: false});
        }}
        dismissLabel="Dismiss"
        headerText="Header goes here"
      >
        Modal content goes here!
      </EzModal>
      <div>
        {'submitted' in state ? (
          state.submitted ? (
            <EzAlert headline="Submitted" use="success" />
          ) : (
            <EzAlert headline="Dismissed" use="info" />
          )
        ) : null}
      </div>
    </EzCard>
  )}
</Component>
```

### Confirmation modals

Use a confirmation modal to ask the user to confirm changes they’re about to make or confirm a destructive action they’re about to take.

- Use destructive buttons to clearly designate actions with destructive consequences
- Provide a cancel option with a clear label. Make sure the copy isn’t confusing when placed next to a destructive action (cancel order, cancel).
- Provide appropriate detail so the user can make an informed decision.

The `destructive` prop should be used to indicate that the `onSubmit` function is destructive.

```jsx live
<Component initialState={{isOpen: false}}>
  {({state, setState}) => (
    <React.Fragment>
      <button onClick={() => setState({isOpen: true})}>Button</button>
      <EzModal
        destructive
        isOpen={state.isOpen}
        onSubmit={() => setState({isOpen: false})}
        submitLabel="Submit"
        onDismiss={() => setState({isOpen: false})}
        dismissLabel="Dismiss"
        headerText="Header goes here"
      >
        Modal content goes here!
      </EzModal>
    </React.Fragment>
  )}
</Component>
```

### Asynchronous actions

When triggering an action that may take some time, is can be useful for the user to remain on the modal until the action has completed.

You can set the `isSubmitting` prop to indicate that the modal is processing the action.

```jsx live
<Component initialState={{isOpen: false, isSubmitting: false}}>
  {({state, setState}) => (
    <React.Fragment>
      <button onClick={() => setState({isOpen: true})}>Button</button>
      <EzModal
        isSubmitting={state.isSubmitting}
        isOpen={state.isOpen}
        onSubmit={() => {
          setState({isSubmitting: true});
          setTimeout(() => setState({isOpen: false, isSubmitting: false}), 2000);
        }}
        submitLabel="Submit"
        onDismiss={() => setState({isOpen: false})}
        dismissLabel="Dismiss"
        headerText="Header goes here"
      >
        Modal content goes here!
      </EzModal>
    </React.Fragment>
  )}
</Component>
```
