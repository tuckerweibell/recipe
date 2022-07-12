import {EzIconTypes} from '../EzIcon/EzIcon.types';
import {EzThemeColors, EzThemeSizes} from '../../themes/themes.types';

export type Ref = HTMLDivElement;

export type EzRatingColors = EzThemeColors;
export type EzRatingSizes = EzThemeSizes;

export interface EzRatingProps {
  max: number;
  value: number;
  label: string;
  emptyIcon: EzIconTypes;
  halfIcon: EzIconTypes;
  fullIcon: EzIconTypes;
  color?: EzRatingColors;
  size?: EzRatingSizes;
}
