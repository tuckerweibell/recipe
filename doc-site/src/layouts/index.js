import React from 'react';
import Helmet from 'react-helmet';
import {ThemeProvider} from 'emotion-theming';
import {themes} from '@ezcater/recipe';
import Header from '../components/Header';
import './index.css';

const Layout = ({children, data}) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <ThemeProvider theme={themes.standard}>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </ThemeProvider>
  </div>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
