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
import {CommonColors} from '@mui/material/styles/createPalette';
import {EzPalette} from '../../themes';

type PaletteOptions = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
export type EzCaterIconProps = string | FunctionComponent | ComponentClass;
export type SvgIconProps = SVGProps<SVGSVGElement> | ReactElement;
export type FontAwesomeIconProps = IconDefinition;
export type EzIconTypes = EzCaterIconProps | FontAwesomeIconProps | SvgIconProps;
export type SvgIconColorType = ComponentProps<typeof SvgIcon>['color'];
export type Ref = SVGSVGElement;

export type EzIconColors =
  | PaletteOptions
  | `common.${keyof EzPalette}`
  | `common.${keyof CommonColors}`
  | 'green' // deprecated - use 'common.green'
  | 'white' // deprecated - use 'common.white'
  | 'inherit';

export type EzIconSizes =
  | 'xsmall' // deprecated - use 'small' or 'inherit'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge' // deprecated - use 'large' or 'inherit'
  | 'inherit';

export interface EzIconProps {
  color?: EzIconColors;
  icon: EzIconTypes;
  size?: EzIconSizes;
  title?: string;
}

export interface EzIconMuiProps extends Omit<ComponentProps<typeof SvgIcon>, 'color' | 'fontSize'> {
  children?: ReactNode;
  color?: EzIconColors;
  fontSize?: number;
  title?: string;
}
