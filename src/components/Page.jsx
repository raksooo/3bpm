import React, { useState } from 'react';
import Header from './Header';
import Profile from './Profile';
import Entries from './Entries';

const Page = (props) => {
	const [space, setSpace] = useState(null);

  return (
    <>
      <Header>
        <Profile setSpace={setSpace} />
      </Header>
      <Entries space={space} />
    </>
  );
};

export default React.memo(Page);

