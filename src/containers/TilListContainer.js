import TilList from 'components/TilList/TilList';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { object } from 'prop-types';

function TilListContainer({ className, currentUser }) {
  return <main className={className}>{currentUser ? <TilList></TilList> : null}</main>;
}

const StyledTilListContainer = styled(TilListContainer)`
  background: #fdfcf0;
  min-height: 100vh;
`;

TilListContainer.propTypes = {
  currentUser: object,
};

export default StyledTilListContainer;
