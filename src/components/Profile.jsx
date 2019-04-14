import React, { useEffect } from 'react';
import { use3boxProfile, use3boxSpace } from '3box-react-hooks';

const Profile = (props) => {
	const {
		setSpace,
	} = props;

  const profile = use3boxProfile();
	const [space, authenticate] = use3boxSpace('3bpm');

	useEffect(() => {
		if (space != null) {
			setSpace(space);
		}
	}, [space]);

  return (
    <>
      <button onClick={authenticate}>Authenticate</button>
    </>
  );
};

export default React.memo(Profile);

