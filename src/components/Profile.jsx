import React, { useEffect } from 'react';
import { useProfile, useDelayedSpace } from '3box-react-hooks';
import { SPACE_NAME } from '../constants';
import { makeGenitive } from '../helpers/stringHelper'

const Profile = (props) => {
  const {
    setSpace,
  } = props;

  const profile = useProfile();
  const [space, openSpace] = useDelayedSpace(SPACE_NAME);

  useEffect(() => {
    if (space != null) {
      setSpace(space);
    }
  }, [space]);

  const genitiveName = profile != null && profile.name != null
    ? makeGenitive(profile.name)
    : null;

  return (
    <>
      {profile != null && (
        <>
          <span>
            {profile.emoji}
          </span>
          <span>
            {genitiveName}
          </span>
          <span>
            &nbsp;secret password stash
          </span>
        </>
      )}
      {space == null && (
        <button onClick={openSpace}>Authenticate</button>
      )}
    </>
  );
};

export default React.memo(Profile);

