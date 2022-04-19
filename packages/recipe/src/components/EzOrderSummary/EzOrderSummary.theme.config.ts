import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'order-summary-table-border': 'none',
      'order-summary-table-bg': '$white',
      'order-summary-totals-border': 'none',
      'order-summary-totals-bg': '$gray100',
      'order-summary-instructions-bg': '$gray100',
    },
    fontSizes: {
      'order-summary-card-font-size': '$300',
      'order-summary-instructions-font-size': '$75',
    },
    fontWeights: {
      'order-summary-card-font-weight': '$bold',
      'order-summary-totals-font-weight': '$regular',
    },
    space: {
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
    },
    sizes: {
      'order-summary-table-first-w': '$750',
      'order-summary-table-last-w': '1%',
      'order-summary-totals-table-w': 'auto',
      'order-summary-totals-cells-w': '100%',
    },
    radii: {
      'order-summary-instructions-radii': '$regular',
    },
  },
});
