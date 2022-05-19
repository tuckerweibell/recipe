import React from 'react';
import Link from 'gatsby-link';
import {withPrefix} from 'gatsby';
import Helmet from 'react-helmet';
import packageJson from '../../../packages/recipe/package.json';
import {EzLayout, EzAppLayout} from '@ezcater/recipe';
import ezcaterLogo from '../ezcater-logo.svg';
import {Global, css} from '@emotion/react';
import styled from '@emotion/styled';

import {bg} from '../css/background';
import {border, rounded} from '../css/border';
import {hidden, block, inlineFlex, flex} from '../css/display';
import {shadow} from '../css/effects';
import {items, justify, shrink} from '../css/flexbox';
import {object, overflow} from '../css/layout';
import {absolute, relative, inset, right} from '../css/position';
import {hover} from '../css/pseudo';
import {sm, md, lg, xl} from '../css/responsive';
import {h, w, min, max} from '../css/sizing';
import {px, py, pt, pl, pr, pb, mt, ml, mx} from '../css/spacing';
import {transform, translate} from '../css/transform';
import {font, text, tracking, leading, underline, uppercase, whitespace} from '../css/typography';

const Avatar = styled.img(h._12, w._12, rounded.full, text.white, shadow.solid);

const HeroHeading = styled.h1(
  mt._3,
  text._3xl,
  leading._9,
  font.bold,
  text.white,
  sm([mt._6, text._4xl, leading._10]),
  xl([text._5xl, leading.tight])
);

const HeroSubheading = styled.h2(text.sm, font.semibold, text.gray._300, uppercase, tracking.wider);

const MediaObject = ({imgSrc, children}) => (
  <EzLayout>
    <div style={shrink._0}>
      <Avatar src={imgSrc} alt="" />
    </div>
    <div>{children}</div>
  </EzLayout>
);

