import React, { useState, useCallback } from 'react';
import uuid from 'uuid/v4';
import Header from './Header';
import Profile from './Profile';
import Entries from './Entries';
import Entry from './Entry'

const defaultEntry = {
  site: { type: 'text', value: '' },
  username: { type: 'text', value: '' },
  password: { type: 'password', value: '' },
  other: { type: 'textarea', value: '' },
};

const Page = (props) => {
  const [space, setSpace] = useState(null);
  const [id, setId] = useState(null);
  const [entry, setEntry] = useState(defaultEntry);

  const saveEntry = useCallback(async entry => {
    const key = id || uuid();
    await space.private.set(key, entry);
    setId(key);
    setEntry(entry);
  }, [space, id]);

  const clearEntry = useCallback(() => {
    setId(null);
    setEntry(defaultEntry);
  });

  const pickId = useCallback(id => {
    setId(id);
    space.private.get(id)
      .then(setEntry);
  });

  return (
    <>
      <Header>
        <Profile setSpace={setSpace} />
      </Header>
      { space != null && (
        <>
          <Entries space={space} id={id} pickId={pickId} />
          <Entry id={id} entry={entry} saveEntry={saveEntry} />
          <button onClick={clearEntry}>Clear</button>
          <button onClick={() => console.log(space.private.log)}>log</button>
        </>
      )}
    </>
  );
};

export default React.memo(Page);

