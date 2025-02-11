import * as themes from './themes';
import stitches from './components/theme.config';

export const {theme: createTheme} = stitches;

export * from './components';
export {themes, stitches};
export {marketplaceTheme as stitchesMarketplaceTheme} from './components/theme.config';
