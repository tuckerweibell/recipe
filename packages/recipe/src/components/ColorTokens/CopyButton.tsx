import React, {useEffect, useState} from 'react';
import {IconButton} from '@mui/material';
import EzIcon from '../EzIcon';
import {faCircleCheck, faCopy} from './ColorTokenIcons';

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton = ({textToCopy}: CopyButtonProps) => {
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
      <EzIcon icon={showCopied ? faCircleCheck : faCopy} color={showCopied ? 'green' : null} />
    </IconButton>
  );
};

export default CopyButton;
