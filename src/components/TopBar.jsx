import React, { useState } from 'react';
import { useAddress } from '3box-react-hooks';

import styles from '../styles/TopBar.less';

const TopBar = () => {
  //const address = useAddress();

  return (
    <div className={styles.topBar}>
      {/*address != null && (<threebox-address data-address={address} />)*/}
      <span className={styles.spacer} />
      <a
          className="github-button"
          href="https://github.com/raksooo/3bpm"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star raksooo/3bpm on GitHub">
        GitHub
      </a>
    </div>
  );
};

export default React.memo(TopBar);

