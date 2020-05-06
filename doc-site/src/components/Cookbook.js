/** @jsx jsx */
import {jsx} from '@emotion/core';
import {useStaticQuery, graphql} from 'gatsby';
import {EzLayout, EzHeading} from '@ezcater/recipe';
import PreviewCard from './PreviewCard';

const ComponentLink = props => {
  const numExamples = props.html.match(/language-jsx/g).length;
  return (
    <PreviewCard {...props} subtitle={`${numExamples} example${numExamples > 1 ? 's' : ''}`} />
  );
};

export default () => {
  const {allMarkdownRemark: data} = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: [frontmatter___path]}) {
        edges {
          node {
            id
            html
            frontmatter {
              name
              category
              title
              path
              order
            }
          }
        }
      }
    }
  `);

  const components = data.edges
    .map(({node}) => ({
      ...node.frontmatter,
      html: node.html,
    }))
    .filter(c => c.path?.includes('cookbook'));

  const categorized = new Map([['Detail Screens', []]]);

  components.forEach(component => {
    const {category} = component;

    // ignore uncategorized components
    if (!category) return;

    if (!categorized.has(category)) categorized.set(category, []);

    categorized.get(category).push(component);
  });

  return (
    <div css={{maxWidth: '90rem'}}>
      {[...categorized].map(([category, components]) => (
        <EzLayout
          key={category}
          layout={{base: 'stack', large: 'split'}}
          css={{
            '& + &': {
              marginTop: 25,
              borderTop: '1px solid #e5e7eb',
              paddingTop: 25,
            },
            '& > *': {
              alignSelf: 'start',
            },
          }}
        >
          <EzHeading size="3" css={{flexShrink: 0, flexBasis: '20% !important'}}>
            {category}
          </EzHeading>

          <EzLayout
            layout="tile"
            columns={{base: 2, medium: 3, xlarge: 4}}
            css={{'& + &': {marginTop: 25}}}
          >
            {components.map(component => (
              <ComponentLink {...component} key={component.path} />
            ))}
          </EzLayout>
        </EzLayout>
      ))}
    </div>
  );
};
