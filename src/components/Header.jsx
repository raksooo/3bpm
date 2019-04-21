import React from 'react';
import classNames from 'classnames';
import Profile from './Profile';
import Authenticate from './Authenticate';
import { opaqueIf } from '../helpers/stylesHelper';

import styles from '../styles/Header.less';

const Header = ({ space, openSpace }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.brand}>3BPM</h1>
      <Profile space={space} />
      <Authenticate space={space} openSpace={openSpace} />
    </header>
  );
};

export default React.memo(Header);

