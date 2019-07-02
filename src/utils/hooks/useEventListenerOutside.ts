import {useEffect} from 'react';

const useEventListenerOutside = (handler, eventType, refs: React.RefObject<any>[]) => {
  useEffect(() => {
    const documents = new Set([document]);

    const listener = event => {
      if (!refs.some(ref => ref.current && ref.current.contains(event.target))) handler(event);
    };

    refs.forEach(ref => {
      if (ref.current && ref.current.ownerDocument) {
        const parentDocument = ref.current.ownerDocument;

        if (parentDocument !== document) documents.add(parentDocument);
      }
    });

    documents.forEach(document => document.addEventListener(eventType, listener));

    return () => {
      documents.forEach(document => document.removeEventListener(eventType, listener));
    };
  }, [refs, eventType, handler]);
};

export default useEventListenerOutside;
