import {FunctionComponent, ComponentClass, ReactElement, SVGProps} from 'react';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

export type Ref = HTMLDivElement;

export type EzIconColors = 'green' | 'white' | 'inherit';

export type EzIconSizes = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'inherit';

export type FontAwesomeIconProps = IconDefinition;
export type EzCaterIconProps = string | FunctionComponent | ComponentClass;
export type SvgIconProps = SVGProps<SVGSVGElement> | ReactElement;
export type EzIconTypes = SvgIconProps | FontAwesomeIconProps | EzCaterIconProps;

export interface EzIconProps {
  icon: EzIconTypes;
  title?: string;
  color?: EzIconColors;
  size?: EzIconSizes;
}
