---
path: "/guides/getting-started"
title: "Getting Started"
---

### Installation

```term
npm install @ezcater/recipe --save
```

After installing recipe in your new application you may need to install some additional peer dependencies, check the warnings in your terminal for what those are as well as the `package.json` file. There is a section specifically for `peerDependencies` which need to be installed by the parent application.  

## Importing components in downstream projects

Import the Recipe package, just as you would any other package dependency:

```js
import {EzButton} from '@ezcater/recipe';

export const MyComponent = () => (
  <div>
    <EzButton use="primary" onClick={() => alert('You clicked me!')}>
      Click Me!
    </EzButton>
  </div>
);
```

### Contributing

If you're interested in contributing, check out our [contributing guidelines](/guides/contributing) to get started.