const RecipeLogo = ({className}) => (
  <svg className={className} viewBox="0 0 972.16 239.56" height="32" width="130">
    <g>
      <path
        fill="#fff"
        d="M356.99 187l-33.5-61.54h-12.7V187h-36.8V31.95h59.13a102.69 102.69 0 0121.79 2.3 56.65 56.65 0 0119.05 7.77 40.66 40.66 0 0113.47 14.46q5.04 8.98 5.04 22.34 0 15.76-8.55 26.5t-23.65 15.33L400.8 187zm-1.54-107.53a15.53 15.53 0 00-2.3-8.87 15.75 15.75 0 00-5.9-5.25 25.68 25.68 0 00-8.1-2.52 59.76 59.76 0 00-8.66-.66h-19.93V98.3h17.74a59.9 59.9 0 009.42-.76 30 30 0 008.76-2.74 16.72 16.72 0 006.46-5.7 16.87 16.87 0 002.51-9.63zM489.7 120a21.53 21.53 0 00-5.37-14.68q-5.36-6.13-16.1-6.13a27.24 27.24 0 00-9.63 1.64 24.96 24.96 0 00-7.67 4.5 22.2 22.2 0 00-5.25 6.67 19.55 19.55 0 00-2.2 8zm33.07 13.8v4.38a37.72 37.72 0 01-.22 4.16h-79.06a19.04 19.04 0 002.74 8.32 23.66 23.66 0 005.91 6.46 28.64 28.64 0 008.1 4.27 28.6 28.6 0 009.31 1.53 30.21 30.21 0 0014.45-3.17 28.6 28.6 0 009.64-8.21l24.97 15.76a50.51 50.51 0 01-20.26 17.2q-12.59 6.01-29.23 6.01a69.76 69.76 0 01-23.22-3.83 56.37 56.37 0 01-19.16-11.17 51.72 51.72 0 01-12.92-18.07 60.5 60.5 0 01-4.7-24.53 61.38 61.38 0 014.6-24.2 54.7 54.7 0 0112.47-18.4 55.65 55.65 0 0118.62-11.7 63.66 63.66 0 0123.21-4.16 58.75 58.75 0 0122.12 4.05 48.15 48.15 0 0117.3 11.72 54.13 54.13 0 0111.28 18.61 71.64 71.64 0 014.05 24.96zm97.46-20.59a21.8 21.8 0 00-8.33-6.35 25.51 25.51 0 00-10.73-2.41 22.7 22.7 0 00-10.29 2.3 24.98 24.98 0 00-7.88 6.13 28.86 28.86 0 00-5.15 8.87 30.7 30.7 0 00-1.86 10.73 32.44 32.44 0 001.75 10.73 26.21 26.21 0 005.15 8.87 24.5 24.5 0 008.1 6.02 24.9 24.9 0 0010.62 2.2 29.77 29.77 0 0010.84-2.09 20.77 20.77 0 008.65-6.02l19.93 24.3a46.83 46.83 0 01-17.52 10.3 69 69 0 01-22.77 3.72 71.88 71.88 0 01-24.1-3.94 55.57 55.57 0 01-19.38-11.5 53.98 53.98 0 01-12.92-18.29 59.92 59.92 0 01-4.7-24.3 59.35 59.35 0 014.7-24.1 53.98 53.98 0 0112.92-18.28 56.94 56.94 0 0119.39-11.61 69.47 69.47 0 0123.87-4.05 63.05 63.05 0 0111.71 1.1 78.34 78.34 0 0111.17 2.95 50.92 50.92 0 019.86 4.6 41.42 41.42 0 017.77 6.03zm74.02-70.08a18.57 18.57 0 01-1.64 7.77 20.06 20.06 0 01-4.38 6.25 20.2 20.2 0 01-6.57 4.16 21.33 21.33 0 01-8 1.53 20.12 20.12 0 01-14.67-5.8 18.8 18.8 0 01-5.91-13.9 19.15 19.15 0 011.53-7.56 17.91 17.91 0 014.38-6.24 23.7 23.7 0 016.57-4.27 19.85 19.85 0 018.1-1.65 21.33 21.33 0 018 1.54 20.2 20.2 0 016.56 4.16 20.06 20.06 0 014.38 6.24 18.57 18.57 0 011.65 7.77zM655.7 187V77.94h35.92V187zm185.72-54.97a68.8 68.8 0 01-3.5 21.9 56.3 56.3 0 01-10.19 18.5 50.3 50.3 0 01-16.32 12.82 48.31 48.31 0 01-21.9 4.82 45.8 45.8 0 01-19.05-4.05 34.02 34.02 0 01-14.02-11.06h-.43v64.6h-35.92V77.94h34.16V91.3h.66a44.25 44.25 0 0113.9-11.5q8.88-4.93 20.92-4.93a49.2 49.2 0 0121.46 4.6 48.45 48.45 0 0116.32 12.48 56.83 56.83 0 0110.29 18.3 65.93 65.93 0 013.62 21.78zm-34.82 0a33 33 0 00-1.65-10.3 26.74 26.74 0 00-4.81-8.86 24.37 24.37 0 00-8-6.24 24.66 24.66 0 00-11.17-2.41 24.16 24.16 0 00-10.95 2.4 26.12 26.12 0 00-8.21 6.36 29.08 29.08 0 00-5.26 8.98 29.48 29.48 0 00-1.86 10.29 29.48 29.48 0 001.86 10.3 29.08 29.08 0 005.26 8.97 26.12 26.12 0 008.21 6.35 24.16 24.16 0 0010.95 2.41 24.66 24.66 0 0011.17-2.4 23.73 23.73 0 008-6.36 27.8 27.8 0 004.81-9.09 34.03 34.03 0 001.65-10.4zM939.09 120a21.53 21.53 0 00-5.36-14.68q-5.37-6.13-16.1-6.13a27.24 27.24 0 00-9.64 1.64 24.96 24.96 0 00-7.67 4.5 22.2 22.2 0 00-5.25 6.67 19.55 19.55 0 00-2.2 8zm33.07 13.8v4.38a37.7 37.7 0 01-.22 4.16h-79.06a19.04 19.04 0 002.74 8.32 23.66 23.66 0 005.91 6.46 28.64 28.64 0 008.1 4.27 28.6 28.6 0 009.3 1.53 30.21 30.21 0 0014.47-3.17 28.6 28.6 0 009.64-8.22L968 167.3a50.51 50.51 0 01-20.26 17.2q-12.6 6.01-29.24 6.01a69.76 69.76 0 01-23.21-3.83 56.37 56.37 0 01-19.16-11.17 51.72 51.72 0 01-12.92-18.07 60.5 60.5 0 01-4.71-24.52 61.38 61.38 0 014.6-24.2 54.7 54.7 0 0112.48-18.4A55.65 55.65 0 01894.2 78.6a63.66 63.66 0 0123.2-4.16 58.75 58.75 0 0122.13 4.05 48.15 48.15 0 0117.3 11.72 54.13 54.13 0 0111.28 18.61 71.64 71.64 0 014.05 24.96z"
      />
      <g>
        <path
          fill="#00b077"
          d="M62.33 189.5a19.66 19.66 0 01-19.61-19.07l-.01-.55v-39.7a5.35 5.35 0 0110.69-.33l.01.33v39.7a8.96 8.96 0 008.49 8.9l.43.01h82.8a8.96 8.96 0 008.9-8.48l.01-.43v-39.7a5.35 5.35 0 0110.7-.33v40.03a19.66 19.66 0 01-19.06 19.6l-.55.01zm1.76-86.88a5.35 5.35 0 118.2-6.88 40.98 40.98 0 0061.58 1.48 5.35 5.35 0 117.86 7.25 51.68 51.68 0 01-77.64-1.85zm86.28 13.09a5.35 5.35 0 114.74-9.59 27.37 27.37 0 1012.2-51.87 26.93 26.93 0 00-16.16 5.29 5.35 5.35 0 01-8.47-2.99l-.1-.28a41.03 41.03 0 00-77.79.29c0 .04-.02.07-.03.11a5.35 5.35 0 01-8.44 2.87 26.94 26.94 0 00-16.18-5.29 27.36 27.36 0 1012.2 51.87 5.35 5.35 0 114.76 9.59 38.05 38.05 0 11-.16-68.3 51.74 51.74 0 0193.58 0 38.46 38.46 0 0116.8-3.86 38.06 38.06 0 11-16.95 72.16z"
        />
      </g>
    </g>
  </svg>
);

