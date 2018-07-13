import isPropValid from '@emotion/is-prop-valid';

export default props =>
  Object.entries(props)
    .filter(([key]) => isPropValid(key))
    .reduce((res, [key, value]) => ({...res, [key]: value}), {});
