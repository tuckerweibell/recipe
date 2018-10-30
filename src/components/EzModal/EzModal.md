---
name: Modal
title: Modal
path: "/components/ez-modal"
---

Modals display content in a layer on top of the application. Modals should be used when it’s necessary to interrupt the user or ensure their attention is focused on a specific chunk of information. Modals can also be used when you’d like the user to accomplish a lower-priority action without changing the state of the page they’re working in.

---

## Best Practices
Modals should:
   * Provide the user with clear paths forward (a primary action) and out of the modal (close icon in the upper right). For confirmation modals, include a secondary “no” or “cancel” action.
   * Use a footer to provide a consistent location for key actions. For modals with many equally-weighted actions, a footer isn’t necessary and the actions can live in the body of the modal.

Modals should not:
   * Create a “wizard” flow with three or more steps. A secondary step with a back button is acceptable, but discouraged.
   * Don’t use a “cancel” or “close” button on informational modals or editing modals.

## Examples
### Informational
Informational modals are used to focus the user’s attention on a specific chunk of information. Use when providing information about something that’s not essential to completing the actions on the page (e.g. more information about ezDispatch), especially if content formatting is needed or there’s too much content to display in a tooltip.

### Editing
Editing modals can contain any form elements and should be kept as brief as possible. Long or complex forms should almost always be done in a new section/page instead of a modal.

### Confirmation
Use a confirmation modal to ask the user to confirm changes they’re about to make or confirm a destructive action they’re about to take.

#### Make sure to:
   * Use destructive buttons to clearly designate actions with destructive consequences
   * Provide a cancel option with a clear label. Make sure the copy isn’t confusing when placed next to a destructive action (cancel order, cancel).
   * Provide appropriate detail so the user can make an informed decision.

## Examples

Note all examples include a div with class appElement. In practice this div
will be your application's root element and does not need to reside directly
with your modal

### Basic Modal

```jsx live
<Component initialState={{isOpen: false}}>
  {({state, setState}) => (
    <React.Fragment>
      <div className="appElement">
        <button onClick={() => setState({isOpen: true})}>Button</button>
        <EzModal
          isOpen={state.isOpen}
          appElement=".appElement"
          onSubmit={() => {
            alert('Submitted!');
            setState({isOpen: false});
          }}
          submitLabel="Submit"
          onDismiss={() => {
            alert('Dismissed!');
            setState({isOpen: false});
          }}
          dismissLabel="Dismiss"
          headerText="Header goes here"
        >
          Modal content goes here!
        </EzModal>
      </div>
    </React.Fragment>
  )}
</Component>
```

### Only dismiss button

For a purely informational modal you can omit the submitLabel prop which will suppress the submit button

```jsx live
<Component initialState={{isOpen: false}}>
  {({state, setState}) => (
    <React.Fragment>
      <div className="appElement">
        <button onClick={() => setState({isOpen: true})}>Button</button>
        <EzModal
          isOpen={state.isOpen}
          appElement=".appElement"
          onDismiss={() => setState({isOpen: false})}
          dismissLabel="Dismiss"
          headerText="Header goes here"
        >
          Modal content goes here!
        </EzModal>
      </div>
    </React.Fragment>
  )}
</Component>
```

### Destructive

If the submit action is destructive you can set the destructive prop

```jsx live
<Component initialState={{isOpen: false}}>
  {({state, setState}) => (
    <React.Fragment>
      <div className="appElement">
        <button onClick={() => setState({isOpen: true})}>Button</button>
        <EzModal
          destructive
          isOpen={state.isOpen}
          appElement=".appElement"
          onSubmit={() => setState({isOpen: false})}
          submitLabel="Submit"
          onDismiss={() => setState({isOpen: false})}
          dismissLabel="Dismiss"
          headerText="Header goes here"
        >
          Modal content goes here!
        </EzModal>
      </div>
    </React.Fragment>
  )}
</Component>
```

### isSubmitting

You can set the isSubmitting to trigger the loading state for the modal

```jsx live
<Component initialState={{isOpen: false}}>
  {({state, setState}) => (
    <React.Fragment>
      <div className="appElement">
        <button onClick={() => setState({isOpen: true})}>Button</button>
        <EzModal
          isSubmitting
          isOpen={state.isOpen}
          appElement=".appElement"
          onSubmit={() => setState({isOpen: false})}
          submitLabel="Submit"
          onDismiss={() => setState({isOpen: false})}
          dismissLabel="Dismiss"
          headerText="Header goes here"
        >
          Modal content goes here!
        </EzModal>
      </div>
    </React.Fragment>
  )}
</Component>
```

---

## Related components

\*
