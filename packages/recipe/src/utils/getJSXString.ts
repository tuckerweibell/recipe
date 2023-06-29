import {ReactNode} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

const getJSXString = (TargetComponent: ReactNode) =>
  reactElementToJSXString(TargetComponent, {
    maxInlineAttributesLineLength: 100,
    showDefaultProps: false,
  });

export default getJSXString;
