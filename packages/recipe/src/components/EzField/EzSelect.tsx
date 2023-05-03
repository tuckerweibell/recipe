import React, {useMemo, useRef, useCallback} from 'react';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import EzIcon from '../EzIcon';
import EzListBox from './EzListBox';
import EzPopover from '../EzPopover';
import EzTextInput from './EzTextInput';
import {InsetIcon} from '../Icons';
import {useSelectState, useSelect} from './useSelect';
import {domProps} from '../../utils';
import {TextInputWrapper} from './Picker.styles';
import theme from '../theme.config';

const pointer = theme.css({cursor: 'default'});

/* istanbul ignore next */
const createChangeEvent = () => {
  if (typeof CustomEvent === 'function') return new CustomEvent('change');

  const evt = document.createEvent('HTMLEvents');
  evt.initEvent('change', false, true);

  return evt;
};

const popper = theme.css({
  zIndex: '$select-z', // this is hard-coded in theme.config.ts for now, but we should really pull it in from mui when we convert select to mui
});

const EzSelect = props => {
  const {onChange} = props;
  const triggerRef = useRef<HTMLInputElement>();
  const listboxRef = useRef<unknown>();
  const iconWrapperStyle = useMemo(() => ({fontSize: '13px'}), []);
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
          <div style={iconWrapperStyle}>
            <EzIcon icon={state.isOpen ? faChevronUp : faChevronDown} size="inherit" />
          </div>
        </InsetIcon>
      </TextInputWrapper>
      {state.isOpen && (
        <EzPopover
          shouldCloseOnBlur
          onClose={state.close}
          targetRef={triggerRef}
          placement="bottom-start"
          matchWidth
          className={popper()}
          classNameSuffix={props.classNameSuffix}
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
