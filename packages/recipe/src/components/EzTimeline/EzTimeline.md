---
name: EzTimeline
title: Timeline
category: Data
path: '/components/ez-timeline'
---

Timelines provide a visualization of a chronological sequence of events.

---

## Best Practices

Timelines should:

- Group events into relevant time periods (e.g. last week, last month, last year) to subdivide the timeline into easily identifiable segments.
- Use easily recognizable image icons where appropriate to categorize events
- Be used directly on the a [Page](/components/EzPage), and should never be nested within a card or other styled containers.

Timelines should not:

- Contain empty time periods (i.e. time periods that have no events).

---

## Examples

### Timeline Events

Timelines are formed from multiple timeline periods. By grouping events into time periods (e.g. last week, last month, last year), it is easier to scan the timeline for specific events that fall within a specific period. With the exception of the most recent time period (which can always be found at the top of the timeline), the Timeline component will label each time period to subdivide the timeline into easily recognizable segments.

Each timeline period must contain one or more timeline events. Each timeline event should contain:

- A `title` and a `time`. Titles should tell the user what type of action or entry the card represents. The title should correspond to the icon (where an icon has been provided).
- An optional `icon`. The icon should be an easily recognizable image used to categorize events.
- An optional `href` link. When provided, the link will highlight the card title as a clickable link, allowing the user to see more content related to the event card. Similar to [EzLink](/components/ez-link), when using a client-side routing implementation a `to` path can be used instead of `href`, with the router link component provided via the `as` property.
- An optional [status](/components/ez-status). Use statues sparingly to highlight new or important entries in the timeline.

```jsx
<EzPage>
  <EzTimeline>
    <EzTimelinePeriod label="Recent">
      <EzTimelineEvent
        title="Phone Call"
        time="12/15/2019 at 4:30PM EST"
        status={<EzStatus text="New" use="attention" size="small" />}
        icon={
          <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#phone" />
          </svg>
        }
      >
        <p>
          Reached out to Sara as a cold call. Discussed her role, tasks and potential opportunities
          to work together. Explained how we work and the types of events and event sizes that we
          can provide food for.
        </p>
      </EzTimelineEvent>
    </EzTimelinePeriod>

    <EzTimelinePeriod label="Last Month">
      <EzTimelineEvent
        title="Text Message"
        time="11/15/2019 at 4:30PM EST"
        icon={
          <svg viewBox="0 0 576 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#chatBubble" />
          </svg>
        }
      >
        <p>A note for the delivery driver - use the code #12345 at the door for access.</p>
        <EzButton use="tertiary">Edit Note</EzButton>
      </EzTimelineEvent>

      <EzTimelineEvent
        title="Order # 1V3023D"
        href="/order/1V3023D"
        time="11/15/2019 at 2:45PM EST"
        status={<EzStatus text="Complete" use="success" size="small" />}
        icon={
          <svg viewBox="0 0 384 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#receipt" />
          </svg>
        }
      >
        <p>$472.11 · Store #004, 101 Arch St. Boston MA 02110</p>
      </EzTimelineEvent>

      <EzTimelineEvent
        title="Customer Account Created"
        time="11/15/2019 at 2:30PM EST"
        icon={
          <svg viewBox="0 0 576 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#star" />
          </svg>
        }
      >
        <EzButton use="tertiary">+ Add a note</EzButton>
      </EzTimelineEvent>
    </EzTimelinePeriod>
  </EzTimeline>
</EzPage>
```

### Open ended timelines

Timelines can be used to present the most recent activity or event history, providing the most up-to-date context on screen while leaving the timeline open-ended to allow older event information to be loaded on request.

When the `expandable` property is set, a footer will appear at the bottom of the timeline allowing additional event history to be requested.

The `expandable` property requires both an `expandLabel` and an `onClick` property.

```jsx
() => {
  const [events, setEvents] = React.useState([
    {title: 'Phone Call', time: '12/15/2019 at  4:30PM EST'},
    {title: 'Phone Call', time: '12/15/2019 at  4:30PM EST'},
  ]);
  return (
    <EzPage>
      <EzTimeline
        expandable={{
          expandLabel: 'Show Older Events',
          onClick: e => {
            e.preventDefault();
            // add a couple more events (to simulate getting more data from an API call)
            setEvents(events => [
              ...events,
              ...[
                {title: 'Phone Call', time: '12/15/2019 at  4:30PM EST'},
                {title: 'Phone Call', time: '12/15/2019 at  4:30PM EST'},
              ],
            ]);
          },
        }}
      >
        <EzTimelinePeriod label="Recent">
          {events.map((e, i) => (
            <EzTimelineEvent
              key={i}
              title={e.title}
              time={e.time}
              icon={
                <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <use xlinkHref="#phone" />
                </svg>
              }
            >
              <EzButton use="tertiary">+ Add a note</EzButton>
            </EzTimelineEvent>
          ))}
        </EzTimelinePeriod>
      </EzTimeline>
    </EzPage>
  );
};
```

---

## Related components

- [Link](/components/ez-link)
- [Status](/components/ez-status)
