export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export type LinkProps = {
  to: string;
  as: React.ComponentType<{to: string}>;
};
