import React, { useState, useCallback, useEffect } from 'react';
import Input from './Input';
import { capitalize } from '../helpers/stringHelper';

const EntryInput = ({ entry, name, props, setEntry }) => {
  const onChange = useCallback(value => {
    entry[name].value = value;
    setEntry(entry);
  }, [entry, name]);

  const inputProps = { ...props, onChange, placeholder: capitalize(name) };
  return <Input {...inputProps} />;
};

const Entry = ({ id, entry: selectedEntry, saveEntry }) => {
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
    <>
      {inputs}
      <button onClick={saveLocalEntry}>
        Save
      </button>
    </>
  );
};

export default React.memo(Entry);

