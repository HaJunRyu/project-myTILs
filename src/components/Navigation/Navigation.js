import Button from 'components/Button/Button';
import Dialog from 'components/Dialog';
import Modal from 'components/Modal';
import Portal from 'components/Portal';
import React, { useState } from 'react';
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
  const [isModal, setIsModal] = useState(false);

  const onModalChangeHandler = () => {
    setIsModal(!isModal);
  };

  return (
    <nav className={className}>
      <LoginButton onClick={onModalChangeHandler}>로그인</LoginButton>
      {isModal && (
        <Portal id="modal-root">
          <Modal isModal={isModal} setIsModal={setIsModal}>
            <Dialog isModal={isModal} setIsModal={setIsModal} />
          </Modal>
        </Portal>
      )}
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
