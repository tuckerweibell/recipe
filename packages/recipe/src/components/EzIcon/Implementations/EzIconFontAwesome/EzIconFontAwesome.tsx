import React, {forwardRef} from 'react';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import EzIconMui from '../EzIconMui/EzIconMui';
import {EzIconMuiProps, Ref} from '../../EzIcon.types';

interface EzIconFontAwesomeProps extends EzIconMuiProps {
  icon: IconDefinition;
}

/**
 * @see https://mui.com/material-ui/icons/#font-awesome
 */
const EzIconFontAwesome = forwardRef<Ref, EzIconFontAwesomeProps>(({icon, ...props}, ref) => {
  const {
    icon: [width, height, _ligatures, _unicode, svgPathData],
  } = icon;

  return (
    <EzIconMui ref={ref} viewBox={`0 0 ${width} ${height}`} {...props}>
      {typeof svgPathData === 'string' ? (
        <path d={svgPathData} />
      ) : (
        svgPathData.map((d: string, i: number) => (
          <path key={d} style={{opacity: i === 0 ? 0.4 : 1}} d={d} />
        ))
      )}
    </EzIconMui>
  );
});

EzIconFontAwesome.displayName = 'EzIconFontAwesome';

export default EzIconFontAwesome;
