import React from 'react';
import PropTypes from 'prop-types';

function Til({ children }) {
  return <li>{children}</li>;
}

Til.propTypes = {
  children: PropTypes.node,
};

export default Til;
