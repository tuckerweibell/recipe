---
name: EzBanner
title: Banner
category: Marketing
path: '/components/ez-banner'
---

A Banner displays a prominent, succinct message with a related link or action.

---

## Best Practices

Banners should:

- Be presented at the top of the screen, below the top navigation bar and page header.
- Require user action in order to be dismissed.
- Be persistent and non-modal, allowing users to either ignore them, or interact on them at any time.
- Contain a single message, with a corresponding action that the user can take.

Banners should not:

- Be user to provide feedback on system or user actions. Use a [flash messsage](/components/ez-flash-message/) for page-level feedback and an [alert](/components/ez-alert/) for feedback specific to a container on a page.

---

## Examples

### Banner flavors

Banners can be used to draw attention to marketing messages, using color to indicate that the content is related to a particular order source: our marketplace, ez-ordering, direct entry, or other marketing channels.

Banners must include an `onDismiss` prop, allowing the user to acknowledge and dismiss the banner.

Banners must include a `link` containing a label and either a `href`, `to` or `onClick` property, to offer the user an action to take relating to the banner message. For more information on using links, see [EzLink](/components/ez-link).

```jsx
<EzPage>
  <EzBanner
    title="More orders, lower commission."
    message="Linking to ezOrdering from your website lets you take catering orders online, without ezCater branding and at a lower cost per order."
    link={{
      label: 'Learn more',
      href: '#',
    }}
    use="marketing"
    onDismiss={() => alert('Clicked dismiss')}
  />
  <EzBanner
    title="More orders, lower commission."
    message="Linking to ezOrdering from your website lets you take catering orders online, without ezCater branding and at a lower cost per order."
    link={{
      label: 'Learn more',
      onClick: () => alert('Clicked Learn more'),
    }}
    use="ezOrdering"
    onDismiss={() => alert('Clicked dismiss')}
  />
</EzPage>
```

---

## Related components

- [Alert](/components/ez-alert/)
- [Flash messsage](/components/ez-flash-message/)
