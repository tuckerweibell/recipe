---
name: marketing
title: Get more orders
category: Marketing Screens
path: '/cookbook/more-orders'
tags: ['wide']
---

### Marketing example

```jsx
() => {
  const onClick = e => e.preventDefault();
  return (
    <EzAppLayout layout="centered">
      <EzBaseFontSizeCompatibility />
      <EzNavigation
        home={{href: '#', label: 'Homepage', logo: {src: ezCaterLogoPath, width: 100}}}
        links={[
          {href: '#', label: 'Orders', onClick},
          {href: '#', label: 'Get More Orders', notifications: '★', onClick, active: true},
          {href: '#', label: 'Club Soda', onClick},
          {href: '#', label: 'Dashboard', onClick},
          {href: '#', label: 'Payments', onClick},
          {href: '#', label: 'Rankings', onClick},
          {href: '#', label: 'Customer Management', onClick},
          {href: '#', label: 'Performance', onClick},
          {href: '#', label: 'Reports', onClick},
          {href: '#', label: 'Reviews', onClick},
          {href: '#', label: 'Settings', onClick},
        ]}
        utilityLinks={[
          {href: '#', onClick, label: 'Chat'},
          {href: '#', onClick, label: '24/7 Support'},
        ]}
        userMenu={{
          links: [
            {href: '#', onClick, label: 'Settings'},
            {href: '#', onClick, label: 'Sign out'},
          ],
          name: 'Stefania Mallett',
        }}
      >
        <EzPage>
          <EzCard
            imageSrc="https://dummyimage.com/500x225/00b373/fff"
            imagePosition={{base: 'top', medium: 'right'}}
          >
            <EzLayout layout="stack">
              <EzHeading size="1">ezOrdering</EzHeading>
              <EzHeading size="3" as="h2">
                Catering sales on your website
              </EzHeading>
            </EzLayout>
            <p>
              Catering customers want to order online. Put the best ordering experience on your
              website to get (and keep) their business.
            </p>
            <EzButton use="primary">Sign Up Today</EzButton>
          </EzCard>
          <EzPageSection use="horizontal">
            <EzCard>
              <EzLayout layout="stack" alignX="center">
                <svg viewBox="0 0 53 53" height="80" width="80">
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(0 -.2)">
                      <mask id="b" fill="#fff">
                        <path id="a" d="M0 .2h52.79V53H0z" />
                      </mask>
                      <path
                        fill="#F2F3F4"
                        d="M26.4 53A26.4 26.4 0 1026.37.2 26.4 26.4 0 0026.4 53"
                        mask="url(#b)"
                      />
                    </g>
                    <g
                      stroke="#01B477"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                    >
                      <path d="M12.16 13.6h28.46v5.05H12.16" />
                      <path d="M40.62 21.77v14.38a3.17 3.17 0 01-3.16 3.16H15.33a3.17 3.17 0 01-3.17-3.16V13.6" />
                    </g>
                    <path
                      stroke="#01B477"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M37.87 16.13h-.92m-2.75 0h-.92"
                    />
                    <g transform="translate(18 24.8)">
                      <mask id="d" fill="#fff">
                        <path
                          id="c"
                          d="M4.23.4L.88 3.7a.98.98 0 000 1.4l3.35 3.31a1 1 0 001.41 0 .98.98 0 000-1.4L3 4.41l2.65-2.62a.98.98 0 000-1.4 1.01 1.01 0 00-.71-.27 1 1 0 00-.7.27z"
                        />
                      </mask>
                      <path fill="#01B477" d="M-1.7 11h9.94V-2.17h-9.95z" mask="url(#d)" />
                    </g>
                    <g transform="translate(28 24.8)">
                      <mask id="f" fill="#fff">
                        <path
                          id="e"
                          d="M1.29.4a.98.98 0 00-.3.7c0 .26.11.5.3.69L3.93 4.4 1.3 7.01a.98.98 0 000 1.4 1 1 0 00.7.29 1 1 0 00.71-.29L6.05 5.1c.19-.18.3-.44.3-.7a1 1 0 00-.3-.7L2.7.4A1 1 0 002 .11c-.26 0-.53.1-.71.27z"
                        />
                      </mask>
                      <path fill="#01B477" d="M-1.3 11h9.94V-2.17H-1.3z" mask="url(#f)" />
                    </g>
                    <g transform="translate(23 21.8)">
                      <mask id="h" fill="#fff">
                        <path
                          id="g"
                          d="M3.78 1.8L.98 12.45c-.15.58.2 1.19.8 1.34l.28.03c.5 0 .95-.34 1.08-.82L5.93 2.36a1.1 1.1 0 00-.8-1.34 1.14 1.14 0 00-1.36.79z"
                        />
                      </mask>
                      <path fill="#01B477" d="M-1.35 16.12h9.61V-1.31h-9.6z" mask="url(#h)" />
                    </g>
                  </g>
                </svg>

                <EzHeading align="center" size={3}>
                  Built to sell catering
                </EzHeading>
                <EzTextStyle align="center">
                  We've spent years solving the complexities of catering orders.
                </EzTextStyle>
                <EzTextStyle align="center">
                  Our catering ordering solution is used by more people than any other on the
                  planet.
                </EzTextStyle>
              </EzLayout>
            </EzCard>
            <EzCard>
              <EzLayout layout="stack" alignX="center">
                <svg viewBox="0 0 100 100" height="80" width="80">
                  <circle cx="50" cy="50" r="50" fill="#f2f3f4"></circle>
                  <path
                    fillRule="evenodd"
                    fill="#2db274"
                    transform="scale(0.6)  translate(32 28)"
                    d="M81.716 6.747l.088.011c.195.028.383.078.563.147l.1.041c.843.36 1.503 1.15 1.55 2.238l.003.164-.146 11.214a2.58 2.58 0 01-5.157.096l-.003-.163.038-2.93-.281.362c-7.323 9.286-16.48 17.206-27.078 23.87l-.798.498C40.407 48.6 29.51 53.408 18.613 56.925A140.65 140.65 0 018.065 59.9l-1.01.236c-.325.074-.638.144-.937.21l.001 3.875h15.644a2.58 2.58 0 012.575 2.417l.005.163v14.725a2.58 2.58 0 01-5.155.164l-.005-.164V69.381H6.119v18.18h27.314V57.636a2.58 2.58 0 012.417-2.575l.163-.005h18.225a2.58 2.58 0 012.575 2.416l.005.164v23.89a2.58 2.58 0 01-5.155.164l-.005-.164V60.215H38.593v27.346h27.315V37.816a2.58 2.58 0 012.417-2.575l.163-.005h18.224a2.58 2.58 0 012.575 2.417l.005.163v43.71a2.58 2.58 0 01-5.155.164l-.005-.164-.001-41.13H71.068v47.165H96.42a2.58 2.58 0 012.575 2.417l.005.163a2.58 2.58 0 01-2.417 2.575l-.163.005H3.54a2.58 2.58 0 01-2.575-2.416L.96 90.14V24.793a2.58 2.58 0 015.155-.163l.005.163-.002 30.264.75-.176c3.061-.73 6.477-1.677 10.16-2.866 10.524-3.398 21.047-8.04 30.852-14.108 11.155-6.902 20.632-15.203 27.957-25.024l-5.684.966a2.58 2.58 0 01-1.031-5.054l.166-.033 11.477-1.95c.25-.066.506-.092.76-.08l.191.015z"
                  ></path>
                </svg>
                <EzHeading align="center" size={3}>
                  Growth from your site & ours
                </EzHeading>
                <EzTextStyle align="center">
                  Online ordering boosts sales through your site. ezOrdering boosts it further.
                </EzTextStyle>
                <EzTextStyle align="center">
                  It improves your search ranking on the ezCater Marketplace, so you get more orders
                  there too.
                </EzTextStyle>
              </EzLayout>
            </EzCard>
            <EzCard>
              <EzLayout layout="stack" alignX="center">
                <svg viewBox="0 0 100 100" height="80" width="80">
                  <circle cx="50" cy="50" r="50" fill="#f2f3f4"></circle>
                  <path
                    fillRule="evenodd"
                    fill="#2db274"
                    transform="scale(0.6)  translate(32 28)"
                    d="M68.071 53.841l.424.162a60.935 60.935 0 012.736 1.16c2.335 1.057 4.673 2.272 6.868 3.635 5.01 3.11 8.578 6.519 10.06 10.388 1.757 4.58 2.096 8.137 1.983 15.374l-.04 2.52-.005.939a2.58 2.58 0 11-5.16 0l.012-1.532.04-2.489c.082-6.27-.232-9.273-1.648-12.965-.983-2.566-3.827-5.284-7.963-7.851-1.986-1.233-4.13-2.347-6.275-3.318l-.63-.28-.958 2.018-.578 1.2a372.224 372.224 0 01-6.045 12.006 237.69 237.69 0 01-2.083 3.858l-.405.73c-2.246 4.025-4.245 7.264-5.952 9.57a2.58 2.58 0 01-4.147 0c-1.707-2.307-3.706-5.546-5.953-9.573l-.814-1.472c-.547-1-1.105-2.04-1.673-3.113a372.355 372.355 0 01-6.046-12.005l-1.125-2.347-.412-.872-.629.28c-2.144.97-4.287 2.084-6.273 3.317-4.136 2.568-6.98 5.285-7.962 7.853-1.506 3.926-2.103 11.109-2.23 20.952l-.02 1.894H88.25a2.58 2.58 0 012.575 2.417l.005.164a2.58 2.58 0 01-2.417 2.574l-.163.006H12.58A2.58 2.58 0 0110 96.46l.005-2.09c.058-11.866.648-20.109 2.594-25.183 1.482-3.871 5.05-7.28 10.06-10.39 2.194-1.363 4.531-2.578 6.867-3.635.653-.296 1.27-.562 1.842-.8l1.022-.41.294-.112a2.58 2.58 0 013.236 1.344l.686 1.47L37.62 58.8c.18.378.366.764.556 1.16l.289.6a367.34 367.34 0 005.96 11.836l.827 1.551a211.219 211.219 0 001.604 2.931l.695 1.233a123.78 123.78 0 002.276 3.852l.55.879.246-.389c.922-1.47 1.92-3.163 2.983-5.052l.291-.52a225.117 225.117 0 002.432-4.485 356.774 356.774 0 005.226-10.323l.734-1.513c.39-.808.761-1.583 1.11-2.319l1.169-2.481.267-.575a2.58 2.58 0 013.235-1.344zM50.574 11.323c15.073 0 22.995 15.443 17.296 29.19a2.58 2.58 0 01-4.767-1.977C67.5 27.93 61.628 16.483 50.574 16.483c-5.336 0-9.452 2.51-12.159 6.858-2.346 3.77-3.333 8.615-2.686 12.157 1.582 8.69 7.424 15.012 17.314 20.673a2.58 2.58 0 11-2.564 4.478C39.4 54.307 32.561 46.908 30.652 36.424c-.88-4.827.37-10.971 3.383-15.81 3.61-5.8 9.336-9.29 16.54-9.29zM51.19 1c9.638 0 16.752 3.926 21.55 10.41a29.69 29.69 0 013.846 7.05c.12.313.229.611.327.895l.18.533.15.025c5.439.948 9.207 5.458 9.715 10.938l.024.3c.405 5.747-2.908 10.491-8.64 11.56l-.371.062-.101.347a13.369 13.369 0 01-1.01 2.412l-.22.39c-3.145 5.354-9.208 7.163-18.104 3.948a4.3 4.3 0 111.972-4.757c6.434 2.344 9.89 1.25 11.683-1.805.411-.699.705-1.467.895-2.238l.072-.313c.04-.192.067-.349.082-.461l.015-.134a2.58 2.58 0 012.573-2.387c4.124 0 6.266-2.579 6.007-6.261-.265-3.758-2.938-6.625-6.747-6.625a2.58 2.58 0 01-2.487-1.894l-.105-.44a21.91 21.91 0 00-.729-2.25 24.578 24.578 0 00-3.174-5.826C64.727 9.257 59.115 6.16 51.189 6.16c-8.354 0-14.297 3.018-18.394 8.076a23.4 23.4 0 00-3.35 5.593c-.225.53-.412 1.025-.564 1.48l-.108.331a12.18 12.18 0 00-.143.488l-.025.097a2.58 2.58 0 01-2.514 2c-4.121 0-7.024 3.034-7.339 6.98-.308 3.854 1.962 6.57 6.381 6.57a2.58 2.58 0 110 5.16c-7.555 0-12.063-5.396-11.525-12.14.463-5.79 4.482-10.57 10.273-11.547l.265-.042.092-.25c.1-.265.21-.546.33-.84l.126-.3a28.52 28.52 0 014.092-6.827C33.834 4.756 41.228 1 51.189 1z"
                  ></path>
                </svg>
                <EzHeading align="center" size={3}>
                  Support you get nowhere else
                </EzHeading>
                <EzTextStyle align="center">
                  When customers need help, our 5-star service team handles it.
                </EzTextStyle>
                <EzTextStyle align="center">
                  If you want help delivering orders, get professional catering delivery on demand
                  with ezDispatch.
                </EzTextStyle>
              </EzLayout>
            </EzCard>
          </EzPageSection>
          <EzPageSection use="horizontal">
            <EzCard title="Access more of ezCater’s tools">
              <p>
                <EzTextStyle use="strong">
                  Get help with{' '}
                  <EzLink>
                    <a href="#">delivery</a>
                  </EzLink>
                  .
                </EzTextStyle>{' '}
                ezDispatch is our network of professional delivery providers. You can get drivers on
                demand for your ezOrdering orders.
              </p>
              <p>
                <EzTextStyle use="strong">
                  Create custom{' '}
                  <EzLink>
                    <a href="#">promotions</a>
                  </EzLink>
                  .
                </EzTextStyle>{' '}
                Get access to our Promotions tool in ezManage to create and run promotions on your
                ezOrdering site.
              </p>
              <p>
                <EzTextStyle use="strong">Apply custom colors.</EzTextStyle> Talk to our team about
                branding your ezOrdering page.
              </p>
            </EzCard>
            <img
              src="https://dummyimage.com/400x250/00b373/fff"
              alt="marketing video"
              style={{objectFit: 'cover', width: '100%'}}
            />
          </EzPageSection>
          <EzCard>
            <EzLayout layout="tile" columns={{base: 1, medium: 2}}>
              <p>
                <EzTextStyle use="strong">Risk-free to join.</EzTextStyle> There’s no fine print or
                long-term commitment. Stop any time you want.
              </p>
              <p>
                <EzTextStyle use="strong">You pay nothing until you get an order.</EzTextStyle>{' '}
                There’s a 7% commission on orders you accept – less than half our marketplace rate.
              </p>
              <p>
                <EzTextStyle use="strong">Lock in the reduced commission.</EzTextStyle> When people
                who are new to ezCater order through your website, you lock in the ezOrdering rate
                on all their orders. Forever. Even orders from the ezCater Marketplace.
              </p>
              <p>
                <EzTextStyle use="strong">We do all the work.</EzTextStyle> Our web experts can add
                ezOrdering to your website, optimized to give catering customers one-click access to
                online ordering.
              </p>
            </EzLayout>
          </EzCard>
          <EzCard accent="info">
            <EzLayout layout="split">
              <EzHeading size={3}>Getting started is easy and setup is free</EzHeading>
              <EzButton use="primary">Sign Up Today</EzButton>
            </EzLayout>
          </EzCard>
        </EzPage>
      </EzNavigation>
    </EzAppLayout>
  );
};
```

---

## Related components

- [High level application layout](/components/ez-app-layout)
- [Base font size](/components/ez-base-font-size-compatibility)
- [Navigation](/components/ez-navigation)
- [Page](/components/ez-page)
- [Page sections](/components/ez-page#horizontal-sections)
- [Card](/components/ez-card)
- [Card images](/components/ez-card#card-images)
- [Card sections](/components/ez-card#card-with-sections)
- [Small-scale layout](/components/ez-layout)
- [Heading](/components/ez-heading)
- [Text](/components/ez-text-style)
- [Button](/components/ez-button)
