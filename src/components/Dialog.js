import React from 'react';
import styled from 'styled-components';
import Button from './Button/Button';
import { ReactComponent as GoogleIcon } from 'assets/icon-google.svg';

const Header1 = styled.h1`
  text-align: center;
  padding: 50px 0;
  color: white;
`;

const GoogleLoginButton = styled(Button)`
  display: block;
  width: 250px;
  height: 65px;
  border-radius: 30px;
  border: 0px;
  background-color: #fff;
  margin: 0 auto;
  outline: 0;
`;

const LoginButton = styled(Button)`
  display: block;
  width: 250px;
  height: 65px;
  border-radius: 30px;
  border: 2px white solid;
  outline: 0;
  background-color: transparent;
  margin: 0 auto;
  color: white;

  &:hover {
    background-color: white;
    color: #2c3035;
  }
`;

const ButtonText = styled.span`
  line-height: 65px;
  font-size: 20px;
`;

const DivisionContainer = styled.div`
  display: flex;
`;

const DivisionLine = styled.div`
  display: inline-block;
  width: 170px;
  height: 30px;
  border-bottom: 1px solid white;
  margin-bottom: 30px;
`;

const DivisionText = styled.span`
  line-height: 60px;
  margin: 0 15px;
  color: white;
`;

const SmallText = styled.small`
  display: block;
  text-align: center;
  margin-bottom: 15px;
  color: #a0a0a2;
  font-weight: 400;
`;

const Dialog = () => {
  return (
    <div>
      <Header1>시작하기</Header1>
      <GoogleLoginButton>
        <GoogleIcon width={'18px'} height={'18px'} />
        <ButtonText>Google</ButtonText>
      </GoogleLoginButton>
      <DivisionContainer>
        <DivisionLine></DivisionLine>
        <DivisionText>또는</DivisionText>
        <DivisionLine></DivisionLine>
      </DivisionContainer>
      <SmallText>MyTils에 가입함으로써 개인정보 이용약관에 동의합니다.</SmallText>
      <LoginButton>로그인/회원가입</LoginButton>
    </div>
  );
};

export default Dialog;
