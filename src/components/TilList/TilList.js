import React from 'react';
import PropTypes from 'prop-types';

function TilList({ children }) {
  return <ul>{children}</ul>;
}

TilList.propTypes = {
  children: PropTypes.node,
};

export default TilList;
