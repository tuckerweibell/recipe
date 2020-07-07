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
            <path
              d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
              fill="#565a5c"
            />
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
            <path
              d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"
              fill="#565a5c"
            />
          </svg>
        }
      >
        <p>A note for the delivery driver - use the code #12345 at the door for access.</p>
        <EzButton use="tertiary">Edit Note</EzButton>
      </EzTimelineEvent>

      <EzTimelineEvent
        title="Order # 1V3023D"
        to="/order/1V3023D"
        as={({children}) => <a onClick={e => e.preventDefault()}>{children}</a>}
        time="11/15/2019 at 2:45PM EST"
        status={<EzStatus text="Complete" use="success" size="small" />}
        icon={
          <svg viewBox="0 0 384 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M358.4 3.2L320 48 265.6 3.2a15.9 15.9 0 0 0-19.2 0L192 48 137.6 3.2a15.9 15.9 0 0 0-19.2 0L64 48 25.6 3.2C15-4.7 0 2.8 0 16v480c0 13.2 15 20.7 25.6 12.8L64 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L192 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L320 464l38.4 44.8c10.5 7.9 25.6.4 25.6-12.8V16c0-13.2-15-20.7-25.6-12.8zM320 360c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16z"
              fill="#565a5c"
            />
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
            <path
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              fill="#565a5c"
            />
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
                  <path
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                    fill="#565a5c"
                  />
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
