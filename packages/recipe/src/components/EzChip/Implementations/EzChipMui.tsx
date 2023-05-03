import React, {forwardRef, useMemo} from 'react';
import {Chip} from '@mui/material';
import {faCircle} from '@fortawesome/free-solid-svg-icons/faCircle';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';
import EzIcon from '../../EzIcon';
import {EzChipProps, Ref} from '../EzChip.types';

const STATUS_MAP = {
  neutral: {color: 'neutral', icon: false},
  success: {color: 'success', icon: false},
  informational: {color: 'info', icon: false},
  attention: {color: 'info', icon: true},
  warning: {color: 'common.warning110', icon: true},
  error: {color: 'error', icon: true},
  alert: {color: 'alert', icon: true},
};

const EzChipMui = forwardRef<Ref, EzChipProps & {children?: null}>(
  ({color, icon, size, variant, ...props}, ref) => {
    const isCommonColor = color?.startsWith('common.');
    const isStatus = Object.keys(STATUS_MAP).includes(variant);

    const chipThemeColor = isStatus ? STATUS_MAP[variant].color : isCommonColor ? undefined : color;
    const chipCommonColor = isCommonColor ? color : undefined;
    const chipColor = chipThemeColor || chipCommonColor;
    const chipFontColor = variant === 'outlined' ? chipColor : undefined;
    const dotIconWrapperStyles = useMemo(() => ({display: 'flex', fontSize: '6px'}), []);
    const deleteIconWrapperStyles = useMemo(() => ({display: 'flex', fontSize: '12px'}), []);

    const DotIcon = (
      <div style={dotIconWrapperStyles}>
        <EzIcon icon={faCircle} color={chipColor} size="inherit" />
      </div>
    );

    const DeleteIcon = (
      <div style={deleteIconWrapperStyles}>
        <EzIcon icon={faXmark} color="inherit" size="inherit" />
      </div>
    );

    return (
      <Chip
        ref={ref}
        classes={{
          root: `EzChip EzChip-${variant}`,
          clickable: 'EzChip-clickable',
          deletable: 'EzChip-deletable',
          deleteIcon: 'EzChip-deleteIcon',
          disabled: 'EzChip-disabled',
          icon: 'EzChip-icon',
          label: 'EzChip-label',
        }}
        color={isStatus ? undefined : chipThemeColor}
        deleteIcon={DeleteIcon}
        icon={isStatus ? (STATUS_MAP[variant].icon ? DotIcon : undefined) : icon}
        size={size === 'inherit' ? undefined : size}
        sx={{
          bgcolor: variant === 'filled' ? chipCommonColor : undefined,
          borderColor: variant === 'outlined' && isCommonColor ? color : undefined,
          color: chipFontColor,
          fontSize: size === 'inherit' ? 'inherit' : undefined,
          '&.EzChip-warning': {color: 'common.warning110'},
        }}
        variant={variant === 'outlined' ? variant : undefined}
        {...props}
      />
    );
  }
);

EzChipMui.displayName = 'EzChipMui';

export default EzChipMui;
