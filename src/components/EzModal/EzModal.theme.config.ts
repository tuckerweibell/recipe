import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'modal-bg': 'white',
      'modal-footer-bg': '$gray200',
      'modal-overlay-bg': 'rgba(0, 0, 0, 0.6)',
      'modal-border': '$gray300',
    },
    radii: {
      modal: '12px',
    },
    sizes: {
      'modal-height': 'calc(100vh - $750)',
      'modal-width': '575px',
    },
    space: {
      'modal-tray-px': '$200',
      'modal-tray-py': '$300',
      'modal-px': '$400',
      'modal-py': '$300',
      'modal-content-my': '$200',
    },
  },
});
