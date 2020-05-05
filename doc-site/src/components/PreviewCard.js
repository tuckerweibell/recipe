/** @jsx jsx */
import {jsx} from '@emotion/core';
import {Link, withPrefix} from 'gatsby';
import {EzHeading, EzTextStyle} from '@ezcater/recipe';

const PreviewCard = ({title, path, subtitle, name}) => (
  <Link to={path} css={{textDecoration: 'none', alignSelf: 'start'}}>
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
  </Link>
);

export default PreviewCard;
