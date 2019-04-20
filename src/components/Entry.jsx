import React, { useState, useCallback, useEffect } from 'react';
import Input from './Input';
import { capitalize } from '../helpers/stringHelper';

import styles from '../styles/Entry.less';

const EntryInput = ({ entry, name, props, setEntry }) => {
  const onChange = useCallback(value => {
    entry[name].value = value;
    setEntry(entry);
  }, [entry, name]);

  const inputProps = {
    ...props,
    onChange,
    placeholder: capitalize(name),
    className: styles.input,
  };
  return <Input {...inputProps} />;
};

const Entry = ({ entry: selectedEntry, saveEntry, deleteEntry }) => {
  const [entry, setEntry] = useState({});

  useEffect(() => {
    setEntry(selectedEntry);
  }, [selectedEntry]);

  const saveLocalEntry = useCallback(() => {
    saveEntry(selectedEntry);
  });

  const inputs = Object.entries(entry)
    .map(([name, props]) => ({ key: name, entry, name, props, setEntry }))
    .map(props => <EntryInput {...props} />);

  return (
    <form className={styles.form}>
      {inputs}
      <div className={styles.buttons}>
        <button onClick={saveLocalEntry} className={styles.save}>
          Save
        </button>
        {selectedEntry != null && (
          <button onClick={deleteEntry} className={styles.delete}>
            Delete
          </button>
        )}
      </div>
    </form>
  );
};

export default React.memo(Entry);

