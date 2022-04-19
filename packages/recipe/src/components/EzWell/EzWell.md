---
name: EzWell
title: Well
category: Layout
path: '/components/ez-well'
---

A Well is a content container used to visually group content on a page. Typically a Well displays non-editable content separate from other content on the screen.

---

## Examples

### Content

Localized content should be provided via the `children` prop.

If the visual separation of a `<Well>` conveys semantic meaning and therefore makes a difference to understanding the content, a [`role`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#document_structure_roles) prop must be supplied and, if appropriate, labeled using either [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) or [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute).

```jsx
<EzWell role="figure" aria-labelledby="caption">
  <blockquote>
    <p>
      "We must not allow the clock and the calendar to blind us to the fact that each moment of life
      is a miracle and mystery."
    </p>
  </blockquote>
  <p id="caption">
    <cite>
      <EzLink>
        <a href="https://www.amazon.com/H-G-Wells-calendar-miracle-mystery/dp/1785435574">
          In The Fourth Year
        </a>
      </EzLink>
    </cite>
    {' - '}
    by H.G. Wells
  </p>
</EzWell>
```

---

## Related components

- [Page](/components/ez-page)
- [Cards](/components/ez-card)
