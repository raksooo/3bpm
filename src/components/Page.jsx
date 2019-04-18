import React, { useState } from 'react';
import Header from './Header';
import Profile from './Profile';
import Entries from './Entries';
import Entry from './Entry'

const Page = (props) => {
  const [space, setSpace] = useState(null);
  const [entry, entrySelected] = useState(null);

  return (
    <>
      <Header>
        <Profile setSpace={setSpace} />
      </Header>
      <Entries space={space} entrySelected={entrySelected} />
      <Entry space={space} entry={entry} />
    </>
  );
};

export default React.memo(Page);

