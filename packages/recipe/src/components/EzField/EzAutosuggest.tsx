import React, {useRef} from 'react';
import {TextInputWrapper} from './Picker.styles';
import theme from '../theme.config';
import EzTextInput from './EzTextInput';
import EzPopover from '../EzPopover';
import {ChevronIcon, InsetIcon} from '../Icons';
import EzListBox from './EzListBox';
import {useComboBoxState, useComboBox} from './useComboBox';

const popper = theme.css({
  zIndex: '$autosuggest-z', // this is hard-coded in theme.config.ts for now, but we should really pull it in from mui when we convert autosuggest to mui
});

const EzAutosuggest = props => {
  const triggerRef = useRef<HTMLInputElement>();
  const listboxRef = useRef<unknown>();
  const ariaLabelledBy = props['aria-labelledby'];

  const state = useComboBoxState(props);
  const {inputProps, listBoxProps} = useComboBox(
    {
      ...props,
      triggerRef,
      popoverRef: listboxRef,
    },
    state
  );

  return (
    <div>
      <TextInputWrapper className={props.className} disabled={props.disabled}>
        <EzTextInput {...inputProps} ref={triggerRef} error={props.error} touched={props.touched} />
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
            searchWords={[inputProps.value]}
          />
        </EzPopover>
      )}
    </div>
  );
};

export default EzAutosuggest;
