```jsx
<div
  style={{
    backgroundColor: '#f4f7f8',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  }}
>
  <div style={{width: '60%'}}>
    <EzSuperRadioButtons
      label="■■■■■■■■■■■■■■"
      options={[
        {
          label: '■■■■■■■',
          value: 1,
          imageSrc: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 100 100" height="100px" width="100px"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="lightgray"></circle></svg>`,
        },
        {
          label: '■■■■■■■■■',
          value: 2,
          imageSrc:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='210' width='200'%3E%3Cpolygon points='100,10 40,198 190,78 10,78 160,198' style='fill:lime;stroke:lime;stroke-width:5;fill-rule:nonzero;' /%3E%3C/svg%3E",
        },
        {
          label: '■■■■■■■■■■■■',
          value: 3,
          imageSrc:
            "data:image/svg+xml,%3Csvg width='100%25' height='80px' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 100 100 L 300 100 L 200 300 z' fill='LightBlue' stroke='Blue' stroke-width='3' /%3E%3C/svg%3E",
        },
      ]}
      value={1}
      onChange={() => {}}
    />
  </div>
</div>
```
