import React, { useState, useEffect, useCallback } from 'react';

const getEntries = async (space) => {
  const resultPromises = await space.private.log
    .map(({ key }) => key)
    .filter(key => typeof key === 'string')
    .filter((key, i, keys) => keys.indexOf(key) >= i)
    .map(async (key) => [key, await space.private.get(key)]);

  const entries = await Promise.all(resultPromises);
  return entries
    .filter(([_, value]) => typeof value === 'object');
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

const Entries = ({ space, id, pickId }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries(space).then(setEntries)
  }, [space, id]);

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

