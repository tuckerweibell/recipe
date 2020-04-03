/** @jsx jsx */
import {jsx} from '@emotion/core';
import {useStaticQuery, graphql, Link, withPrefix} from 'gatsby';
import {EzLayout, EzHeading, EzTextStyle} from '@ezcater/recipe';

const ComponentLink = ({title, path, html, name}) => (
  <Link to={path} css={{textDecoration: 'none', '& + &': {marginLeft: 25}, alignSelf: 'start'}}>
    <figure css={{margin: 0}}>
      <div>
        <img
          css={{
            width: '100%',
            height: 'auto',
            border: '1px solid #d2d6dc',
            borderRadius: '.25rem',
          }}
          src={withPrefix(`/images/preview/${name}.png`)}
          // src="https://tailwindui.com/img/category-thumbnails/sections-heroes.svg"
          alt=""
        />
      </div>
      <figcaption css={{marginTop: '0.75rem'}}>
        <EzHeading size="5">{title}</EzHeading>
        <p>
          <EzTextStyle use="subdued">{html.match(/language-jsx/g).length} examples</EzTextStyle>
        </p>
      </figcaption>
    </figure>
  </Link>
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
    ['Feedback', []],
    ['Marketing', []],
    ['Overlays', []],
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