const GithubLogo = ({className}) => (
  <svg className={className} height="24" width="24" viewBox="0 0 16 16">
    <path
      fill="currentColor"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    ></path>
  </svg>
);

const HeroDivider = ({className, style}) => (
  <svg
    style={style}
    className={className}
    height="70"
    width="20"
    fill="currentColor"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <polygon points="50,0 100,0 50,100 0,100"></polygon>
  </svg>
);

const Hero = ({className, imgSrc, children}) => (
  <div className={className} css={[relative, min.h.screen, overflow.hidden, bg.gray._900]}>
    <img
      src={imgSrc}
      alt=""
      css={[hidden, absolute, h.full, w.full, object.cover, object._3_10_center, lg(block)]}
    />
    <div
      css={[
        relative,
        min.h.screen,
        lg([
          min.w._3xl,
          flex,
          items.center,
          justify.center,
          w._3_5,
          py._20,
          pl._8,
          pr._8,
          bg.gray._900,
        ]),
        xl(min.w._4xl),
      ]}
    >
      <HeroDivider
        style={{transform: 'translate(50%)'}}
        css={[
          hidden,
          absolute,
          right._0,
          inset.y._0,
          h.full,
          w._48,
          text.gray._900,
          transform,
          translate.x._1_2,
          lg(block),
        ]}
      />
      {children}
    </div>
  </div>
);

const LinkButton = styled(Link)(
  inlineFlex,
  items.center,
  justify.center,
  whitespace.noWrap,
  px._6,
  py._3,
  border._1,
  border.transparent,
  text.base,
  leading._6,
  font.semibold,
  rounded.md,
  shadow.sm,
  xl([text.lg, py._4])
);

