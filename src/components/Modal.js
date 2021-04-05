import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalContainer = styled.section`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const DialogContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  background-color: #2c3035;
  border-radius: 10px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  width: ${props => props.width || '400px'};
  height: ${props => props.height || '500px'};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 0;
  outline: 0;
  background-color: inherit;
  font-size: 30px;
`;

const Modal = ({ children, isModal, setIsModal, width, height }) => {
  //모달부분 클릭시 모달창 닫기
  const onModalClose = e => {
    if (e.target === e.currentTarget) setIsModal(!isModal);
  };

  return (
    <>
      {isModal && (
        <ModalContainer onClick={onModalClose}>
          <DialogContainer width={width} height={height}>
            <CloseButton onClick={() => setIsModal(!isModal)}>&times;</CloseButton>
            {children}
          </DialogContainer>
        </ModalContainer>
      )}
    </>
  );
};

Modal.propTypes = {
  isModal: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Modal;
