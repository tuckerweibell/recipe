import {
  createTheme,
  darken,
  PaletteOptions as MuiPaletteOptions,
  responsiveFontSizes,
  SimplePaletteColorOptions,
} from '@mui/material';
import {ezPalette} from '../ezColors';

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

  interface FontStyle {
    icon: {
      size: Record<IconSizes, number>;
    };
  }
}
declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
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
    disabled: ezPalette.neutral120,
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

const components = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontFamily: typography.fontFamily,
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
