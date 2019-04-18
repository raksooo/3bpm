import React, { useRef, useCallback } from 'react';

const Entry = (props) => {
  const {
    space,
    entry,
  } = props;

  if (space == null) {
    return null;
  }

  const siteRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const commentRef = useRef(null);

  const saveEntry = useCallback(() => {
    // TODO
  }, [siteRef, usernameRef, passwordRef, commentRef]);

  return (
    <>
      <input type="text" ref={siteRef} placeholder="Site" />
      <input type="text" ref={siteRef} placeholder="Username" />
      <input type="password" ref={siteRef} placeholder="Password" />
      <textarea ref={commentRef} placeholder="Comment"></textarea>
      <button onClick={saveEntry}>
        Save
      </button>
    </>
  );
};

export default React.memo(Entry);

