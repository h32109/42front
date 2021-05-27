/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import SignupModal from "./SignupModal";
import { css } from "@emotion/react";
import LoginForm from "./LoginForm";

const loginContainerStyle = css`
  background-color: #e9ebee;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const introductionStyle = css`
  height: max-content;
  padding-right: 80px;
  img {
    height: 106px;
    margin: -28px -28px -10px -28px;
  }
  h2 {
    font-size: 28px;
    font-weight: normal;
    line-height: 32px;
    width: 500px;
  }
`;

const LoginContainer: React.FC = () => {
  return (
    <>
      <div css={loginContainerStyle}>
        <div css={introductionStyle}>
          <img src={"/images/fbLogo.svg"} alt="Facebook" />
          <h2>
            Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를
            나눠보세요.
          </h2>
        </div>
        <LoginForm />
      </div>
    </>
  );
};

// Login.getInitialProps = async context => {
//   return { tag: context.query.tag };
// };

export default LoginContainer;
