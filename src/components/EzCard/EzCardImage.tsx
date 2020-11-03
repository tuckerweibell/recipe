import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {responsive} from '../../styles';

const styles = {
  left: {
    borderTopLeftRadius: 'var(--recipe-card-border-radius)',
    borderBottomLeftRadius: 'var(--recipe-card-border-radius)',
  },
  right: {
    order: 1,
    borderTopRightRadius: 'var(--recipe-card-border-radius)',
    borderBottomRightRadius: 'var(--recipe-card-border-radius)',
  },
  side: {
    objectFit: 'cover',
    flexBasis: '50%',
    width: 0,
    '& + *': {
      flexBasis: '50%',
    },
  },
  top: {
    maxWidth: '100%',
    width: '100%',
    height: 'auto',
    flexBasis: '100%',
    borderTopLeftRadius: 'var(--recipe-card-border-radius)',
    borderTopRightRadius: 'var(--recipe-card-border-radius)',
  },
  reset: {
    flexBasis: 'auto',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    order: 0,
  },
};

const cx = (...args) => args.reduce((res, v) => css(res, v), {});

const position = responsive('position', {
  left: cx(styles.left, styles.side),
  right: cx(styles.right, styles.side),
  top: styles.top,
  reset: styles.reset,
});

const EzCardImage = styled.img<any>(position);

export default EzCardImage;
