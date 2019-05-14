import {useEffect} from 'react';

const useOnClickOutside = (handler, refs: React.RefObject<any>[]) => {
  useEffect(() => {
    const mouseListener = event => {
      if (!refs.some(ref => ref.current && ref.current.contains(event.target))) handler(event);
    };

    const documents = new Set([document]);

    refs.forEach(ref => {
      if (ref.current && ref.current.ownerDocument) {
        const parentDocument = ref.current.ownerDocument;

        if (parentDocument !== document) documents.add(parentDocument);
      }
    });

    documents.forEach(document => document.addEventListener('mousedown', mouseListener));
    documents.forEach(document => document.addEventListener('touchstart', mouseListener));

    return () => {
      documents.forEach(document => document.removeEventListener('mousedown', mouseListener));
      documents.forEach(document => document.removeEventListener('touchstart', mouseListener));
    };
  }, [refs, handler]);
};

export default useOnClickOutside;
