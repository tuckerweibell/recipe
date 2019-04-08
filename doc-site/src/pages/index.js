import React from 'react';
import Link from 'gatsby-link';
import {EzLayout} from '@ezcater/recipe';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <EzLayout layout="equal">
      <div>
        <h2>
          <Link to="/guides/getting-started/">Getting Started</Link>
        </h2>
        <p>Onboarding for designers and developers who are using Recipe for the first time</p>
      </div>
      <div>
        <h2>
          <Link to="/guides/principles/">Concepts</Link>
        </h2>
        <p>Explore our approach for building the design system</p>
      </div>
    </EzLayout>
    <EzLayout layout="equal">
      <div>
        <h2>
          <Link to="/styles/style/">Style</Link>
        </h2>
        <p>Guidance on how to approach the visual elements of our applications</p>
      </div>
      <div>
        <h2>
          <Link to="/components/">Components</Link>
        </h2>
        <p>
          Explore the building blocks of our component library with code examples and guidelines.
        </p>
      </div>
    </EzLayout>
    <EzLayout layout="equal">
      <div>
        <h2>
          <Link to="/timeline/">Timeline</Link>
        </h2>
        <p>Current status of components in the pipeline.</p>
      </div>
    </EzLayout>

    <div>
      <h2>Want to contribute to Recipe?</h2>
      <p>
        We’re currently considering making this project fully open source. In the meantime, if
        you’re an ezcater employee and are interested in contributing, check out our{' '}
        <Link to="/guides/contributing/">contributing guidelines</Link> to get started
      </p>
    </div>
    <footer>
      <Link to="/changelog">What’s new?</Link>
    </footer>
  </Layout>
);

export default IndexPage;
