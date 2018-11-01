import PropTypes from 'prop-types';
import {base, resets} from './EzPage.styles';
import {childStyles} from './styles';
import styled, {Theme} from '../../themes/styled';

type PageProps = {
  theme?: Theme;
};

/**
 * Page is the main content container for a page.
 */
const EzPage = styled.div<PageProps>(base, resets, childStyles);

//@ts-ignore
EzPage.propTypes = {
  /**
   * The content to render inside this component.
   */
  children: PropTypes.node.isRequired,
};

EzPage.displayName = 'EzPage';

/**
 * @component
 */
export default EzPage;
