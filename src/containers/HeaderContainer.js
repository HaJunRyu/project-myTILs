import StyledNavigation from 'components/Navigation/Navigation';
import React from 'react';
import styled from 'styled-components';

function HeaderContainer({ className }) {
  return (
    <header className={className}>
      <StyledNavigation />
    </header>
  );
}

const StyledHeaderContainer = styled(HeaderContainer)`
  background-color: #25272b;
  color: #b4b4b5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
`;

export default StyledHeaderContainer;
