declare module '*.md';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}

// types/mdx.d.ts
declare module '*.mdx' {
  const MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}
