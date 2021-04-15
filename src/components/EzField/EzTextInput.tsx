import React, {forwardRef} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzField.theme.config';
import {domProps, filterValidProps} from '../../utils';

type ErrorOrMessage = string | boolean;

type Props = React.AllHTMLAttributes<any> & {
  error?: ErrorOrMessage;
  touched?: boolean;
  multiLine?: boolean;
};

const textInput = theme.css({
  fontFamily: '$sans',
  fontSize: '$text',
  display: 'block',
  color: '$text',
  width: '$full',
  backgroundColor: 'white',
  border: '1px solid $border',
  borderRadius: '$regular',

  // inputs and buttons should be equivalent in size, but since inputs can't be a line-height lower than 1.25em
  // we have to use a line-height of 1.25rem and deduct the additional 0.25rem from the vertical padding
  lineHeight: '1.25rem',
  padding: 'calc($100 - 0.125rem) $150',

  '&:enabled': {boxShadow: '$sm'},
  '&::placeholder': {color: '$gray500'},

  variants: {
    error: {
      true: {},
      false: {
        '&:enabled': {':hover': {borderColor: '$gray500'}},
      },
    },
    touched: {true: {}},
    disabled: {
      true: {
        backgroundColor: '$gray200',
        borderColor: '$gray300',
        color: '$textDisabled',
      },
    },
    showInlineError: {
      true: {
        borderBottomRightRadius: '0',
        borderBottomLeftRadius: '0',
        when: {
          medium: {
            borderBottomRightRadius: '$regular',
            borderBottomLeftRadius: '$regular',
          },
        },
      },
    },
  },

  compoundVariants: [
    {
      error: 'true',
      touched: 'true',
      css: {
        borderColor: '$negative',
        // iconOffset
        paddingRight: '24px',
      },
    },
  ],
});

export const CustomInput = ({children, ...props}) => {
  const el = React.Children.only(children);
  const options: any = {...props, error: Boolean(props.error)};
  return (
    <Style ruleset={theme}>{React.cloneElement(el, domProps(el.props, textInput(options)))}</Style>
  );
};

const EzTextInput = forwardRef<any, Props>(({error, ...props}, ref) => {
  const ElementType: React.ElementType = props.multiLine ? 'textarea' : 'input';
  const options: any = {...props, error: Boolean(error)};
  return (
    <Style ruleset={theme}>
      <ElementType ref={ref} {...domProps(props, textInput(options))} />
    </Style>
  );
});

export default EzTextInput;
