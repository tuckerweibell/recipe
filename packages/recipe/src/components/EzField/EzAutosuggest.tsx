import React, {useRef} from 'react';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {TextInputWrapper} from './Picker.styles';
import EzIcon from '../EzIcon';
import EzListBox from './EzListBox';
import EzPopover from '../EzPopover';
import EzTextInput from './EzTextInput';
import {InsetIcon} from '../Icons';
import {useComboBoxState, useComboBox} from './useComboBox';
import theme from '../theme.config';
import {useUpdateEffect} from '../../utils/hooks';

const popper = theme.css({
  zIndex: '$autosuggest-z', // this is hard-coded in theme.config.ts for now, but we should really pull it in from mui when we convert autosuggest to mui
});

const iconWrapperStyle = theme.css({
  alignItems: 'center',
  display: 'flex',
  fontSize: '13px',
});

const searchIconStyle = theme.css({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '12px center, calc(100% - 10px) center',
  backgroundImage: '$search-input-background-image',
  '&&': {
    paddingLeft: '$search-input-padding-left',
  },
  WebkitAppearance: 'none',
});

const EzAutosuggest = ({loading, options, ...props}) => {
  const triggerRef = useRef<HTMLInputElement>();
  const listboxRef = useRef<unknown>();
  const ariaLabelledBy = props['aria-labelledby'];

  const loadingOptions = [{label: 'Loading...', value: 'loading', disabled: true}];
  const stateOptions = loading ? loadingOptions : options;
  const state = useComboBoxState({options: stateOptions, ...props});
  const {inputProps, listBoxProps} = useComboBox(
    {
      ...props,
      triggerRef,
      popoverRef: listboxRef,
    },
    state
  );

  useUpdateEffect(() => {
    if (props.value != null) state.setInputValue(props.value);
  }, [props.value]);

  return (
    <div>
      <TextInputWrapper
        className={props.className}
        disabled={props.disabled}
        css={{
          '&& input': {paddingRight: props.type === 'autosuggest-search' ? '0.5em' : undefined},
        }}
      >
        <EzTextInput
          {...inputProps}
          className={props.type === 'autosuggest-search' ? searchIconStyle() : undefined}
          error={props.error}
          ref={triggerRef}
          touched={props.touched}
          type="search"
        />
        {props.type === 'autosuggest' && (
          <InsetIcon insetY0 right0 pr2>
            <div className={iconWrapperStyle()}>
              <EzIcon icon={state.isOpen ? faChevronUp : faChevronDown} size="inherit" />
            </div>
          </InsetIcon>
        )}
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
            collection={state.collection}
            onClick={() => triggerRef.current.focus()}
            ref={listboxRef}
            searchWords={[inputProps.value]}
            selectionManager={state.selectionManager}
          />
        </EzPopover>
      )}
    </div>
  );
};

export default EzAutosuggest;
