import React, { useCallback } from 'react';
import { useProvider, useDelayedSpace } from '3box-react-hooks';
import classNames from 'classnames';
import { styleIf, opaqueIf } from '../helpers/stylesHelper';
import { SPACE_NAME } from '../constants';
import { useAsyncEffectIf, useBool } from '../helpers/helperHooks';

import styles from '../styles/Authenticate.less';

const Authenticate = ({ setSpace }) => {
  const provider = useProvider();
  const [space, openSpace, box] = useDelayedSpace(SPACE_NAME);
  const [pressed, setPressed] = useBool();
  const [synced, setSynced] = useBool();

  const signIn = useCallback(() => {
    setPressed();
    openSpace();
  }, [openSpace]);

  const setSpaceCondition = box != null && space != null && synced == false;
  useAsyncEffectIf(async () => {
    box.onSyncDone(() => {
      setSpace(space);
      setSynced();
    });
  }, [box, synced], setSpaceCondition);

  const className = classNames(
    styles.authenticate,
    opaqueIf(!synced),
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

