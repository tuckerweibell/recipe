```jsx
() => {
  const steps = [
    {label: '■■ ■ ■', complete: true},
    {label: '■■ ■ ■■', complete: false},
    {label: '■■ ■ ■ ■■', complete: true},
    {label: '■■■■', complete: false},
  ];

  return (
    <div
      style={{
        '--zoom': 2.5,
        width: '350px',
      }}
    >
      <EzProgressTracker steps={steps} selected={steps[2]} />
    </div>
  );
};
```
