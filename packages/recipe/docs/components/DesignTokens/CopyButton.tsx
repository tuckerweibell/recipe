import React, {useEffect, useState} from 'react';
import {IconButton} from '@mui/material';
import {CopyButtonProps} from './DesignTokens.types';
import {faCircleCheck, faCopy} from '@fortawesome/free-solid-svg-icons';
import EzIcon from '../../../src/components/EzIcon';

const CopyButton = ({textToCopy, darkMode = false}: CopyButtonProps) => {
  const [showCopied, setShowCopied] = useState(false);

  const handleOnClick = () => {
    navigator.clipboard.writeText(textToCopy);
    setShowCopied(true);
  };

  useEffect(() => {
    if (showCopied) {
      const timerId = setTimeout(() => setShowCopied(false), 500);
      return () => clearTimeout(timerId);
    }
    return undefined;
  }, [showCopied]);

  return (
    <IconButton aria-label="copy to clipboard" onClick={handleOnClick} size="small" disableRipple>
      <EzIcon
        icon={showCopied ? faCircleCheck : faCopy}
        color={showCopied ? 'common.green100' : darkMode ? 'common.white' : 'inherit'}
        size="small"
      />
    </IconButton>
  );
};

export default CopyButton;
