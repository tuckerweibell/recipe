export enum EzStatusSizes {
  normal = 'normal',
  small = 'small',
}

export enum EzStatusInformationalUses {
  neutral = 'neutral',
  success = 'success',
  informational = 'informational',
}

export enum EzStatusActionUses {
  attention = 'attention',
  warning = 'warning',
  error = 'error',
}

export type EzStatusProps = {
  text: string;
  size: EzStatusSizes;
  use: EzStatusInformationalUses | EzStatusActionUses;
};
