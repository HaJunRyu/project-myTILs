import StyledHeaderContainer from 'containers/HeaderContainer';
import StyledTilListContainer from 'containers/TilListContainer';
import React from 'react';
import { useSelector } from 'react-redux';

function HomePage() {
  const { currentUser } = useSelector(state => state.auth);
  console.log(currentUser);
  return (
    <div>
      <StyledHeaderContainer />
      <StyledTilListContainer currentUser={currentUser} />
    </div>
  );
}

export default HomePage;
