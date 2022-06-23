import React, {useRef, useCallback} from 'react';
import theme from '../theme.config';
import {TextInputWrapper} from './Picker.styles';
import EzTextInput from './EzTextInput';
import EzPopover from '../EzPopover';
import {ChevronIcon, InsetIcon} from '../Icons';
import EzListBox from './EzListBox';
import {useSelectState, useSelect} from './useSelect';
import {domProps} from '../../utils';

const pointer = theme.css({cursor: 'default'});

/* istanbul ignore next */
const createChangeEvent = () => {
  if (typeof CustomEvent === 'function') return new CustomEvent('change');

  const evt = document.createEvent('HTMLEvents');
  evt.initEvent('change', false, true);

  return evt;
};

const EzSelect = props => {
  const {onChange} = props;
  const triggerRef = useRef<HTMLInputElement>();
  const listboxRef = useRef<unknown>();
  const ariaLabelledBy = props['aria-labelledby'];
  const containerRef = useRef<HTMLDivElement>();
  const changeEvent = useCallback(
    optionValue => {
      const event = createChangeEvent();
      // TODO: deprecate and remove in favor of onSelectionChange. Issue #222.
      (containerRef.current as any).value = optionValue;
      containerRef.current.dispatchEvent(event);
      return event;
    },
    [containerRef]
  );

  const state = useSelectState({
    ...props,
    onSelectionChange(value) {
      onChange?.(changeEvent(value));
      props.onSelectionChange?.(value);
    },
  });
  const {inputProps, listBoxProps} = useSelect(
    {
      ...props,
      triggerRef,
      popoverRef: listboxRef,
    },
    state
  );

  return (
    <div ref={containerRef}>
      <TextInputWrapper className={props.className || ''} disabled={props.disabled}>
        <EzTextInput
          {...domProps(inputProps, pointer())}
          ref={triggerRef}
          error={props.error}
          touched={props.touched}
        />
        <InsetIcon insetY0 right0 pr2>
          <ChevronIcon flip={state.isOpen} />
        </InsetIcon>
      </TextInputWrapper>
      {state.isOpen && (
        <EzPopover
          shouldCloseOnBlur
          onClose={state.close}
          targetRef={triggerRef}
          placement="bottom-start"
          matchWidth
        >
          <EzListBox
            {...listBoxProps}
            aria-labelledby={[ariaLabelledBy, props.id].join(' ')}
            ref={listboxRef}
            onClick={() => triggerRef.current.focus()}
            collection={state.collection}
            selectionManager={state.selectionManager}
            focusLabel={props.focusLabel}
          />
        </EzPopover>
      )}
    </div>
  );
};

export default EzSelect;
