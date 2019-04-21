import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import { styleIf, opaqueIf } from '../helpers/stylesHelper';

import styles from '../styles/Authenticate.less';

const Authenticate = ({ space, openSpace }) => {
  const [pressed, setPressed] = useState(false);

  const signIn = useCallback(() => {
    setPressed(true);
    openSpace();
  }, [openSpace]);

  const className = classNames(
    styles.authenticate,
    opaqueIf(space == null),
    styleIf(pressed, styles.loading)
  );

  return (
    <button className={className} onClick={signIn} disabled={pressed}>
      {!pressed && 'Sign In'}
    </button>
  );
};

export default React.memo(Authenticate);

