import React from 'react';

const Entries = (props) => {
  const {
    space,
  } = props;

  if (space == null) {
    return null;
  }

  return (
		<div>
			Authenticated!
		</div>
	);
};

export default React.memo(Entries);

