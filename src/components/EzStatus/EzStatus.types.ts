import {HTMLAttributes} from 'react';

export type EzStatusSizes = 'normal' | 'small';

export type EzStatusInformationalUses = 'neutral' | 'success' | 'informational';

export type EzStatusActionUses = 'attention' | 'warning' | 'error' | 'alert';

export type EzStatusUses = EzStatusInformationalUses | EzStatusActionUses;

export type EzStatusProps = {
  text: string;
  size?: EzStatusSizes;
  use: EzStatusUses;
  icon?: JSX.Element;
} & Omit<HTMLAttributes<HTMLElement>, 'as' | 'css'>;
