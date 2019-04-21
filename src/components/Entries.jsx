import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import { useAsyncEffect } from '../helpers/helperHooks';

import styles from '../styles/Entries.less';

const getEntries = async (space, index) => {
  const resultPromises = (await index.entries())
    .map(async (key) => [key, await space.private.get(key)]);

  return await Promise.all(resultPromises);
};

const EntryItem = ({ id, entry, pickId, selected }) => {
  const onClick = useCallback(() => {
    pickId(id);
  }, [id, pickId]);

  return (
    <li 
        onClick={onClick}
        className={classNames(styles.item, selected && styles.selected)}>
      {entry.site.value}
    </li>
  );
};

const Entries = ({ space, index, id: selectedId, pickId }) => {
  const [entries, setEntries] = useState([]);

  useAsyncEffect(async () => {
      const entries = await getEntries(space, index);
      setEntries(entries);
  }, [space, index, selectedId]);

  const listItems = entries
    .map(([id, entry]) => ({
      key: id,
      id,
      entry,
      pickId,
      selected: selectedId === id,
    }))
    .map(props => <EntryItem {...props} />);

  return (
    <ul className={styles.list}>
      {listItems}
    </ul>
  );
};

export default React.memo(Entries);

