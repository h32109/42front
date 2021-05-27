/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { Card, FormControl, Button } from "react-bootstrap";
import styled from "@emotion/styled";
import ContactUpdateModal from "./ContactUpdateModal";

const verifyContainerStyle = css`
  background-color: #e9ebee;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const verifyCardStyle = css`
  width: 26.5%;
  height: max-content;
  margin-top: 4.2vh;
  border: none;
  border-radius: 8px;
  .card-header:first-child {
    border-radius: 8px 8px 0 0;
  }
  .card-footer:last-child {
    border-radius: 0 0 8px 8px !important;
  }
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  box-sizing: border-box;
`;

const verifyCardHeaderStyle = css`
  background-color: white;
  color: #1c1e21;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  padding: 18px 16px;
`;

const verifyCardBodyStyle = css`
  color: #606770;
  font-size: 15px;
  font-weight: normal;
  line-height: 19px;
  padding: 18px 16px;
`;

const verifyCardFooterStyle = css`
  background-color: white;
  padding: 18px 16px;
  box-shadow: 0 0 4px rgb(0 0 0 / 10%), 0 0 1px rgb(0 0 0 / 10%);
`;

const userEmailSpanStyle = css`
  font-weight: bold;
`;

const codeInputStyle = css`
  height: 58px;
  width: 138px;
  margin-top: 20px;
  border-radius: 6px;

  &.input-alert {
    border: 1px solid red;
  }
`;

const emailResendWrapperStyle = css`
  color: #1877f2;
  padding-top: 10px;
  margin-bottom: 10px;
  line-height: 36px;
`;

const continueButtonStyle = activate => css`
  background-color: #1877f2;
  color: #fff;
  padding: 0px 35px;
  ${activate === false &&
  `
      color: #1c1e21;
      padding: 0px 35px;
  `}
  ${activate === true &&
  `
    :hover {
    background-color: #1877f2;
    color: #fff;
    }
    :focus {
      background-color: #1877f2;
      color: #fff;
    }
    :not(:disabled):not(.disabled):active {
      background-color: #1877f2;
      color: #fff;
    }
  `}
`;

const alertMessageStyle = css`
  color: #fa3e3e;
  font-size: 13px;
  line-height: 17px;
  margin-top: 4px;
`;

const FacebookButton = styled(Button)`
  background-color: #ebedf0;
  font-size: 0.85rem;
  border: none;
  border-radius: 6px;
  color: #1c1e21;
  font-weight: 600;
  line-height: 36px;
  overflow: hidden;
  padding: 0px 12px 0px 12px;

  :hover {
    background-color: #d4d5d7;
    border-color: #ccd0d5;
    color: #4b4f56;
    outline: 0 !important;
    outline-offset: unset !important;
  }
  :focus {
    background-color: #d4d5d7;
    border-color: #ccd0d5;
    color: #4b4f56;
    outline: 0 !important;
    outline-offset: unset !important;
  }
  :not(:disabled):not(.disabled):active {
    background-color: #d4d5d7;
    border-color: #ccd0d5;
    color: #4b4f56;
    outline: 0 !important;
    outline-offset: unset !important;
  }
  :disabled {
    background-color: #ebedf0;
    color: #bec3c9;
  }
`;

const VerifyContainer: React.FC = () => {
  const codeInputRef = useRef<HTMLInputElement>(null);
  const [activate, setActivate] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleCodeInputChange = (e: React.ChangeEvent) => {
    e.preventDefault();
    if (codeInputRef.current.value) {
      setActivate(true);
    } else {
      setActivate(false);
      setShowAlert(false);
    }
  };
  const handleContinueButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAlert(true);
  };
  const handleContactUpdateButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };
  const toggleShow = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <div css={verifyContainerStyle}>
        <Card css={verifyCardStyle}>
          <Card.Header css={verifyCardHeaderStyle}>
            이메일로 전송된 코드를 입력하세요
          </Card.Header>
          <Card.Body css={verifyCardBodyStyle}>
            회원님의 이메일이 맞는지 확인해주세요.{" "}
            <span css={userEmailSpanStyle}>유저 이메일</span>
            (으)로 코드를 입력하세요.
            <FormControl
              className={showAlert ? "input-alert" : ""}
              onChange={handleCodeInputChange}
              css={codeInputStyle}
              size={"sm"}
              placeholder={""}
              ref={codeInputRef}
            ></FormControl>
            {showAlert && (
              <div css={alertMessageStyle}>
                전송된 이메일을 확인하고 6자리 코드를 입력하세요.
              </div>
            )}
            <div css={emailResendWrapperStyle}>
              <a>이메일 재전송</a>
            </div>
          </Card.Body>
          <Card.Footer css={verifyCardFooterStyle}>
            <FacebookButton
              disabled={activate ? false : true}
              css={continueButtonStyle(activate)}
              className="float-right ml-2"
              varient={"light"}
              size={"sm"}
              onClick={handleContinueButtonClick}
            >
              계속
            </FacebookButton>
            <FacebookButton
              className="float-right"
              varient={"light"}
              size={"sm"}
              onClick={handleContactUpdateButtonClick}
            >
              연락처 정보 업데이트
            </FacebookButton>
          </Card.Footer>
        </Card>
      </div>
      <ContactUpdateModal show={showModal} toggleShow={toggleShow} />
    </>
  );
};

export default VerifyContainer;
