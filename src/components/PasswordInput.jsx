import React from 'react';
import classNames from 'classnames';
import { useToggle } from '../helpers/helperHooks';

import styles from '../styles/PasswordInput.less';

import Eye from '../resources/eye.svg';

const PasswordInput = (props) => {
  const [visible, toggleVisible] = useToggle();
  const type = visible ? 'text' : 'password';

  return (
    <div className={styles.container}>
      <input
        {...props}
        type={type}
        className={classNames(props.className, styles.input)} />
      <Eye className={styles.toggleVisible} onClick={toggleVisible} />
    </div>
  );
};

export default React.memo(PasswordInput);


