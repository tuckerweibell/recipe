/** @jsx jsx */
import {jsx} from '@emotion/core';
import {useRef, useCallback} from 'react';
import {TextInputWrapper, OverlayFieldWrapper} from './EzSelect.styles';
import {useOverlayPosition} from './Overlays';
import EzTextInput from './EzTextInput';
import EzPopover from '../EzPopover';
import {ChevronIcon, InsetIcon} from '../Icons';
import EzListBox from './EzListBox';
import {useSelectState, useSelect} from './useSelect';

const EzSelect = props => {
  const {onChange} = props;
  const triggerRef = useRef<HTMLInputElement>();
  const listboxRef = useRef<unknown>();
  const ariaLabelledBy = props['aria-labelledby'];
  const containerRef = useRef<HTMLDivElement>();
  const changeEvent = useCallback(
    optionValue => {
      const event = new Event('change');
      // TODO: replace onChange with something like onSelectionChange. Issue #222.
      (containerRef.current as any).value = optionValue;
      containerRef.current.dispatchEvent(event);
      return event;
    },
    [containerRef]
  );

  const state = useSelectState({
    ...props,
    onSelectionChange(value) {
      onChange(changeEvent(value));
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
  const overlayPosition = useOverlayPosition({
    targetRef: triggerRef,
    placement: 'bottom-start',
  });

  return (
    <OverlayFieldWrapper
      ref={containerRef}
      hasError={props.touched && props.error}
      opened={state.isOpen}
    >
      <TextInputWrapper className={props.className} disabled={props.disabled}>
        <EzTextInput
          {...inputProps}
          ref={triggerRef}
          error={props.error}
          touched={props.touched}
          css={{cursor: 'default'}}
        />
        <InsetIcon insetY0 right0 pr2>
          <ChevronIcon flip={state.isOpen} />
        </InsetIcon>
      </TextInputWrapper>
      {state.isOpen && (
        <EzPopover shouldCloseOnBlur onClose={state.close} {...overlayPosition}>
          <EzListBox
            {...listBoxProps}
            aria-labelledby={[ariaLabelledBy, props.id].join(' ')}
            ref={listboxRef}
            onClick={() => triggerRef.current.focus()}
            collection={state.collection}
            selectionManager={state.selectionManager}
          />
        </EzPopover>
      )}
    </OverlayFieldWrapper>
  );
};

export default EzSelect;
