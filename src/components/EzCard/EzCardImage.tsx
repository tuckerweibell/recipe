import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {responsive} from '../../styles';

const styles = {
  left: {
    order: -1,
    borderTopLeftRadius: 'var(--recipe-card-border-radius)',
    borderBottomLeftRadius: 'var(--recipe-card-border-radius)',
  },
  right: {
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
    order: -1,
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
const maxHeight = props => ({maxHeight: props.imageMaxHeight || 'none', objectFit: 'cover'});
const maxWidth = props => ({maxWidth: props.imageMaxWidth || 'none'});

const position = responsive('position', {
  left: props => cx(styles.left, styles.side, maxWidth(props)),
  right: props => cx(styles.right, styles.side, maxWidth(props)),
  top: props => cx(styles.top, maxHeight(props)),
  reset: styles.reset,
});

const EzCardImage = styled.img<any>(position, {flexShrink: 0});

export default EzCardImage;
