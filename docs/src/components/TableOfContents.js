import React, {useEffect} from 'react';
import './TableOfContents.css';

// Files adapted from https://github.com/adobe/react-spectrum/blob/415888d27f27c6af844fc1b325a39612f15775be/packages/dev/docs/src/attachToToC.js
const useIsSelected = () => {
  let headers = [];

  function updateToc() {
    requestAnimationFrame(() => {
      headers.some((header, i) => {
        if (
          header.header.offsetTop + header.header.getBoundingClientRect().height >
          document.documentElement.scrollTop
        ) {
          let currentSelection = document.querySelectorAll(`#toc .is-selected`);
          if (currentSelection) {
            currentSelection.forEach(node => {
              node.classList.remove('is-selected');
              const link = node.querySelector('[aria-current]');
              if (link) {
                link.removeAttribute('aria-current');
              }
            });
          }
          header.link.parentElement.classList.add('is-selected');
          header.link.setAttribute('aria-current', 'location');
          return true;
        }
      });
    });
  }

  useEffect(() => {
    let tocLinks = document.querySelectorAll('#toc a');
    for (let link of tocLinks) {
      let headerId = link.href.split('#').pop();
      let header = document.getElementById(headerId);
      headers.push({link, header});
    }
    updateToc();
    document.addEventListener('scroll', updateToc);
    return () => document.removeEventListener('scroll', updateToc);
  }, []);
};

const TableOfContents = ({children}) => {
  useIsSelected();
  return (
    <nav aria-labelledby="tableOfContents" id="toc" dangerouslySetInnerHTML={{__html: children}} />
  );
};

export default TableOfContents;
