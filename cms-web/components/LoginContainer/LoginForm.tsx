/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { Button, Card, FormControl } from "react-bootstrap";
import HidePasswordButton from "./HidePasswordButton";
import { css } from "@emotion/react";
import SignupModal from "./SignupModal";
import { login } from "../../store/authStore";

import {
  useLazyQuery,
  useMutation,
  useReactiveVar,
  useQuery,
} from "@apollo/client";
import UserList, { addUser } from "store/userStore";
import { ALLUSER_QUERY, ADDUSER_MUTATION } from "api/graphql/schema";
import { User } from "models/user";

const loginFormStyle = css`
  height: max-content;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  box-sizing: border-box;
`;

const loginInputStyle = css`
  font-size: 17px;
  padding: 14px 16px;
  width: 364px;
  height: 52px;
  line-height: 16px;
  border: 1px solid #dddfe2;
  color: #1d2129;
  vertical-align: middle;
  margin-bottom: 15px;
`;

const loginButtonStyle = css`
  width: 364px;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  line-height: 48px;
  padding: 0 16px;
  margin-bottom: 15px;
`;

const findPasswordStyle = css`
  color: #1877f2;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

const newAccountStyle = css`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  button {
    border: none;
    border-radius: 6px;
    font-size: 17px;
    line-height: 48px;
    padding: 0 16px;
  }
`;

const hideButtonStyle = css`
  top: 12px;
  right: 10px;
  transition: right 0.2s;
  border-radius: 50%;
  bottom: -25px;
  height: 28px;
  position: absolute;
  width: 28px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: #e8e8e8;
  }
  a {
    padding: 0;
    margin: 0;
  }
`;

const formControlContainerStyle = css`
  display: inline-block;
  position: relative;
  overflow: hidden;
  input {
    padding-right: 50px;
  }
`;
const LoginForm: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showHideButton, setShowHideButton] = useState(false);
  const [hide, setHide] = useState(true);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { data, loading, error } = useQuery<User>(ALLUSER_QUERY);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handlePasswordInputChange = (e: React.ChangeEvent) => {
    e.preventDefault();
    if (passwordRef.current.value) {
      setShowHideButton(true);
    } else {
      setShowHideButton(false);
    }
  };
  const toggleShow = () => {
    setShowModal(prev => !prev);
  };
  const handleLoginButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    login({
      identifier: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };
  return (
    <>
      <Card css={loginFormStyle}>
        <Card.Body>
          <FormControl
            // className={showAlert ? "input-alert" : ""}
            // onChange={handleCodeInputChange}
            css={loginInputStyle}
            // size={"sm"}
            placeholder={"이메일"}
            type="email"
            ref={emailRef}
          ></FormControl>
          <div css={formControlContainerStyle}>
            <FormControl
              // className={showAlert ? "input-alert" : ""}
              onChange={handlePasswordInputChange}
              css={loginInputStyle}
              // size={"sm"}
              placeholder="비밀번호"
              ref={passwordRef}
              type={hide ? "password" : ""}
            />
            {showHideButton ? (
              <div css={hideButtonStyle}>
                <HidePasswordButton hide={hide} setHide={setHide} />
              </div>
            ) : (
              <></>
            )}
          </div>
          <Button
            css={loginButtonStyle}
            variant="primary"
            className="bg-fb-blue"
            size="lg"
            type="submit"
            block
            onClick={handleLoginButtonClick}
          >
            로그인
          </Button>
          <div css={findPasswordStyle}>
            <a href="_blank">비밀번호를 잊으셨나요?</a>
          </div>
          <hr />
          <div css={newAccountStyle}>
            <Button
              variant="success"
              className="btn btn-lg bg-fb-green"
              onClick={toggleShow}
            >
              새 계정 만들기
            </Button>
          </div>
        </Card.Body>
      </Card>
      <SignupModal show={showModal} toggleShow={toggleShow} />
    </>
  );
};

export default LoginForm;
