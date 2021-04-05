import Button from 'components/Button/Button';
import React from 'react';
import styled from 'styled-components';

// 로그인 버튼 스타일링
const LoginButton = styled(Button)`
  font-size: 15px;
  color: #89898b;
  background-color: transparent;
  font-weight: 700;
  padding: 10px;
  border: 0;
  outline: none;
`;

// 네비게이션 컴포넌트
function Navigation({ className }) {
  return (
    <nav className={className}>
      <LoginButton>로그인</LoginButton>
    </nav>
  );
}

// 네비게이션 컴포넌트 스타일링
const StyledNavigation = styled(Navigation)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 30px;
  height: 70px;
`;

export default StyledNavigation;
