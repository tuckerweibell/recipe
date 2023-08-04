import {
  createTheme,
  darken,
  PaletteOptions as MuiPaletteOptions,
  responsiveFontSizes,
  SimplePaletteColorOptions,
} from '@mui/material';
import {ezPalette, legacyColors} from '../ezColors';

declare module '@mui/material/styles/createPalette' {
  type EzPalette = typeof ezPalette;

  interface CommonColors extends EzPalette {
    destructive?: string;
    disabled?: string;
    green?: string;
  }

  interface PaletteOptions {
    alert?: PaletteColorOptions;
    neutral?: PaletteColorOptions;
  }

  interface Palette {
    alert: PaletteColor;
    neutral: PaletteColor;
  }
}

declare module '@mui/material/styles/createTypography' {
  type IconSizes = 'small' | 'medium' | 'large';
  type FontSizes = 'small' | 'medium' | 'large';

  interface FontStyle {
    icon: {
      size: Record<IconSizes, number>;
    };
    font: {
      size: Record<FontSizes, number>;
    };
  }
}
declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    alert: true;
    neutral: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    alert: true;
    neutral: true;
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides {
    alert: true;
    neutral: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    alert: true;
    neutral: true;
  }
}

declare module '@mui/material/Radio' {
  interface RadioPropsColorOverrides {
    alert: true;
    neutral: true;
  }
}

type EzPaletteOptions = Omit<
  MuiPaletteOptions,
  'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'alert' | 'neutral'
> & {
  primary?: SimplePaletteColorOptions;
  secondary?: SimplePaletteColorOptions;
  error?: SimplePaletteColorOptions;
  warning?: SimplePaletteColorOptions;
  info?: SimplePaletteColorOptions;
  success?: SimplePaletteColorOptions;
  alert?: SimplePaletteColorOptions;
  neutral?: SimplePaletteColorOptions;
};

const palette: EzPaletteOptions = {
  primary: {
    main: ezPalette.primary100,
    light: ezPalette.primary90,
    dark: ezPalette.primary110,
    contrastText: ezPalette.neutral100,
  },
  secondary: {
    main: ezPalette.yellow110,
    light: ezPalette.yellow100,
    dark: darken(ezPalette.yellow110, 0.1),
    contrastText: ezPalette.neutral170,
  },
  error: {
    main: ezPalette.alert100,
    light: ezPalette.alert80,
    dark: ezPalette.alert110,
    contrastText: ezPalette.neutral100,
  },
  warning: {
    main: ezPalette.warning100,
    light: ezPalette.warning90,
    dark: darken(ezPalette.warning110, 0.1),
    contrastText: ezPalette.neutral170,
  },
  info: {
    main: ezPalette.blue100,
    light: ezPalette.blue90,
    dark: darken(ezPalette.blue100, 0.1),
    contrastText: ezPalette.neutral100,
  },
  success: {
    main: ezPalette.success100,
    light: ezPalette.success90,
    dark: darken(ezPalette.success100, 0.1),
    contrastText: ezPalette.neutral100,
  },
  alert: {
    main: ezPalette.purple100,
    light: ezPalette.purple90,
    dark: darken(ezPalette.purple100, 0.2),
    contrastText: ezPalette.neutral100,
  },
  neutral: {
    main: ezPalette.neutral160,
    light: ezPalette.neutral120,
    dark: darken(ezPalette.neutral160, 0.3),
    contrastText: ezPalette.neutral100,
  },
  grey: {
    100: ezPalette.neutral110,
    200: ezPalette.neutral120,
    300: ezPalette.neutral130,
    500: ezPalette.neutral140,
    700: ezPalette.neutral150,
    800: ezPalette.neutral160,
    900: ezPalette.neutral170,
  },
  text: {
    primary: ezPalette.neutral170,
    secondary: ezPalette.neutral150,
    disabled: ezPalette.neutral140,
  },
  common: {
    ...ezPalette,
    black: ezPalette.neutral170,
    destructive: ezPalette.alert100,
    disabled: ezPalette.neutral140,
    green: ezPalette.primary100,
    white: ezPalette.neutral100,
  },
};

const typography = {
  fontFamily: ['Lato', 'Helvetica Neue', 'Arial', 'Helvetica', 'sans-serif'].join(', '),
  font: {
    size: {
      small: 14,
      medium: 16,
      large: 18,
    },
  },
  icon: {
    size: {
      small: 16,
      medium: 24,
      large: 32,
      xlarge: 60,
    },
  },
};

