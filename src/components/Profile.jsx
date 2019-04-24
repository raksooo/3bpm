import React from 'react';
import classNames from 'classnames';
import { useProfile } from '3box-react-hooks';
import { makeGenitive } from '../helpers/stringHelper';
import { opaqueIf } from '../helpers/stylesHelper';

import styles from '../styles/Profile.less';

const Profile = ({ space }) => {
  const profile = useProfile();

  return (
    <h2 className={classNames(styles.title, opaqueIf(space != null))}>
			{profile != null && profile.name != null && (
				<>
					<span>
						{makeGenitive(profile.name)}
					</span>
					<span>
						&nbsp;secret password stash
					</span>
				</>
			)}
    </h2>
  );
};

export default React.memo(Profile);

