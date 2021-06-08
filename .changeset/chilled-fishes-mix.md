---
'@ezcater/recipe': patch
---

fix: EzBlankState content doesn't wrap on IE

- Added `max-width: 100%` to `EzBlankState` content to workaround a [known IE flexbox issue](https://github.com/philipwalton/flexbugs#flexbug-2).
