import {
  ComponentClass,
  ComponentProps,
  FunctionComponent,
  ReactElement,
  ReactNode,
  SVGProps,
} from 'react';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {SvgIcon} from '@mui/material';
import {EzThemeColors, EzThemeIconSizes} from '../../themes/themes.types';

export type EzCaterIconProps = string | FunctionComponent | ComponentClass;
export type SvgIconProps = SVGProps<SVGSVGElement> | ReactElement;
export type FontAwesomeIconProps = IconDefinition;
export type EzIconTypes = EzCaterIconProps | FontAwesomeIconProps | SvgIconProps;
export type SvgIconColorType = ComponentProps<typeof SvgIcon>['color'];
export type Ref = SVGSVGElement;

export interface EzIconProps {
  color?: EzThemeColors;
  icon: EzIconTypes;
  size?: EzThemeIconSizes;
  title?: string;
}

export interface EzIconMuiProps extends Omit<ComponentProps<typeof SvgIcon>, 'color' | 'fontSize'> {
  children?: ReactNode;
  color?: EzThemeColors;
  fontSize?: number | 'inherit';
  title?: string;
}
