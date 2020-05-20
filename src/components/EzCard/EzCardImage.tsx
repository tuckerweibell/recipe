import {css} from '@emotion/core';
import {responsive} from '../../styles';
import styled from '../../themes/styled';

const styles = {
  left: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  right: {
    order: 1,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
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
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
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
