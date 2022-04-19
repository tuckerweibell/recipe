import React, {useRef, useState, useEffect} from 'react';
import {createPortal} from 'react-dom';
import {EzGlobalStyles} from '../index';

const sizes = {
  small: {width: 750, height: 1334}, // phone e.g. iphone 6
  medium: {width: 1280, height: 800}, // tablet e.g. amazon fire hd
  large: {width: 1920, height: 1080}, // laptop e.g. dell xps 13
};

const IFrameContent = ({iframeEl, children}) => {
  return <>{createPortal(children, iframeEl)}</>;
};

// smaller output than encodeURIComponent...
const encodeHead = head =>
  head
    // strip newlines and whitespace
    .replace(/\n|\s\s/g, '')
    // strip whitespace between rules
    .replace(/:\s/g, ':')
    // strip type="text/css" attr
    .replace(/\stype="text\/css"/g, '')
    // strip comments
    .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*/g, '')
    // replace hex color symbol
    .replace(/#/g, '%23')
    // replace url contents
    .replace(/url\([^)]*\)|\[[^\]]*\]/g, old => encodeURIComponent(old));

const toDataUri = ({head, body}) =>
  `data:text/html,<html>${encodeHead(head)}<body>${encodeURIComponent(body)}</body></html>`;

const Media = ({size, children}) => {
  const iframeEl = useRef(null);
  const linkRef = useRef(null);
  const [src, setSrc] = useState(undefined);

  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(iframeEl.current);
  }, [container]);

  useEffect(() => {
    if (!linkRef.current) return;

    const ownerDocument = linkRef.current.ownerDocument as Document;
    const frame = iframeEl.current as HTMLElement;

    // copy inline stitches tags inside the iframe
    const ssrStyles = ownerDocument.querySelectorAll<HTMLStyleElement>('style[data-snitches-ssr]');
    const frameStyles = frame.querySelectorAll<HTMLStyleElement>('style[data-snitches-ssr]');

    let head = ownerDocument.head.outerHTML;

    // copy styles from parent into iframe
    Array.from(ssrStyles).forEach(tag => {
      head += tag.outerHTML;
    });
    // move inline styles from iframe into head
    // snitches would typically do this for us, but can't reach inside the iframe
    Array.from(frameStyles).forEach(tag => {
      head += tag.outerHTML;

      // remove inline style tags EXCEPT those added directly to the iframe (since react still references them)
      if (tag.parentElement === frame) Object.assign(tag, {textContent: ''});
      else tag.parentNode.removeChild(tag);
    });

    // join style tags together to reduce the payload size
    head = head.replace(/<\/style><style\s?.*?>/g, '');

    setSrc(toDataUri({head, body: iframeEl.current.innerHTML}));
  }, [container]);

  return (
    <iframe
      title={size}
      frameBorder="0"
      allowFullScreen
      ref={iframeEl}
      style={{border: 'none', margin: 0, ...sizes[size]}}
      scrolling="no"
      src={src}
    >
      {iframeEl.current && !src && (
        <IFrameContent iframeEl={iframeEl.current}>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap"
            rel="stylesheet"
            ref={linkRef}
          />
          <EzGlobalStyles />
          {children}
        </IFrameContent>
      )}
    </iframe>
  );
};

export default Media;
