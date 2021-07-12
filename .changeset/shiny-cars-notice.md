---
'@ezcater/recipe': patch
---

fix: support for apps using TS3.0 and strictNullChecks

- Switched from exposing the `VariantsCall` type definition from Stitches for responsive props within Recipe in favor of using a custom `VariantProps` type derived from the stitches style definitions.
  - Stitches relies on TypeScript features only available in TS 4+ (template literal types). Exposing these types in our public API causes issues for Recipe apps that are on older versions of Typescript.
  - Recipe no longer relies on `"strictNullChecks": false` for generating lists of props; when strict null checks are enabled, calling `keyof` on a nullable type returns `unknown` instead of listing the keys of the Non-nullable version of the type.
