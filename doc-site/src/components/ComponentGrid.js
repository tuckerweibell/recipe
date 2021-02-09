/** @jsx jsx */
import {jsx} from '@emotion/core';
import {useStaticQuery, graphql, withPrefix} from 'gatsby';
import {EzLayout, EzHeading, EzBlankState} from '@ezcater/recipe';
import PreviewCard from './PreviewCard';
import {useSearchTerm} from  '../providers/SearchProvider';

const ComponentLink = props => (
  <PreviewCard {...props} subtitle={`${props.html.match(/language-jsx/g).length} examples`} />
);

const isMatch = (item, searchTerm) => {
  return item.toLowerCase().startsWith(searchTerm);
}

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
    const {category} = component;
    const {tags} = component;
    const {title} = component;
    const {name} = component;
    const searchTerm = useSearchTerm();

    // ignore uncategorized components
    if (!category) return;

    const matchesTagSearch = tags && tags.some(tag => 
      searchTerm.split(' ').some(term => isMatch(tag, term))
    );

    const matchesSearch = matchesTagSearch || isMatch(category, searchTerm) || isMatch(title, searchTerm) || isMatch(name, searchTerm);
    
    if (!matchesSearch) return;

    if (!categorized.has(category)) categorized.set(category, []);

    categorized.get(category).push(component);
  });

  const entries = [...categorized].map(([category, components]) => [category, components]);
  const filteredEntries = entries.filter(entry => entry[1].length > 0);

  return (
    <div>
      <div css={{maxWidth: '90rem'}}>
        {filteredEntries.length === 0 ? 
          <EzBlankState
            imageSrc={withPrefix('/images/empty-search.svg')}
            title="We didn't find any matching component search results"
            message="Try some other search terms"
          /> :
          <div>
            {filteredEntries.map(([category, components]) => (
              <EzLayout
                key={category}
                layout={{base: 'stack', large: 'split'}}
                css={{
                  '& + &': {
                    marginTop: 25,
                    borderTop: '1px solid #e5e7eb',
                    paddingTop: 25,
                  },
                  '&& > *': {
                    alignSelf: 'start',
                    overflow: 'visible',
                  },
                  '&& > * + *': {
                    flex: '1 1 0px',
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
          }
      </div>
    </div>
  );
};