const getStatusChipStyles = themeProp => {
  return {
    backgroundColor: palette[themeProp].light,
    color: palette[themeProp].main,
    '&.MuiChip-clickable:hover': {
      backgroundColor: palette[themeProp].main,
      color: palette.common.white,
      svg: {
        color: palette.common.white,
      },
    },
    '& .MuiChip-deleteIcon': {
      color: themeProp === 'warning' ? palette[themeProp].dark : palette[themeProp].main,
      '&:hover': {
        color: palette.common.black,
      },
    },
  };
};

const focusOutline = {
  outline: `2px solid ${palette.common.black}`,
  outlineOffset: '2px',
};

const components = {
  // MUI core components
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none' as const,
        fontWeight: 700,
        minWidth: 'auto',
        '&:focus': focusOutline,
      },
      endIcon: {
        svg: {fontSize: 'inherit !important'},
      },
      startIcon: {
        svg: {fontSize: 'inherit !important'},
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        height: '26px',
        lineHeight: '26px',
        '&.EzChip-alert': getStatusChipStyles('alert'),
        '&.EzChip-attention': getStatusChipStyles('info'),
        '&.EzChip-error': getStatusChipStyles('error'),
        '&.EzChip-informational': getStatusChipStyles('info'),
        '&.EzChip-neutral': getStatusChipStyles('neutral'),
        '&.EzChip-success': getStatusChipStyles('success'),
        '&.EzChip-warning': getStatusChipStyles('warning'),
      },
      icon: {
        color: 'inherit',
        marginLeft: '10px',
      },
      iconSmall: {
        fontSize: 'inherit',
      },
      iconMedium: {
        fontSize: 'inherit',
      },
      deleteIcon: {
        fontSize: '12px',
        marginRight: '8px',
      },
      sizeSmall: {
        height: '20px',
        lineHeight: '20px',
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        marginLeft: 0,
        marginRight: 0,
      },
      label: {
        '&.Mui-disabled': {
          color: palette.common.disabled,
          opacity: 1,
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        '&.Mui-disabled.EzIconButton-filled': {
          color: palette.common.white,
          backgroundColor: palette.common.disabled,
        },
      },
    },
  },

  // Recipe components
  EzAlert: {
    variants: [
      // `use` variants
      {
        props: {use: 'success'},
        style: {
          backgroundColor: legacyColors.green200,
          color: legacyColors.green700,
          '--ezalert-arrow-bg': legacyColors.green200,
        },
      },
      {
        props: {use: 'error'},
        style: {
          backgroundColor: legacyColors.red200,
          color: legacyColors.red700,
          '--ezalert-arrow-bg': legacyColors.red200,
        },
      },
      {
        props: {use: 'warning'},
        style: {
          backgroundColor: legacyColors.yellow200,
          color: legacyColors.yellow700,
          '--ezalert-arrow-bg': legacyColors.yellow200,
        },
      },
      {
        props: {use: 'info'},
        style: {
          backgroundColor: legacyColors.blue200,
          color: legacyColors.blue700,
          '--ezalert-arrow-bg': legacyColors.blue200,
        },
      },
      {
        props: {use: 'marketing'},
        style: {
          backgroundColor: legacyColors.teal200,
          color: legacyColors.teal700,
          '--ezalert-arrow-bg': legacyColors.teal200,
        },
      },
      {
        props: {use: 'tip'},
        style: {
          backgroundColor: legacyColors.purple200,
          color: legacyColors.purple700,
          '--ezalert-arrow-bg': legacyColors.purple200,
        },
      },
      // `arrow` variants
      {
        props: {arrow: 'top'},
        style: {
          '&::after': {
            content: `""`,
            top: '-12px',
            borderBottomColor: 'var(--ezalert-arrow-bg)',
          },
        },
      },
      {
        props: {arrow: 'bottom'},
        style: {
          '&::after': {
            content: `""`,
            bottom: '-12px',
            borderTopColor: 'var(--ezalert-arrow-bg)',
          },
        },
      },
    ],
  },
};

const ezTheme = responsiveFontSizes(
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 900,
        lg: 1061,
        xl: 1536,
      },
    },
    components,
    palette,
    typography,
  })
);

export default ezTheme;
