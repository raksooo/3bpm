import React from 'react';

const Header = (props) => {
  const {
    children,
  } = props;

  return children;
};

export default React.memo(Header);

