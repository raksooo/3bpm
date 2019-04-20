import React, { useState, useCallback, useMemo } from 'react';
import { useDelayedSpace } from '3box-react-hooks';
import uuid from 'uuid/v4';
import { clone } from '../helpers/objectHelper';
import { SPACE_NAME } from '../constants';
import Index from '../EntryIndex';
import Header from './Header';
import Profile from './Profile';
import Entries from './Entries';
import Entry from './Entry'

const defaultEntry = () => clone({
  site: { type: 'text', value: '' },
  username: { type: 'text', value: '' },
  password: { type: 'password', value: '' },
  other: { type: 'textarea', value: '' },
});

const Page = (props) => {
  const [space, openSpace] = useDelayedSpace(SPACE_NAME);
  const [id, setId] = useState(null);
  const [entry, setEntry] = useState(defaultEntry());
  const index = useMemo(() => new Index(space), [space]);

  const saveEntry = useCallback(async entry => {
    const key = id || uuid();
    await space.private.set(key, entry);
    await index.add(key);
    setId(key);
    setEntry(entry);
  }, [space, id]);

  const deleteEntry = useCallback(async () => {
    if (id != null) {
      await space.private.remove(id);
      await index.remove(id);
      setId(null);
      setEntry(defaultEntry());
    }
  }, [id]);

  const clearEntry = useCallback(() => {
    setId(null);
    setEntry(defaultEntry());
  });

  const pickId = useCallback(id => {
    setId(id);
    space.private.get(id)
      .then(setEntry);
  });

  return (
    <>
      <Header>
        <Profile space={space} openSpace={openSpace} />
      </Header>
      { space != null && (
        <>
          <Entries space={space} index={index} id={id} pickId={pickId} />
          <Entry entry={entry} saveEntry={saveEntry} deleteEntry={deleteEntry} />
          <button onClick={clearEntry}>Clear</button>
        </>
      )}
    </>
  );
};

export default React.memo(Page);

