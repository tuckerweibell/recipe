```jsx
<div style={{padding: 20, height: 135, width: 150, textAlign: 'right', '--zoom': 3}}>
  <EzButton onClick={() => setVisible(!visible)}>
    ■■■■■{' '}
    <svg
      stroke="gray"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      viewBox="-5 -5 24 24"
      height="1rem"
      width="1rem"
      fill="none"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </EzButton>

  <div
    style={{
      position: 'absolute',
      inset: '0px auto auto 0px',
      margin: 0,
      transform: 'translate(52%, 64%)',
    }}
  >
    <div
      style={{
        border: 'solid 1px hsla(0, 0%, 0%, 0.15)',
        boxShadow: '0px 2px 10px hsla(0, 0%, 0%, 0.15)',
        borderRadius: 3,
        padding: '0 20px',
        color: 'darkgray',
        background: '#fff',
      }}
    >
      <ul
        style={{
          paddingLeft: 20,
          listStyleImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='10' viewBox='-1 -1 2 2'><circle r='1' fill='darkgray' /></svg>")`,
        }}
      >
        <li> ■■■■■■■■■■</li>
        <li> ■■■■■■■■■■</li>
        <li> ■■■■■■■■■■</li>
      </ul>
    </div>
  </div>
</div>
```
