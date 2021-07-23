import React from 'react';
import Style from '@ezcater/snitches';
import {useListState} from '@react-stately/list';
import theme from './EzChoice.theme.config';
import EzCheckbox from '../EzCheckbox';
import EzRadioButton from '../EzRadioButton';
import EzLayout from '../EzLayout';
import {domProps} from '../../utils';
import {useUniqueId} from '../../utils/hooks';
import {SlotProvider} from '../../utils/slots';
import Slot from '../EzContent/Slot';

const box = theme.css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',

  variants: {
    bordered: {
      true: {
        border: '1px solid $border',
        borderRadius: '$regular',
        padding: '$75 $150',
        lineHeight: '$tight',
        whiteSpace: 'nowrap',
        boxShadow: '$sm',
        '&:hover': {
          borderColor: '$gray500',
        },
        '&:focus-within': {
          boxShadow: '$focus-ring',
        },
      },
    },
    disabled: {
      true: {
        cursor: 'default',
        opacity: 0.45,
        pointerEvents: 'none',
      },
    },
  },

  compoundVariants: [
    {
      bordered: 'true',
      disabled: 'true',
      css: {boxShadow: 'none'},
    },
  ],
});

const label = theme.css({
  maxWidth: 'calc($full - $300)',
});

const nestedContent = theme.css({
  marginTop: '$150',
  marginLeft: '$300',
  display: 'block',
  flexBasis: '$full',
});

const inputStyles = theme.css({marginRight: '$100'});

const Option = ({input, bordered, disabled, rendered}) => {
  const id = useUniqueId();
  return (
    <Style ruleset={theme}>
      <SlotProvider
        slots={{label: {htmlFor: id, className: label()}, content: {className: nestedContent()}}}
      >
        <span className={box({bordered, disabled})}>
          {React.cloneElement(input, {id})}
          {rendered}
        </span>
      </SlotProvider>
    </Style>
  );
};

export default props => {
  const {
    type,
    name: fieldName,
    value: selected = [],
    options,
    onChange,
    onFocus,
    onBlur,
    children,
  } = props;
  const multiple = type === 'checkbox';
  const name = multiple ? `${fieldName}[]` : fieldName;

  const state = useListState({children});
  const choiceOptions = options || Array.from(state.collection);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {value, checked} = e.currentTarget;

    const newSelection = multiple
      ? checked
        ? [value].concat(selected)
        : selected.filter(s => s !== value)
      : value;

    onChange({
      ...e,
      target: {
        ...props,
        checked,
        value: newSelection,
      },
    });
  }

  return (
    <Style ruleset={theme}>
      <EzLayout layout={props.bordered ? 'cluster' : 'stack'}>
        {choiceOptions.map((choice, i) => {
          const rendered = choice.label ? (
            <Slot element="label" slot="label">
              {choice.label}
            </Slot>
          ) : (
            choice.rendered
          );
          const value = choice.value || choice.textValue;
          const disabled = props.disabled || choice.disabled || choice.props?.disabled;

          const inputProps = domProps(
            {
              checked:
                'value' in props
                  ? multiple
                    ? selected.indexOf(value) >= 0
                    : value === selected
                  : undefined,
              disabled,
              name,
              onChange: handleChange,
              onFocus,
              onBlur,
              type,
              value,
            },
            inputStyles()
          );
          const input = React.createElement(multiple ? EzCheckbox : EzRadioButton, inputProps);

          return <Option key={i} bordered={props.bordered} {...{disabled, input, rendered}} />;
        })}
      </EzLayout>
    </Style>
  );
};
