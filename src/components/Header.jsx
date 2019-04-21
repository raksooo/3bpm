import React from 'react';
import classNames from 'classnames';
import Profile from './Profile';
import { opaqueIf } from '../helpers/stylesHelper';

import styles from '../styles/Header.less';

const Header = ({ space, openSpace }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.brand}>3BPM</h1>
      <Profile space={space} />
      <button
          className={classNames(styles.authenticate, opaqueIf(space == null))}
          onClick={openSpace}>
        Sign In
      </button>
    </header>
  );
};

export default React.memo(Header);

