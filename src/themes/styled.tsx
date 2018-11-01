import styled, {CreateStyled} from 'react-emotion';
import * as standard from './standard';

export type Theme = typeof standard;

export default styled as CreateStyled<Theme>;
