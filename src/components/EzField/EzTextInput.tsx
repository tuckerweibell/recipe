import React, {forwardRef} from 'react';
import {filterValidProps} from '../../utils';
import styled from '../../themes/styled';
import styles from './EzTextInput.styles';

type ErrorOrMessage = string | boolean;

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: ErrorOrMessage;
  touched?: boolean;
};

const EzTextInput = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <input ref={ref} {...filterValidProps(props)} />
));

export default styled(EzTextInput)(styles);
