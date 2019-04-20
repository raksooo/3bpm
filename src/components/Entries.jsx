import React, { useState, useEffect, useCallback } from 'react';

const getEntries = async (space, index) => {
  const resultPromises = (await index.entries())
    .map(async (key) => [key, await space.private.get(key)]);

  return await Promise.all(resultPromises);
};

const EntryItem = ({ id, entry, pickId }) => {
  const onClick = useCallback(() => {
    pickId(id);
  }, [id, pickId]);

  return (
    <li onClick={onClick}>
      {entry.site.value}
    </li>
  );
};

const Entries = ({ space, index, id, pickId }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    (async () => {
      const entries = await getEntries(space, index);
      setEntries(entries);
    })();
  }, [space, index, id]);

  const listItems = entries
    .map(([id, entry]) => ({ key: id, id, entry, pickId }))
    .map(props => <EntryItem {...props} />);

  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default React.memo(Entries);

