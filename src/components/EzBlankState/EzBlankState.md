---
name: EzBlankState
title: Blank state
path: '/components/ez-blank-state'
---

Blank states are used when a container has no data to show. This can happen when no results are returned while filtering, or for new users of the product when they haven't had time to create data yet. Blank should inform the user why they're seeing the blank state, and what action the user can take (if applicable) to resolve the blank state.

---

## Best Practices

Blank state should:

- Be the only thing visible in the card to focus the user's attention on the message. When using blanks state within a card, the card title, subheading and card actions must be removed and replaced with the blank state.
- Have a title that concisely explains the current state.
- Have a message with any additional details, and a clear course of action for the user when applicable.
- Use a primary button when the action is something the user can trigger.

Blank state should not:

- Be used on the page background. They need to appear in a container.
- Include more than one button.

---

## Content guidelines

Keep titles short and descriptive of the state. For example: "No orders match your filters". Avoid punctation at the end of the title unless you are using two sentences.

Messages should add more detail of why the blank state could be showing (if details beyond the title are needed) and suggest a path back to an ideal state. For example: "Try using less specific filters, or reset your filters to see more orders."

Primary action button should follow copy rules for buttons and help the user fix the problem. For example: "Reset filters"

When it's likely that the user has never had data in a container (never had an order, for example), using an image can draw attention to and explain a potentially new concept. You can also use an image to help reinforce complex concepts.

---

## Examples

### Blank state with optional action and image

```jsx
<EzCard>
  <EzBlankState
    imageSrc="../../images/review-star.svg"
    title="Wishing on a review?"
    message="If your heart is in your dream no request is too extreme… but maybe try again tomorrow."
    action={<EzButton use="primary">Request a Review</EzButton>}
  />
</EzCard>
```

### Blank State with no action

```jsx
<EzCard>
  <EzBlankState
    title="You don’t have any reviews yet"
    message="It can take customers a few days after they receive their order to write a review. As you get reviews, they'll appear here."
  />
</EzCard>
```
