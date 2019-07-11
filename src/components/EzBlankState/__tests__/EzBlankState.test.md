## Examples

### Blank state with optional action and image

```jsx
<EzCard>
  <EzBlankState
    imageSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYxIiBoZWlnaHQ9IjEyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNCRUJFQkUiIHN0cm9rZS13aWR0aD0iNSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTA2IDNMODguOTA4IDM0LjEwOCA1NCAzOS42NjggNzkuMiA2NS4wNiA3My44NjMgOTlsMzIuNjY4LTE1LjQxNkwxMzguMTM4IDk5bC01LjAxMi0zNC45MThMMTU4IDM5LjY2OWwtMzUuNzY1LTYuMTY1eiIvPjxwYXRoIGQ9Ik00Ny41IDU4LjVsLTQzIDMwTTYyLjUgNzEuNUwzIDExM001OC41IDk2TDI2IDExOS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9zdmc+"
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
