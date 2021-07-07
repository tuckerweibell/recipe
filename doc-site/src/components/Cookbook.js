/** @jsx jsx */
import {jsx} from '@emotion/core';
import {useStaticQuery, graphql} from 'gatsby';
import {EzLayout, EzHeading} from '@ezcater/recipe';
import PreviewCard from './PreviewCard';

const ComponentLink = props => {
  const comingSoon = props.tags.includes('coming-soon');

  if (comingSoon) return <PreviewCard {...props} subtitle="Coming soon" />;

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
              tags
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

  const categorized = new Map([
    ['Detail Screens', []],
    ['Form/Creation Screens', []],
    ['Settings Screens', []],
    ['Dashboard Screens', []],
    ['Marketing Screens', []],
    ['Table/List Screens', []],
  ]);

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
          layout={{base: 'stack', large: 'basic'}}
          alignY="top"
          css={{
            '& + &': {
              marginTop: 25,
              borderTop: '1px solid #e5e7eb',
              paddingTop: 25,
            },
          }}
        >
          <EzHeading size="3" css={{flexShrink: 0, flexBasis: '20% !important'}}>
            {category}
          </EzHeading>

          <EzLayout
            layout="tile"
            columns={{base: 2, medium: 3, large: 4}}
            css={{'& + &': {marginTop: 25}, '&&': {flex: '1 1 0px'}}}
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
