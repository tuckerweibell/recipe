export const snippets = [
  {
    group: 'Data Display',
    name: 'EzBadge',
    code: `
      {(() => {
        const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

        return (
          <EzPage>
            <EzBadge
              alignX="right"
              alignY="top"
              color="common.red110"
              hide={false}
              max={99}
              minimize={false}
              overlap="rectangular"
              showZero={false}
              value={3}
            >
              <EzIcon icon={shoppingCart} />
            </EzBadge>
          </EzPage>
        );
      })()}
    `,
  },
];
