/** @jsx jsx */
import {jsx} from '@emotion/core';
import {useStaticQuery, graphql, withPrefix} from 'gatsby';
import {EzLayout, EzHeading, EzBlankState} from '@ezcater/recipe';
import PreviewCard from './PreviewCard';
import {useSearchTerms} from '../providers/SearchProvider';

const ComponentLink = props => (
  <PreviewCard {...props} subtitle={`${props.html.match(/language-jsx/g).length} examples`} />
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
    .filter(c => !c.path?.includes('cookbook'));

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
    const {category, tags, title, name} = component;
    const searchTerms = useSearchTerms();
    const tagsList = tags || [];

    // ignore uncategorized components
    if (!category) return;

    const texts = [...tagsList, category, title, name].map(text => text.toLowerCase());

    const matchesSearch = texts.some(text => searchTerms.some(term => text.startsWith(term)));

    if (!matchesSearch) return;

    if (!categorized.has(category)) categorized.set(category, []);

    categorized.get(category).push(component);
  });

  const entries = [...categorized].map(([category, components]) => [category, components]);
  const filteredEntries = entries.filter(([, components]) => components.length > 0);

  return (
    <div>
      <div css={{maxWidth: '90rem'}}>
        {filteredEntries.length === 0 ? (
          <EzBlankState
            imageSrc={withPrefix('/images/empty-search.svg')}
            title="We didn't find any matching component search results"
            message="Try some other search terms"
          />
        ) : (
          <div>
            {filteredEntries.map(([category, components]) => (
              <EzLayout
                key={category}
                layout={{base: 'stack', large: 'split'}}
                alignY="top"
                css={{
                  '& + &': {
                    marginTop: 25,
                    borderTop: '1px solid #e5e7eb',
                    paddingTop: 25,
                  },
                  '&& > * > *': {
                    overflow: 'visible',
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
        )}
      </div>
    </div>
  );
};
