/** @jsx jsx */
import {jsx} from '@emotion/react';
import {Link, withPrefix} from 'gatsby';
import {EzHeading, EzTextStyle} from '@ezcater/recipe';

const LinkOrPlaceholder = ({path, tags, children}) =>
  tags && tags.includes('coming-soon') ? (
    <div css={{opacity: 0.5}}>{children}</div>
  ) : (
    <Link to={path} css={{textDecoration: 'none'}}>
      {children}
    </Link>
  );

const PreviewCard = ({title, path, subtitle, name, tags}) => (
  <LinkOrPlaceholder {...{path, tags}}>
    <figure css={{margin: 0}}>
      <div>
        <img
          css={{
            width: '100%',
            height: 'auto',
            minHeight: 95,
            backgroundColor: '#f6f6f6',
            boxShadow: '0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15)',
            borderRadius: '.25rem',
          }}
          src={withPrefix(`/images/preview/${name}.png`)}
          alt=""
        />
      </div>
      <figcaption css={{marginTop: '0.75rem'}}>
        <EzHeading size="5">{title}</EzHeading>
        <p>
          <EzTextStyle use="subdued">{subtitle}</EzTextStyle>
        </p>
      </figcaption>
    </figure>
  </LinkOrPlaceholder>
);

export default PreviewCard;
