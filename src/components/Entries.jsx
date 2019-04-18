import React from 'react';

const Entries = (props) => {
  const {
    space,
    entrySelected,
  } = props;

  if (space == null) {
    return null;
  }

  return (
		<>
			Authenticated!
		</>
	);
};

export default React.memo(Entries);

