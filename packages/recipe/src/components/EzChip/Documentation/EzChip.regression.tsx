/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/no-extraneous-dependencies */
import React, {ComponentProps} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Primary, Stories, Title} from '@storybook/addon-docs';
import {Stack} from '@mui/material';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import EzChip from '../EzChip';
import EzIcon from '../../EzIcon';

export default {
  component: EzChip,
  title: 'Data Display/EzChip/Regression',
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Primary />
          <Stories />
        </>
      ),
    },
  },
} as ComponentMeta<typeof EzChip>;

const filled = {variant: 'filled'} as const;
const outlined = {variant: 'outlined'} as const;
const neutral = {variant: 'neutral'} as const;
const success = {variant: 'success'} as const;
const informational = {variant: 'informational'} as const;
const attention = {variant: 'attention'} as const;
const warning = {variant: 'warning'} as const;
const error = {variant: 'error'} as const;
const alert = {variant: 'alert'} as const;
const icon = {icon: <EzIcon icon={faCoffee} />} as const;
const clickable = {onClick: () => {}} as const;
const deletable = {onDelete: () => {}} as const;

const DefaultEzChip = (args: ComponentProps<typeof EzChip>) => (
  <EzChip icon={undefined} onClick={undefined} onDelete={undefined} {...args} />
);

export const Default: ComponentStory<typeof EzChip> = () => (
  <Stack alignItems="center">
    <DefaultEzChip label="default" />
  </Stack>
);

export const Variants: ComponentStory<typeof EzChip> = () => (
  <Stack alignItems="center" spacing={1}>
    <DefaultEzChip {...filled} label="filled" />
    <DefaultEzChip {...outlined} label="outlined" color="common.black" />
    <DefaultEzChip {...neutral} label="neutral" />
    <DefaultEzChip {...success} label="success" />
    <DefaultEzChip {...informational} label="informational" />
    <DefaultEzChip {...attention} label="attention" />
    <DefaultEzChip {...warning} label="warning" />
    <DefaultEzChip {...error} label="error" />
    <DefaultEzChip {...alert} label="alert" />
  </Stack>
);

export const FilledVariantsWithColors: ComponentStory<typeof EzChip> = () => (
  <Stack alignItems="center" spacing={1}>
    <DefaultEzChip {...filled} label="filled - color primary" color="primary" />
    <DefaultEzChip {...filled} label="filled - color secondary" color="secondary" />
    <DefaultEzChip {...filled} label="filled - color neutral" color="neutral" />
    <DefaultEzChip {...filled} label="filled - color error" color="error" />
    <DefaultEzChip {...filled} label="filled - color info" color="info" />
    <DefaultEzChip {...filled} label="filled - color success" color="success" />
    <DefaultEzChip {...filled} label="filled - color common" color="common.neutral130" />
  </Stack>
);

export const OutlinedVariantsWithColors: ComponentStory<typeof EzChip> = () => (
  <Stack alignItems="center" spacing={1}>
    <DefaultEzChip {...outlined} label="outlined - color primary" color="primary" />
    <DefaultEzChip {...outlined} label="outlined - color secondary" color="secondary" />
    <DefaultEzChip {...outlined} label="outlined - color neutral" color="neutral" />
    <DefaultEzChip {...outlined} label="outlined - color error" color="error" />
    <DefaultEzChip {...outlined} label="outlined - color info" color="info" />
    <DefaultEzChip {...outlined} label="outlined - color success" color="success" />
    <DefaultEzChip {...outlined} label="outlined - color common" color="common.neutral150" />
  </Stack>
);

export const StatusVariantsWithColors: ComponentStory<typeof EzChip> = () => (
  <Stack alignItems="center" spacing={1}>
    <div>*colors should not override</div>
    <DefaultEzChip {...neutral} label="neutral - color primary" color="primary" />
    <DefaultEzChip {...success} label="success - color secondary" color="secondary" />
    <DefaultEzChip {...informational} label="informational - color error" color="error" />
    <DefaultEzChip {...attention} label="attention - color warning" color="warning" />
    <DefaultEzChip {...warning} label="warning - color info" color="info" />
    <DefaultEzChip {...error} label="error - color success" color="success" />
    <DefaultEzChip {...alert} label="alert - color neutral" color="neutral" />
  </Stack>
);

export const ClickableWithColors: ComponentStory<typeof EzChip> = () => (
  <Stack alignItems="center" spacing={1}>
    <DefaultEzChip {...clickable} label="clickable - color primary" color="primary" />
    <DefaultEzChip {...clickable} label="clickable - color secondary" color="secondary" />
    <DefaultEzChip {...clickable} label="clickable - color error" color="error" />
    <DefaultEzChip {...clickable} label="clickable - color warning" color="warning" />
    <DefaultEzChip {...clickable} label="clickable - color info" color="info" />
    <DefaultEzChip {...clickable} label="clickable - color success" color="success" />
    <DefaultEzChip {...clickable} label="clickable - color neutral" color="neutral" />
  </Stack>
);

export const DeletableWithColors: ComponentStory<typeof EzChip> = () => (
  <Stack alignItems="center" spacing={1}>
    <DefaultEzChip {...deletable} label="deletable - color primary" color="primary" />
    <DefaultEzChip {...deletable} label="deletable - color secondary" color="secondary" />
    <DefaultEzChip {...deletable} label="deletable - color error" color="error" />
    <DefaultEzChip {...deletable} label="deletable - color warning" color="warning" />
    <DefaultEzChip {...deletable} label="deletable - color info" color="info" />
    <DefaultEzChip {...deletable} label="deletable - color success" color="success" />
    <DefaultEzChip {...deletable} label="deletable - color neutral" color="neutral" />
  </Stack>
);

