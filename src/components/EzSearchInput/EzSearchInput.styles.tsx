import {css} from '@emotion/core';
import styled from '@emotion/styled';
import EzTextInput from '../EzField/EzTextInput';

const base = () => css`
  padding-left: 32px;
  background-repeat: no-repeat;
  background-position: 12px center, calc(100% - 10px) center;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238b99a6' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3ccircle cx='10' cy='10' r='8'%3e%3c/circle%3e%3cline x1='24' y1='24' x2='16.65' y2='16.65'%3e%3c/line%3e%3c/svg%3e");
`;

export default styled(EzTextInput)(base as any);
