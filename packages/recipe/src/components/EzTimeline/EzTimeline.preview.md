```jsx
<div
  style={{
    '--zoom': 2,
    backgroundColor: '#f4f7f8',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  }}
>
  <EzTimeline>
    <EzTimelinePeriod label="Recent">
      <EzTimelineEvent
        title="■■■■ ■■■"
        time="■■ ■ ■■ ■"
        status={<EzChip label="■" variant="attention" size="small" />}
        icon={
          <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
              fill="#565a5c"
            />
          </svg>
        }
      >
        <p>■■■■■■■ ■■ ■■■■ ■■■■■■■■■ ■■■ ■■■■■■■■■</p>
      </EzTimelineEvent>
      <EzTimelineEvent
        title="■■■■ ■■■"
        time="■■ ■ ■■ ■"
        icon={
          <svg viewBox="0 0 576 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"
              fill="#565a5c"
            />
          </svg>
        }
      >
        <p>■■■■■■■ ■■ ■■■■ ■■■■■■■■■ ■■■</p>
      </EzTimelineEvent>
    </EzTimelinePeriod>
  </EzTimeline>
</div>
```