export const ClickableAndDeletableWithColors: ComponentStory<typeof EzChip> = () => (
  <Stack alignItems="center" spacing={1}>
    <DefaultEzChip
      {...clickable}
      {...deletable}
      label="clickable/deletable - color primary"
      color="primary"
    />
    <DefaultEzChip
      {...clickable}
      {...deletable}
      label="clickable/deletable - color secondary"
      color="secondary"
    />
    <DefaultEzChip
      {...clickable}
      {...deletable}
      label="clickable/deletable - color error"
      color="error"
    />
    <DefaultEzChip
      {...clickable}
      {...deletable}
      label="clickable/deletable - color warning"
      color="warning"
    />
    <DefaultEzChip
      {...clickable}
      {...deletable}
      label="clickable/deletable - color info"
      color="info"
    />
    <DefaultEzChip
      {...clickable}
      {...deletable}
      label="clickable/deletable - color success"
      color="success"
    />
    <DefaultEzChip
      {...clickable}
      {...deletable}
      label="clickable/deletable - color neutral"
      color="neutral"
    />
  </Stack>
);

export const ClickableStatusVariants: ComponentStory<typeof EzChip> = () => (
  <Stack alignItems="center" spacing={1}>
    <DefaultEzChip {...clickable} {...success} label="clickable - success" />
    <DefaultEzChip {...clickable} {...informational} label="clickable - informational" />
    <DefaultEzChip {...clickable} {...attention} label="clickable - attention" />
    <DefaultEzChip {...clickable} {...warning} label="clickable - warning" />
    <DefaultEzChip {...clickable} {...error} label="clickable - error" />
    <DefaultEzChip {...clickable} {...alert} label="clickable - alert" />
  </Stack>
);

export const DeletableStatusVariants: ComponentStory<typeof EzChip> = () => (
  <Stack alignItems="center" spacing={1}>
    <DefaultEzChip {...deletable} {...success} label="deletable - success" />
    <DefaultEzChip {...deletable} {...informational} label="deletable - informational" />
    <DefaultEzChip {...deletable} {...attention} label="deletable - attention" />
    <DefaultEzChip {...deletable} {...warning} label="deletable - warning" />
    <DefaultEzChip {...deletable} {...error} label="deletable - error" />
    <DefaultEzChip {...deletable} {...alert} label="deletable - alert" />
  </Stack>
);

export const IconsAndFilledVariantWithColors: ComponentStory<typeof EzChip> = () => (
  <Stack alignItems="center" spacing={1}>
    <DefaultEzChip {...filled} {...icon} label="icon/filled - color primary" color="primary" />
    <DefaultEzChip {...filled} {...icon} label="icon/filled - color secondary" color="secondary" />
    <DefaultEzChip {...filled} {...icon} label="icon/filled - color error" color="error" />
    <DefaultEzChip {...filled} {...icon} label="icon/filled - color warning" color="warning" />
    <DefaultEzChip {...filled} {...icon} label="icon/filled - color info" color="info" />
    <DefaultEzChip {...filled} {...icon} label="icon/filled - color success" color="success" />
    <DefaultEzChip {...filled} {...icon} label="icon/filled - color neutral" color="neutral" />
  </Stack>
);

export const IconsAndOutlinedVariantWithColors: ComponentStory<typeof EzChip> = () => (
  <Stack alignItems="center" spacing={1}>
    <DefaultEzChip {...outlined} {...icon} label="icon/outlined - color primary" color="primary" />
    <DefaultEzChip
      {...outlined}
      {...icon}
      label="icon/outlined - color secondary"
      color="secondary"
    />
    <DefaultEzChip {...outlined} {...icon} label="icon/outlined - color error" color="error" />
    <DefaultEzChip {...outlined} {...icon} label="icon/outlined - color warning" color="warning" />
    <DefaultEzChip {...outlined} {...icon} label="icon/outlined - color info" color="info" />
    <DefaultEzChip {...outlined} {...icon} label="icon/outlined - color success" color="success" />
    <DefaultEzChip {...outlined} {...icon} label="icon/outlined - color neutral" color="neutral" />
  </Stack>
);

export const IconsAndChipSizes: ComponentStory<typeof EzChip> = () => (
  <Stack alignItems="center" spacing={1}>
    <DefaultEzChip {...icon} label="icon - default" />
    <DefaultEzChip {...icon} label="icon - medium" size="medium" />
    <DefaultEzChip {...icon} label="icon - small" size="small" />
    <DefaultEzChip {...icon} label="icon - inherit" size="inherit" />
  </Stack>
);

export const CustomStyles: ComponentStory<typeof EzChip> = () => (
  <Stack alignItems="center" spacing={1}>
    <div className="custom-1">
      <DefaultEzChip {...icon} label="filled - custom styles" />
      <style>{`
        .custom-1 .EzChip-filled {
          color: white;
          background-color: turquoise;
        }
        .custom-1 .EzChip-icon {
          color: black;
        }
        .custom-1 .EzChip-label {
          font-size: 18px;
        }
      `}</style>
    </div>

    <div className="custom-2">
      <DefaultEzChip {...outlined} {...icon} label="outlined - custom styles" />
      <style>{`
        .custom-2 .EzChip-outlined {
          border-color: lightGrey;
          color: green;
        }
        .custom-2 .EzChip-icon {
          color: red;
        }
        .custom-2 .EzChip-label {
          font-size: 12px;
        }
      `}</style>
    </div>
  </Stack>
);
