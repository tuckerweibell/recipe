/** @jsx jsx */
import {jsx} from '@emotion/core';
import {useStaticQuery, graphql} from 'gatsby';
import {EzLayout, EzHeading} from '@ezcater/recipe';
import PreviewCard from './PreviewCard';

const ComponentLink = props => (
  <PreviewCard {...props} subtitle={`${props.html.match(/language-jsx/g).length} examples`} />
);

const chunk = (arr, size) =>
  Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

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

  const components = data.edges.map(({node}) => ({
    ...node.frontmatter,
    html: node.html,
  }));

  const categorized = new Map([
    ['Layout', []],
    ['Navigation', []],
    ['Data', []],
    ['Inputs', []],
    ['Overlays', []],
    ['Feedback', []],
    ['Marketing', []],
    ['Typography', []],
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
          <EzHeading size="3" css={{flexShrink: 0, flexBasis: '25% !important'}}>
            {category}
          </EzHeading>

          <div css={{'&&': {flexGrow: 1}}}>
            {chunk(components, 3).map(([first, second, third]) => (
              <EzLayout layout="equal" css={{'& + &': {marginTop: 25}}} key={first.path}>
                <ComponentLink {...first} />
                {second ? <ComponentLink {...second} /> : <div />}
                {third ? <ComponentLink {...third} /> : <div />}
              </EzLayout>
            ))}
          </div>
        </EzLayout>
      ))}
    </div>
  );
};
