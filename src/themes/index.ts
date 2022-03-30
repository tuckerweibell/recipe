import * as legacyTheme from './standard';

/**
 * @deprecated The standard theme is no longer used by Recipe and is no longer maintained in this package.
 *
 * Import from `@recipe-ui/legacy-theme` directly for backwards-compatibility with Recipe versions prior to v11,
 * or define theme styles local to your project.
 *
 * The standard theme may be removed from the `@ezcater/recipe` package in a future release.
 *
 * See: https://github.com/ezcater/recipe/releases/tag/11.0.0 for more information.
 */
export const standard = legacyTheme;

export {ezTheme, ezMarketplaceTheme, ezFulfillmentTheme} from './mui';
export {createTheme} from '@mui/material/styles';
