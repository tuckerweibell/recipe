import {createTheme, responsiveFontSizes} from '@mui/material';
import {ezPalette, legacyColors} from '../ezColors';
import type {EzPaletteOptions} from '../themes.types';

declare module '@mui/material/styles/createPalette' {
  type EzPalette = typeof ezPalette;

  interface CommonColors extends EzPalette {
    destructive?: string;
    disabled?: string;
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

const palette: EzPaletteOptions = {
  primary: {
    main: ezPalette.orange105,
    light: ezPalette.orange95,
    dark: ezPalette.orange120,
    contrastText: ezPalette.white,
  },
  secondary: {
    main: ezPalette.green100,
    light: ezPalette.green90,
    dark: ezPalette.green110,
    contrastText: ezPalette.white,
  },
  error: {
    main: ezPalette.red95,
    light: ezPalette.red80,
    dark: ezPalette.red130,
    contrastText: ezPalette.white,
  },
  warning: {
    main: ezPalette.orange100,
    light: ezPalette.orange80,
    dark: ezPalette.orange110,
    contrastText: ezPalette.white,
  },
  info: {
    main: ezPalette.blue90,
    light: ezPalette.blue60,
    dark: ezPalette.blue130,
    contrastText: ezPalette.white,
  },
  success: {
    main: ezPalette.green98,
    light: ezPalette.green80,
    dark: ezPalette.green115,
    contrastText: ezPalette.white,
  },
  alert: {
    main: ezPalette.purple100,
    light: ezPalette.purple95,
    dark: ezPalette.purple120,
    contrastText: ezPalette.white,
  },
  neutral: {
    main: ezPalette.grey140,
    light: ezPalette.white,
    dark: ezPalette.black,
    contrastText: ezPalette.white,
  },
  grey: {
    100: ezPalette.grey110,
    200: ezPalette.grey120,
    300: ezPalette.grey130,
    500: ezPalette.grey140,
    700: ezPalette.grey150,
    800: ezPalette.grey160,
    900: ezPalette.black,
  },
  text: {
    primary: ezPalette.black,
    secondary: ezPalette.grey150,
    disabled: ezPalette.grey120,
  },
  common: {
    ...ezPalette,
    destructive: ezPalette.red110,
    disabled: ezPalette.grey140,
  },
};

const defaultFont = 'Lato, "Helvetica Neue", Arial, Helvetica, sans-serif';

const typography = {
  defaultFont,
  fontFamily: defaultFont,
  headerFont: defaultFont,
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
