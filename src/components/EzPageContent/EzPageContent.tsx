import PropTypes from 'prop-types';
import {base} from './EzPageContent.styles';
import styled, {Theme} from '../../themes/styled';

type PageContentProps = {
  theme?: Theme;
};
/**
 * Page Content is the main content container for a page.
 */
const EzPageContent = styled.div<PageContentProps>(base);

//@ts-ignore
EzPageContent.propTypes = {
  /**
   * The content to render inside this component.
   */
  children: PropTypes.node.isRequired,
};

EzPageContent.displayName = 'EzPageContent';

/**
 * @component
 */
export default EzPageContent;
