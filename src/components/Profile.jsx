import React, { useEffect } from 'react';
import { useProfile } from '3box-react-hooks';
import { makeGenitive } from '../helpers/stringHelper';

const Profile = ({ space, openSpace }) => {
  const profile = useProfile();

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

