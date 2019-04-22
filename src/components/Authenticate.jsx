import React, { useState, useCallback } from 'react';
import { useProvider } from '3box-react-hooks';
import classNames from 'classnames';
import { styleIf, opaqueIf } from '../helpers/stylesHelper';

import styles from '../styles/Authenticate.less';

const Authenticate = ({ space, openSpace }) => {
  const [pressed, setPressed] = useState(false);
  const provider = useProvider();

  const signIn = useCallback(() => {
    setPressed(true);
    openSpace();
  }, [openSpace]);

  const className = classNames(
    styles.authenticate,
    opaqueIf(space == null),
    styleIf(pressed, styles.loading)
  );

  let text = '';
  if (provider == null) {
    text = 'Web3 not available';
  } else if (!pressed) {
    text = 'Sign In';
  }

  return (
    <button
        className={className}
        onClick={signIn}
        disabled={pressed || provider == null}>
      {text}
    </button>
  );
};

export default React.memo(Authenticate);

