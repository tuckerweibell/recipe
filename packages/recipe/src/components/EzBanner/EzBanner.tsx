import React, {forwardRef} from 'react';
import theme from '../theme.config';
import CloseButton from '../utils/CloseButton';
import LinkButton from '../utils/LinkButton';
import EzHeading from '../EzHeading';

type Ref = HTMLDivElement;
type Props = {
  title: React.ReactNode;
  link: React.ComponentProps<typeof LinkButton>;
  use: 'marketing' | 'ezOrdering';
  message: React.ReactNode;
  onDismiss: () => void;
};

const banner = theme.css({
  fontFamily: '$defaultFont',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  flexWrap: 'wrap',
  position: 'relative',
  padding: '$banner-body-py $banner-body-px',
  borderRadius: '$banner-rounded',
  borderWidth: '1px',
  boxShadow: '$banner-shadow',
  backgroundRepeat: 'no-repeat',

  p: {
    marginTop: 12,
    marginBottom: 16,
  },

  variants: {
    use: {
      marketing: {
        '$$banner-text': '$colors$banner-text-marketing',
        color: '$banner-text-marketing',
        backgroundColor: '$banner-bg-marketing',
      },
      ezOrdering: {
        '$$banner-text': '$colors$banner-text-ezordering',
        color: '$banner-text-ezordering',
        backgroundColor: '$banner-bg-ezordering',
      },
    },
  },

  '@medium': {
    backgroundSize: '499.2px',
    backgroundPosition: 'top 30% right 0',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='551' height='318'%3e%3cg fill='white' opacity='0.3' fill-rule='evenodd'%3e%3cpath d='M441 171a13 13 0 1 1-4-25 13 13 0 0 1 4 25m-7-40a29 29 0 1 0 10 56 29 29 0 0 0-10-56M346 211a13 13 0 1 1-5-25 13 13 0 0 1 5 25m-7-40a29 29 0 1 0 10 56 29 29 0 0 0-10-56'/%3e%3cpath d='M507 194c-12-61-45-115-95-153l15-21c56 42 93 102 106 170zm-132 24c-4 0-7 5-6 9l12 67a7 7 0 0 1-14 2l-8-47a8 8 0 0 0-16 3 13 13 0 0 1-25 4l-4-19c0-5-4-8-9-7l-28 5 69-99a29 29 0 1 0 32-46l25-36c46 36 77 86 88 143zm2-105c2 7-3 13-10 15-4 0-9-2-12-5l14-20c4 2 8 5 8 10zM430 2l-6-2-5 4-167 238a8 8 0 0 0 8 12l40-7 2 12a29 29 0 0 0 46 18l4 22a23 23 0 0 0 44-8l-10-59 158-28c4-1 7-6 6-10v-2C536 115 494 48 430 2z'/%3e%3cg%3e%3cpath d='M206 83zm-1-17c-7 4-10 14-6 21s14 9 21 4c7-4 9-13 5-20s-13-9-20-5zM181 105c-7 4-10 13-6 20s14 9 21 5 9-13 5-20-13-9-20-5M124 75c-7 4-9 13-5 20s13 9 21 5c7-4 9-13 5-20s-13-9-21-5M99 124c-7 4-9 13-5 20s13 9 20 5 10-13 5-20-13-9-20-5'/%3e%3cpath d='M70 217c-28-59-7-131 52-166 58-35 131-20 170 32zM64 87l-8 14-1 1a42 42 0 0 0-16 56 42 42 0 0 0-3 47c4 9 12 14 20 17l1 3-29 17C2 189 18 125 64 87zm50-49L94 53c-7 3-15 6-22 11-68 40-91 125-54 192l5 4 6-1 42-25 194-117 42-25c1-1 3-3 3-5 1-2 0-4-1-5-42-65-128-84-195-44z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
    p: {
      maxWidth: '50%',
    },
  },
  '@large': {
    backgroundSize: 'auto',
    backgroundPosition: 'top 50% right 0',
  },
});

const closeButton = theme.css({
  position: 'absolute',
  top: '$banner-body-py',
  right: '$banner-body-px',
  'svg path': {
    fill: '$$banner-text',
  },
});

const heading = theme.css({
  fontFamily: '$headerFont',
  '&&': {color: '$$banner-text'},
});

const linkButton = theme.css({
  backgroundColor: '$banner-button-bg',
  px: '$banner-button-px',
  py: '$banner-button-py',
  border: 'none',
  borderRadius: '$banner-button-rounded',
  boxShadow: '$banner-button-shadow',
  fontFamily: '$defaultFont',
  fontWeight: '$bold',
  fontSize: '$text',
  cursor: 'pointer',

  '&&': {color: '$banner-button-text'},

  '&:focus': {
    outline: '$outlines$focusOutline',
    outlineOffset: '$outlines$focusOutlineOffset',
  },
  '&:hover, &:active': {
    boxShadow: '$banner-button-shadow-dark',
    backgroundColor: '$banner-button-bg',
    outline: 'none',
  },
  '&:hover': {
    color: '$banner-button-text-hover',
  },
  '&:active': {
    color: '$banner-button-text-down',
  },
});

/**
 * A Banner displays a prominent, succinct message with a related link or action.
 */
const EzBanner = forwardRef<Ref, Props>(({title, link, use, message, onDismiss}, ref) => {
  return (
    <div className={banner({use})} ref={ref}>
      <EzHeading size="3" className={heading()}>
        {title}
      </EzHeading>
      <CloseButton label="Close" onClick={onDismiss} className={closeButton()} />
      <p>{message}</p>
      <LinkButton {...link} className={linkButton()} />
    </div>
  );
});

EzBanner.displayName = 'EzBanner';

/**
 * @component
 */
export default EzBanner;