const Index = () => (
  <EzAppLayout>
    <Helmet
      title="Recipe UI"
      meta={[
        {name: 'description', content: 'Recipe Design System'},
        {name: 'keywords', content: 'Recipe Design System ezCater'},
      ]}
    >
      <html lang="en" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Global
      styles={css`
        /* CSS resets/normalize/preflight */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        a {
          color: inherit;
          text-decoration: inherit;
        }
        a {
          background-color: transparent;
        }
        img {
          border-style: solid;
        }
        img,
        video {
          max-width: 100%;
          height: auto;
        }
        body {
          margin: 0;
        }
        blockquote,
        dd,
        dl,
        figure,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        p,
        pre {
          margin: 0;
        }
        *,
        :after,
        :before {
          box-sizing: border-box;
          border: 0 solid #d2d6dc;
        }
      `}
    />

    <Hero imgSrc={withPrefix('/images/hero-pattern-xl.jpg')} css={font.display}>
      <div css={[relative]}>
        <div
          css={[
            px._6,
            pt._8,
            pb._12,
            md(max.w._3xl, mx.auto),
            lg([mx._0, max.w.none, pt._0, pb._16]),
          ]}
        >
          <EzLayout layout="split">
            <RecipeLogo css={[h._8, xl(h._9)]} />
            <div>
              <a
                href="https://github.com/ezcater/recipe"
                css={[
                  text.sm,
                  whitespace.noWrap,
                  font.semibold,
                  text.white,
                  flex,
                  items.center,
                  hover(underline),
                ]}
              >
                <GithubLogo css={[h._6, text.white]} />
                <span css={ml._2}>GitHub →</span>
              </a>
            </div>
          </EzLayout>
        </div>
        <div css={[px._6, md(max.w._3xl, mx.auto), lg(mx.auto, max.w.none)]}>
          <Link to="/changelog">
            <HeroSubheading as="span">Latest: v{packageJson.version}</HeroSubheading>
          </Link>

          <HeroHeading>
            Delicious UI components,
            <br />
            <span css={[text.ezGreen, inlineFlex, items.center]}>
              <span>from</span>&nbsp;
              <img src={ezcaterLogo} alt="ezcater" css={[h._7, xl(h._12)]} />
            </span>
          </HeroHeading>

          <p
            css={[
              mt._2,
              text.lg,
              leading._7,
              text.gray._300,
              sm(mt._3, text.xl, max.w.xl),
              xl(mt._4, text._2xl, max.w._2xl),
            ]}
          >
            Fully responsive React components that provide the building blocks you need to build
            pages faster.
          </p>
          <div css={[mt._6, xl(mt._12)]}>
            <EzLayout layout={{base: 'stack', medium: 'basic'}}>
              <LinkButton to="/guides/getting-started" css={[text.gray._900, bg.white]}>
                Getting started
              </LinkButton>
              <LinkButton to="/components" css={[text.white, bg.gray._800]}>
                Explore the components →
              </LinkButton>
            </EzLayout>
          </div>
        </div>
        <div css={[relative, mt._8, h._64, overflow.hidden, sm(mt._12), lg(hidden)]}>
          <img
            src={withPrefix('/images/hero-pattern-lg.jpg')}
            alt=""
            css={[h.full, w.full, object.cover, object.center]}
          />
        </div>
        <div
          css={[
            px._6,
            py._8,
            sm(pt._12),
            md(max.w._3xl, mx.auto),
            lg([py._0, pt._24, mx._0, max.w.full]),
          ]}
        >
          <HeroSubheading as="p">Designed and developed by</HeroSubheading>
          <div css={mt._4}>
            <EzLayout layout={{base: 'stack', medium: 'basic'}}>
              <a href="https://github.com/danidewitt">
                <MediaObject imgSrc="https://avatars.githubusercontent.com/u/3790037?v=4">
                  <p css={[font.semibold, text.white]}>Dani Dewitt</p>
                  <p css={[text.sm, text.gray._500]}>Recipe Developer</p>
                </MediaObject>
              </a>
              <a href="https://github.com/noranda">
                <MediaObject imgSrc="https://avatars.githubusercontent.com/u/5418735?v=4">
                  <p css={[font.semibold, text.white]}>Noranda Brown</p>
                  <p css={[text.sm, text.gray._500]}>Recipe Developer</p>
                </MediaObject>
              </a>
              <a href="https://www.linkedin.com/in/joanhojberg/">
                <MediaObject imgSrc="https://media-exp1.licdn.com/dms/image/C4D03AQFzyE8otopbVw/profile-displayphoto-shrink_400_400/0/1578497166645?e=1658361600&v=beta&t=SzUVicl08k2RtPD4rFb5a6OJ6dEaBjbhl1X0rNI-3hA">
                  <p css={[font.semibold, text.white]}>Joan Højberg</p>
                  <p css={[text.sm, text.gray._500]}>Recipe Designer</p>
                </MediaObject>
              </a>
              <a href="https://github.com/ktlnux">
                <MediaObject imgSrc="https://avatars.githubusercontent.com/u/41025836?v=4">
                  <p css={[font.semibold, text.white]}>Kaitlyn Brown</p>
                  <p css={[text.sm, text.gray._500]}>Recipe Designer</p>
                </MediaObject>
              </a>
            </EzLayout>
          </div>
        </div>
      </div>
    </Hero>
  </EzAppLayout>
);

export default Index;
