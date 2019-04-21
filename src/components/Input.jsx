import React, { useState, useEffect, useCallback } from 'react';
import PasswordInput from './PasswordInput';

const Input = ({ type = "text", ...props }) => {
  const [value, setValue] = useState('');

  useEffect(() => { setValue(props.value); }, [props.value])

  const onChange = useCallback(event => {
    setValue(event.target.value);
    if (typeof props.onChange === 'function') {
      props.onChange(event.target.value);
    }
  }, [props.onChange]);

  const commonProps = {
    ...props,
    value,
    onChange,
  };

  if (type === 'textarea') {
    return <textarea {...commonProps} />;
  } else if (type === 'password') {
    return <PasswordInput {...commonProps} />
  } else {
    return <input {...commonProps} type={type} />;
  }
};

export default React.memo(Input);

