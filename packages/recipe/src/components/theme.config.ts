/* eslint-disable filenames/match-exported */
import {createStitches, PropertyValue, ScaleValue} from '@stitches/core';

const stitches = createStitches({
  theme: {
    borderStyles: {
      // EzButton
      'button-primary': 'solid',
      'button-secondary': 'solid',
      'button-tertiary': 'none',

      // EzCard
      'card-border': 'none',

      // EzFlashMessage
      'flash-message-border-style': 'solid',
    },
    borderWidths: {
      thin: '1px',

      // EzButton
      'button-primary': '$thin',
      'button-secondary': '$thin',
      'button-secondary-focus': '$thin',
      'button-tertiary': 0,
      'button-spinner': '0.2rem',

      // EzCard
      'card-accent': '5px',
      'card-border': '0px',

      // EzFlashMessage
      'flash-message-border-width': '$thin',
      'flash-message-border-left-width': '5px',
    },
    colors: {
      blue100: '#3f61ff',
      blue200: '#ebf7ff',
      blue300: '#c1def4',
      blue500: '#77b1e2',
      blue600: '#3e90d6',
      blue650: '#3a81be',
      blue700: '#1e70bf',
      blue800: '#316da1',
      blue900: '#2b608e',
      blue950: '#0f4879',
      gray100: '#fafafb',
      gray150: '#cccfd5',
      gray200: '#f4f7f8',
      gray250: '#f5f7f7',
      gray300: '#e6e9eb',
      gray350: '#e5e6e6',
      gray400: '#ced4d9',
      gray500: '#b2b3b3',
      gray600: '#8b99a6',
      gray650: '#787878',
      gray700: '#565a5c',
      gray800: '#373d43',
      green100: '#00b373',
      black100: '#151515',
      green200: '#f3f8eb',
      green500: '#c7dfa7',
      green600: '#88bb40',
      green700: '#609b3b',
      purple200: '#f8f3fa',
      purple600: '#9b59b6',
      purple700: '#7f379c',
      red100: '#ff585d',
      red200: '#fdefef',
      red500: '#f7c1c1',
      red600: '#ec5353',
      red700: '#ae4d4d',
      red800: '#c84646',
      red900: '#b03e3e',
      red950: '#972f2f',
      teal200: '#effaf8',
      teal600: '#1bbc9b',
      teal700: '#008066',
      white: '#fff',
      yellow100: '#f9d055',
      yellow200: '#fcf6e5',
      yellow500: '#f4d689',
      yellow600: '#e9a801',
      yellow700: '#926a00',

      transparent: 'transparent',

      // semantic
      positiveBg: '$green200',
      positiveText: '$green700',
      negativeBg: '$red200',
      negative: '$red600',
      negativeText: '$red700',
      cautionBg: '$yellow200',
      cautionText: '$yellow700',
      informativeBg: '$blue200',
      informativeText: '$blue700',

      // aliases
      text: '$gray700',
      textAlt: '$black100',
      textDisabled: '$gray650',
      deemphasisText: '#565964', // this is a new color from color tokens, the old color $gray600 was not accessible but used elsewhere in non-text contexts
      focusRing: '$black100',
      icon: '$gray600',
      border: '$gray400',
      borderAlt: '$gray500',

      // CloseButton
      'dismiss-background': '$transparent',
      'dismiss-translucent-dark': 'rgba(241, 241, 244, $shadows$opacity40)',
      'dismiss-translucent-darker': 'rgba(196, 203, 207, $shadows$opacity40)',

      // EzBanner
      'banner-bg-marketing': '$purple600',
      'banner-text-marketing': '#fff',
      'banner-bg-ezordering': '$teal600',
      'banner-text-ezordering': '#fff',
      'banner-button-bg': '#fff',
      'banner-button-bg-hover': '#fff',
      'banner-button-text': '$gray700',
      'banner-button-text-hover': '$blue800',
      'banner-button-text-down': '$blue900',

      // EzButton
      /* primary */
      'button-bg-primary': '$blue600',
      'button-bg-primary-hover': '$blue800',
      'button-bg-primary-down': '$blue900',
      'button-bg-primary-focus': '$blue650',
      'button-text-primary': '#fff',
      'button-text-primary-hover': '#fff',
      'button-text-primary-down': '#fff',
      'button-border-primary': '$blue600',
      'button-border-primary-hover': '$blue800',
      'button-border-primary-down': '$blue900',
      'button-border-primary-focus': '$blue950',

      /* primary--destructive */
      'button-bg-primary-destructive': '$red600',
      'button-bg-primary-destructive-hover': '$red800',
      'button-bg-primary-destructive-down': '$red900',
      'button-bg-primary-destructive-focus': '$red600',
      'button-text-primary-destructive': '#fff',
      'button-text-primary-destructive-hover': '#fff',
      'button-text-primary-destructive-down': '#fff',
      'button-border-primary-destructive': '$red600',
      'button-border-primary-destructive-hover': '$red800',
      'button-border-primary-destructive-down': '$red900',
      'button-border-primary-destructive-focus': '$red950',

      /* secondary */
      'button-bg-secondary': '#fff',
      'button-bg-secondary-hover': '#fff',
      'button-bg-secondary-down': '#fff',
      'button-bg-secondary-focus': '#fff',
      'button-text-secondary': '$blue600',
      'button-text-secondary-hover': '$blue800',
      'button-text-secondary-down': '$blue900',
      'button-text-secondary-focus': '$blue600',
      'button-border-secondary': '$gray400',
      'button-border-secondary-hover': '$gray500',
      'button-border-secondary-down': '$gray400',
      'button-border-secondary-focus': '$gray600',

      /* secondary--destructive */
      'button-bg-secondary-destructive': '#fff',
      'button-bg-secondary-destructive-hover': '#fff',
      'button-bg-secondary-destructive-down': '#fff',
      'button-bg-secondary-destructive-focus': '#fff',
      'button-text-secondary-destructive': '$red600',
      'button-text-secondary-destructive-hover': '$red800',
      'button-text-secondary-destructive-down': '$red900',
      'button-border-secondary-destructive': '$gray400',
      'button-border-secondary-destructive-hover': '$gray500',
      'button-border-secondary-destructive-down': '$gray400',
      'button-border-secondary-destructive-focus': '$gray600',

      /* tertiary */
      'button-bg-tertiary': 'transparent',
      'button-bg-tertiary-hover': 'initial',
      'button-bg-tertiary-down': 'initial',
      'button-bg-tertiary-focus': 'initial',
      'button-text-tertiary': '$blue600',
      'button-text-tertiary-hover': '$blue800',
      'button-text-tertiary-down': '$blue900',
      'button-border-tertiary': 'initial',
      'button-border-tertiary-hover': 'initial',
      'button-border-tertiary-down': 'initial',
      'button-border-tertiary-focus': 'initial',

      /* tertiary--destructive */
      'button-bg-tertiary-destructive': 'initial',
      'button-bg-tertiary-destructive-hover': 'initial',
      'button-bg-tertiary-destructive-down': 'initial',
      'button-bg-tertiary-destructive-focus': 'initial',
      'button-text-tertiary-destructive': '$red600',
      'button-text-tertiary-destructive-hover': '$red800',
      'button-text-tertiary-destructive-down': '$red900',
      'button-border-tertiary-destructive': 'initial',
      'button-border-tertiary-destructive-hover': 'initial',
      'button-border-tertiary-destructive-down': 'initial',
      'button-border-tertiary-destructive-focus': 'initial',

      /* spinner */
      'button-spinner-bg': 'rgba(0, 0, 0, 0.15)',

      // EzCalendar
      'calendar-day-text': '$blue600',
      'calendar-day-text-dark': '$blue950',
      'calendar-day-border-selected': '$blue500',
      'calendar-day-bg-selected': '$blue200',

      // EzCard
      'card-accent': '$blue600',
      'card-bg': 'white',
      'card-border': '$border',
      'card-footer-bg': '$gray100',
      'card-mask': 'rgba(0, 0, 0, 0.05)',
      'card-mask-active': 'rgba(0, 0, 0, 0.1)',

      // EzCarousel
      'carousel-button-text': 'white',
      'carousel-button-bg': 'rgba(0, 0, 0, 0.5)',
      'carousel-button-bg-hover': 'rgba(0, 0, 0, 0.7)',

      // EzCheckbox
      'checkbox-checkmark': '$blue600',
      'checkbox-checkmark-disabled': '$textDisabled',
      'checkbox-border': '$border',
      'checkbox-border-hover': '$gray500',
      'checkbox-bg': 'white',
      'checkbox-bg-hover': '$gray100',
      'checkbox-bg-down': '$gray300',
      'checkbox-bg-disabled': '$gray200',

      // EzDateInput
      'date-input-z-index': '$date-input-z',

      // EzFlashMessage
      'flash-message-bg-success': '$green200',
      'flash-message-border-success': '$green500',
      'flash-message-accent-success': '$green600',
      'flash-message-bg-error': '$red200',
      'flash-message-border-error': '$red500',
      'flash-message-accent-error': '$red600',
      'flash-message-bg-warning': '$yellow200',
      'flash-message-border-warning': '$yellow500',
      'flash-message-accent-warning': '$yellow600',
      'flash-message-bg-info': '$blue200',
      'flash-message-border-info': '$blue500',
      'flash-message-accent-info': '$blue600',

      // EzHeading
      'heading-text': '$text',
      'subheading-text': '#565a5c', // this is neutral 160 in our new ezTheme, until we convert headings to mui
      'heading-blue': '$blue950',
      'heading-green': '$green100',

      // EzIcon
      'icon-color-green': '$green100',
      'icon-color-white': '$white',

      // EzLabel
      label: '$text',
      'label-small': '$deemphasisText',

      // EzLink
      'link-text': '$blue600',
      'link-text-hover': '$blue800',
      'link-text-down': '$blue900',

      // EzModal
      'modal-bg': 'white',
      'modal-footer-bg': '$gray200',
      'modal-overlay-bg': 'rgba(0, 0, 0, 0.6)',
      'modal-border': '$gray300',
      'modal-z-index': '$modal-z',

      // EzNavigation
      'nav-bg': 'linear-gradient(60deg, #1b2023 0%, #373d43 100%)',
      'nav-bg-selected': '#1b2023',
      'nav-text': '#b8bdc2',
      'nav-text-hover': 'white',
      'nav-text-selected': 'white',
      'notification-bg': '$red600',
      'notification-text': 'white',

      // EzOrderSummary
      'order-summary-table-border': 'none',
      'order-summary-table-bg': '$white',
      'order-summary-totals-border': 'none',
      'order-summary-totals-bg': '$gray100',
      'order-summary-instructions-bg': '$gray100',

      // EzPage
      'page-bg': '$gray200',
      'page-bg-white': '$white',

      // EzPageHeader
      'page-header-bg': '$white',

      // Tabs
      'tabs-outline-color': '$blue600',
      'tabs-active-color': '$blue600',
      'tabs-inactive-color': '$gray700',
      'tabs-focus-outline-color': '$blue600',

      // EzProgressTracker
      'progress-tracker-bg': '#006548',
      'progress-tracker-fg': '#00b06e',

      // EzRadioButton
      'radiobutton-checkmark': '$blue600',
      'radiobutton-checkmark-disabled': '$textDisabled',
      'radiobutton-border': '$border',
      'radiobutton-border-hover': '$gray500',
      'radiobutton-bg': 'white',
      'radiobutton-bg-hover': '$gray100',
      'radiobutton-bg-down': '$gray300',
      'radiobutton-bg-disabled': '$gray200',

      // EzSearchInput
      'search-input-background-image': `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238b99a6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3ccircle cx='10' cy='10' r='8'%3e%3c/circle%3e%3cline x1='24' y1='24' x2='16.65' y2='16.65'%3e%3c/line%3e%3c/svg%3e")`,

      // EzSegmentedControl
      'segmented-control-color': '$gray700',
      'segmented-control-bg': '$white',
      'segmented-control-border': '1px solid $gray400',
      'segmented-control-bg-hover': '$gray100',
      'segmented-control-border-hover': '$gray500',
      'segmented-control-color-input-checked': '$blue700',
      'segmented-control-bg-input-checked': '$blue200',
      'segmented-control-border-input-checked': '1px solid $blue500',
      'segmented-control-bg-input-active': '$gray300',

      // EzTable
      'table-bg-alt': '$gray100',
      'table-bg-hover': '$gray100',
      'table-message-bg': '$blue200',
      'table-message-border': '$blue300',
      'table-text': '$text',
      'table-heading-text': '$deemphasisText',

      // EzTextStyle
      'text-subdued': '$deemphasisText',

      // EzTimeline
      'timeline-stem': '#ced4d957',
      'footer-button-text': '$blue600',
      'footer-button-text-hover': '$blue800',
      'footer-button-bg': '$gray100',

      // EzToggle
      'toggle-track-border': '$gray500',
      'toggle-bg': '$gray200',
      'toggle-bg-selected': '$blue200',
      'toggle-border-selected': '$blue500',

      // EzTooltip
      'tooltip-text': 'white',
      'tooltip-bg': '$gray800',
      'tooltip-border': '$gray800',
      'tooltip-z-index': '$tooltip-z',
    },
    fonts: {
      defaultFont: `'Roboto Flex', 'Helvetica Neue', Arial, Helvetica, sans-serif`,
      headerFont: `Montserrat, 'Helvetica Neue', Arial, Helvetica, sans-serif`,

      // EzButton
      'button-font': '$base',

      // EzCheckbox
      'checkbox-acknowledgement': '$defaultFont',
    },
    fontSizes: {
      75: '12px',
      100: '14px',
      200: '16px',
      300: '18px',
      450: '21px',
      600: '24px',
      800: '32px',
      900: '42px',
      // aliases
      text: '$200',

      // EzButton
      'button-text': '$text',

      // EzCheckbox
      'checkbox-acknowledgement': '$100',

      // EzHeading
      h1: '$600',
      h2: '$300',
      h3: '$200',
      h4: '$200',
      h5: '$200',
      h6: '$100',

      // EzIcon
      'icon-size-xsmall': '$100',
      'icon-size-small': '$200',
      'icon-size-medium': '$450',
      'icon-size-large': '$600',
      'icon-size-xlarge': '$900',

      // EzLabel
      label: '$100',
      'label-small': '$75',

      // EzOrderSummary
      'order-summary-card-font-size': '$300',
      'order-summary-instructions-font-size': '$75',

      // EzSegmentedControl
      'segmented-control-font-size': '$100',

      // EzTable
      table: '$100',
      'table-heading': '$75',

      // EzTimeline
      'footer-button-text': '$75',
    },
    fontWeights: {
      regular: 400,
      semibold: 600,
      bold: 700,

      // EzButton
      'button-bold': '$bold',

      // EzCalendar
      'calendar-day-of-week': '$bold',

      // EzCheckbox
      'checkbox-acknowledgement': '$regular',

      // EzHeading
      h1: '$regular',
      h2: '$regular',
      h3: '$semibold',
      h4: '$regular',
      h5: '$semibold',
      h6: '$regular',

      // EzLabel
      label: '$bold',

      // EzOrderSummary
      'order-summary-card-font-weight': '$bold',
      'order-summary-totals-font-weight': '$regular',

      // EzTable
      'table-heading': '$bold',

      // EzTextStyle
      'text-strong': '$fontWeights$bold',
    },
    lineHeights: {
      1: 1,
      // aliases
      snug: 1.35,
      tight: 1.25,
      100: '18px',
      200: '20px',
      300: '22px',
      400: '24px',
      500: '30px',

      // EzButton
      'button-leading': '$tight',

      // EzHeading
      h1: '$500',
      h2: '$400',
      h3: '$300',
      h4: '$200',
      h5: '$200',
      h6: '$100',

      // EzInlineFeedback
      'inline-feedback': '$snug',

      // EzLabel
      label: '$snug',

      // EzSegmentedControl
      'segmented-control-line-height': '1.25rem',

      // EzTable
      table: '1.3em',
    },
    outlines: {
      focusOutline: '2px solid $colors$black100',
      focusOutlineOffset: '2px',
    },
    radii: {
      // sizes
      regular: '4px',

      // shapes
      pill: '9999px',
      round: '50%',

      // EzBanner
      'banner-rounded': '$regular',
      'banner-button-rounded': '$regular',

      // EzButton
      'button-primary': '$regular',
      'button-secondary': '$regular',
      'button-tertiary': 0,

      // EzCard
      'card-rounded': '6px',

      // EzCheckbox
      checkbox: '3px',

      // EzFlashMessage
      'flash-message-rounded': '6px',

      // EzModal
      modal: '12px',

      // EzOrderSummary
      'order-summary-instructions-radii': '$regular',

      // EzProgressTracker
      'progress-tracker-rounded': '$pill',

      // EzSegmentedControl
      'segmented-control-border-radius': '$regular',

      // EzTable
      'table-rounded': '6px',

      // EzTimeline
      'footer-button-rounded': '6px',
    },
    sizes: {
      50: '4px',
      150: '12px',
      200: '16px',
      300: '24px',
      400: '32px',
      750: '60px',
      full: '100%',

      // EzAppLayout
      'app-layout-max-width': '1000px',

      // EzBlankState
      'blank-state-image-size': '150px',
      'blank-state-image-max-size': '$full',

      // EzButton
      'button-spinner': '1.28571429rem',

      // EzCarousel
      'carousel-button-width': '$750',

      // EzCheckbox
      checkbox: '$200',

      // EzLayout
      // flex-basis uses size instead of space
      'layout-gap': '$150',

      // EzModal
      'modal-height': 'calc(100vh - $750)',
      'modal-width': '575px',

      // EzNavigation
      'nav-sidebar-w': '240px',
      'nav-bar-h': '70px',
      'nav-bar-menu-h': 'calc(100vh - $sizes$nav-bar-h)',

      // EzOrderSummary
      'order-summary-table-first-w': '$750',
      'order-summary-table-last-w': '1%',
      'order-summary-totals-table-w': 'auto',
      'order-summary-totals-cells-w': '100%',

      // EzPageSection
      'page-section-main-w': 'calc(100% - 290px - 48px)',
      'page-section-aside-w': '290px',

      // EzRadioButton
      radiobutton: '$200',

      // EzSegmentedControl
      'segmented-control-flex-basis': 'auto',
      'segmented-control-fieldset-h': '1px',
      'segmented-control-fieldset-w': '1px',

      // EzTimeline
      'timeline-icon': '2rem',
      'timeline-gap': '$150',
      'timeline-gutter': 'calc($timeline-icon + $timeline-gap)',
      'timeline-page-gutter-sm': '$200',
      'timeline-page-gutter-lg': '$400',

      // Icons
      'icon-size-baseline': '1em',
    },
    space: {
      25: '2px',
      50: '4px',
      75: '6px',
      100: '8px',
      150: '12px',
      200: '16px',
      250: '20px',
      300: '24px',
      400: '32px',
      600: '48px',
      750: '60px',

      // CloseButton
      'dismiss-padding': '$250',

      // EzAutosuggest
      'autosuggest-z-index': '$autosuggest-z',

      // EzBanner
      'banner-body-px': '$400',
      'banner-body-py': '$300',
      'banner-button-px': '$200',
      'banner-button-py': '$100',

      // EzBlankState
      'blank-state-py': '$750',
      'blank-state-px': '$250',
      'blank-state-content-spacing': '$250',
      'blank-state-image-margin': '0',

      // EzButton
      'button-px': '$200',
      'button-py': '$75',
      'button-spinner': '0.642857rem',

      // EzCard
      'card-p': '$250',
      'card-sm-p': '$150',
      'card-md-p': '$250',
      'card-content-gap': '$200',

      // EzCarousel
      'carousel-item-gap': '$75',
      'carousel-item-gap-double': '$150',
      'carousel-item-offset': '$25',

      // EzFlashMessage
      'flash-message-p': '$250',

      // EzFormLayout
      'form-gap': '$300',

      // EzLabel
      'label-my': '$space$50',
      'label-mx': '$space$150',

      // EzLayout
      'layout-gap': '$150',

      // EzModal
      'modal-tray-px': '$200',
      'modal-tray-py': '$300',
      'modal-px': '$400',
      'modal-py': '$300',
      'modal-content-my': '$200',

      // EzOrderSummary
      'order-summary-table-py': '$150',
      'order-summary-table-px': '$100',
      'order-summary-table-pl': '$100',
      'order-summary-table-pr': '$250',
      'order-summary-totals-pl': 'calc($750 + $100)',
      'order-summary-totals-ml': 'calc($100 * -1)',
      'order-summary-totals-mr': 'calc($100 * -1)',
      'order-summary-totals-py': '$50',
      'order-summary-totals-px': '$100',
      'order-summary-instructions-mt': '$100',
      'order-summary-instructions-py': '$150',
      'order-summary-instructions-px': '$200',

      // EzPage
      'page-content-gap': '$150',
      'page-heading-mb': '$150',
      'page-heading-ml': '$150',
      'page-px': '$200',
      'page-py': '$200',
      'page-md-content-gap': '$300',
      'page-md-px': '$400',
      'page-md-py': '$400',

      // EzPageSection
      'page-section-gap-tight': '$150',
      'page-section-gap': '$300',
      'page-section-gap-double': '$250',
      'page-section-gap-horizontal': '$600',

      // EzPageHeader
      'page-header-py': '$150',
      'page-header-px': '$250',
      'page-header-md-py': '$200',
      'page-header-md-px': '$400',
      'page-header-md-subheader-py': '$250',

      // Tabs
      'tabs-ml': '$150',
      'tabs-py': '$150',
      'tabs-px': '$100',

      // EzSearchInput
      'search-input-padding-left': '$400',

      // EzSegmentedControl
      'segmented-control-label-py': 'calc($100 - 0.125rem)',
      'segmented-control-label-px': '$150',
      'segmented-control-ml': '-1px',
      'segmented-control-fieldset-m': '-1px',

      // EzSelect
      'select-z-index': '$select-z',

      // EzTimeline
      'footer-button-x': '$250',
      'footer-button-y': '$150',

      // EzTooltip
      'tooltip-padding': '$100',

      // Icons
      'icon-baseline-top': '0.125em',
      'icon-inset-pr': '0.75rem',
      'icon-inset-pl': '0.75rem',
    },
    shadows: {
      sm: '0 1px 1px 0 rgba(0, 0, 0, 0.12)',
      'focus-ring': '$colors$focusRing 0px 0px 2px 2px',
      opacity40: 0.4,
      opacity45: 0.45,

      // EzBanner
      'banner-shadow': '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
      'banner-button-shadow': '0 4px 12px 0 rgba(0, 0, 0, 0.12)',
      'banner-button-shadow-dark': '0 6px 12px 0 rgba(0, 0, 0, 0.2)',

      // EzButton
      'button-primary': '$sm',
      'button-secondary': '$sm',
      'button-secondary-hover': '$sm',
      'button-secondary-down': '$sm',
      'button-secondary-focus': '$sm',
      'button-tertiary': 'none',
      'button-spinner': '0 0 0 1px transparent',
      'button-primary-focus-ring': '$focus-ring',
      'button-secondary-focus-ring': '$focus-ring',

      // EzCard
      card: '0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15)',
      'card-quiet': '0 0 0 1px $colors$gray400',
      // double up the shadow on hover
      'card-hover': '$card, $card',
      'card-focus': '$card, rgb(0, 95, 204) 0 0px 0px 2px',

      // EzFlashMessage
      'flash-message-box-shadow-success': '0 0 0 0 $green600',
      'flash-message-box-shadow-error': '0 0 0 0 $red600',
      'flash-message-box-shadow-warning': '0 0 0 0 $yellow600',
      'flash-message-box-shadow-info': '0 0 0 0 $blue600',

      // EzPageHeader
      'page-header-box-shadow': 'inset 0 -1px 0 0 $colors$gray400',

      // EzPopover
      'popover-z-index': '$popover-z',

      // Tabs
      'tabs-active-box-shadow': 'inset 0 -2px 0 0 $colors$blue600',
      'tabs-hover-box-shadow': 'inset 0 -2px 0 0 $colors$gray400',

      // EzSegmentedControl
      'segmented-control-box-shadow': '$sm',

      // EzTimeline
      'footer-button': '$sm',
    },
    zIndices: {
      'icon-inset-z1': 1,
      'modal-z': 1300, // this is hard-coded in theme.config.ts for now, but we should really pull it in from mui when we convert modals to mui
      'autosuggest-z': 1350, // this is hard-coded in theme.config.ts for now, but we should really pull it in from mui when we convert autosuggest to mui
      'date-input-z': 1350, // this is hard-coded in theme.config.ts for now, but we should really pull it in from mui when we convert modals to mui
      'popover-z': 1350, // this is hard-coded in theme.config.ts for now, but we should really pull it in from mui when we convert popovers to mui
      'select-z': 1350, // this is hard-coded in theme.config.ts for now, but we should really pull it in from mui when we convert select to mui
      'tooltip-z': 1500, // this is hard-coded in theme.config.ts for now, but we should really pull it in from mui when we convert tooltips to mui
    },
  },
  utils: {
    // util for https://developer.mozilla.org/en-US/docs/Web/CSS/inset
    inset: (value: PropertyValue<'top'> | ScaleValue<'space'>) => ({
      top: value,
      right: value,
      bottom: value,
      left: value,
    }),
    py: (value: PropertyValue<'paddingTop'> | ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    px: (value: PropertyValue<'paddingLeft'> | ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    my: (value: PropertyValue<'marginTop'> | ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value: PropertyValue<'marginLeft'> | ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    // util for IE support for https://developer.mozilla.org/en-US/docs/Web/CSS/place-items
    placeItems: (value: PropertyValue<'placeItems'>) => ({
      justifyContent: value,
      alignItems: value,
    }),
    srOnly: () => ({
      border: 'none',
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px',
    }),
    gap: (value: PropertyValue<'gap'> | ScaleValue<'space'>) => ({
      gap: value,
      '.no-flexgap &': {
        margin: `calc(${value} / 2 * -1)`,
      },
      '.no-flexgap && > *': {margin: `calc(${value} / 2)`},
    }),
    roundedTop: (value: PropertyValue<'borderTopLeftRadius'> | ScaleValue<'radii'>) => ({
      borderTopLeftRadius: value,
      borderTopRightRadius: value,
    }),
    roundedBottom: (value: PropertyValue<'borderBottomLeftRadius'> | ScaleValue<'radii'>) => ({
      borderBottomLeftRadius: value,
      borderBottomRightRadius: value,
    }),
    roundedLeft: (value: PropertyValue<'borderTopLeftRadius'> | ScaleValue<'radii'>) => ({
      borderTopLeftRadius: value,
      borderBottomLeftRadius: value,
    }),
    roundedRight: (value: PropertyValue<'borderTopRightRadius'> | ScaleValue<'radii'>) => ({
      borderTopRightRadius: value,
      borderBottomRightRadius: value,
    }),
  },
  media: {
    base: '(min-width: 0px)',
    baseToMedium: '(max-width: 767.9375px)',
    baseToLarge: '(max-width: 1060.9375px)',
    medium: '(min-width: 768px)',
    mediumToLarge: '(min-width: 768px) and (max-width: 1060.9375px)',
    large: '(min-width: 1061px)',
  },
});

export const marketplaceTheme = stitches.createTheme({
  borderStyles: {
    'card-border': 'solid',
  },
  borderWidths: {
    'button-secondary': '$thin',
    'card-border': '$thin',
  },
  colors: {
    'page-bg': 'white',
    'card-border': '$colors$gray150',

    /* secondary button default */
    'button-bg-secondary': '$white',
    'button-border-secondary': '$blue600',
    'button-text-secondary': '$blue600',

    /* secondary button hover */
    'button-bg-secondary-hover': '$blue200',
    'button-border-secondary-hover': '$blue600',
    'button-text-secondary-hover': '$blue600',

    /* secondary button active */
    'button-bg-secondary-down': '$blue300',
    'button-border-secondary-down': '$blue600',
    'button-text-secondary-down': '$blue800',

    /* secondary button focus */
    'button-bg-secondary-focus': '$blue200',
    'button-border-secondary-focus': 'rgba(63, 97, 255, 0.3)',
    'button-text-secondary-focus': '$blue600',
  },
  fonts: {
    defaultFont: `Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif`,
    headerFont: `Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif`,
  },
  fontSizes: {
    h1: '$800',
    h2: '$600',
    h3: '$300',
    h4: '$200',
    h5: '$100',
    h6: '$75',
  },
  fontWeights: {
    bold: 700,
    regular: 400,

    // EzHeading
    h1: '$regular',
    h2: '$bold',
    h3: '$bold',
    h4: '$regular',
    h5: '$bold',
    h6: '$regular',
  },
  lineHeights: {
    snug: 1.35,

    // EzHeading
    h1: '$snug',
    h2: '$snug',
    h3: '$snug',
    h4: '$snug',
    h5: '$snug',
    h6: '$snug',
  },
  radii: {
    'flash-message-rounded': 0,
  },
  shadows: {
    card: 'none',
    'button-secondary': '0px 1px 2px rgba(0, 0, 0, 0.12)',
    'button-secondary-hover': '0px 1px 6px rgba(0, 0, 0, 0.16)',
    'button-secondary-down': '0px 0px 3px rgba(0, 0, 0, 0.2)',
    'button-secondary-focus-ring': '0 0 0 3px rgba(63, 97, 255, 0.3)',
  },
  space: {
    'carousel-item-offset': '$250',
  },
});

export default stitches;
