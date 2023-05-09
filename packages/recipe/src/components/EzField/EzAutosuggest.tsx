import React, {useMemo, useRef} from 'react';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {TextInputWrapper} from './Picker.styles';
import EzIcon from '../EzIcon';
import EzListBox from './EzListBox';
import EzPopover from '../EzPopover';
import EzTextInput from './EzTextInput';
import {InsetIcon} from '../Icons';
import {useComboBoxState, useComboBox} from './useComboBox';
import theme from '../theme.config';

const popper = theme.css({
  zIndex: '$autosuggest-z', // this is hard-coded in theme.config.ts for now, but we should really pull it in from mui when we convert autosuggest to mui
});

const EzAutosuggest = props => {
  const triggerRef = useRef<HTMLInputElement>();
  const listboxRef = useRef<unknown>();
  const iconWrapperStyle = useMemo(
    () => ({
      alignItems: 'center',
      display: 'flex',
      fontSize: '13px',
    }),
    []
  );
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
            searchWords={[inputProps.value]}
          />
        </EzPopover>
      )}
    </div>
  );
};

export default EzAutosuggest;
