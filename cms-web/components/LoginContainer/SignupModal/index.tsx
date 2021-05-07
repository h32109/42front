/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useRef } from "react";
import AlertInput from "./AlertInput";
import GenderContainer from "./GenderContainer";
import BirthdayContainer from "./BirthdayContainer";
import { Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";

const modalHeader = css`
  display: flex;
  flex-direction: column;
  .title {
    font-size: 32px;
    font-weight: bold;
  }
  .description {
    font-size: 15px;
    color: #606770;
  }
`;

const divStyle = css`
  font-size: 12px;
  width: 100%;

  > div {
    margin-bottom: 10px;
  }

  .name-container {
    display: flex;
    flex-direction: row;

    > div {
      flex: 1;

      &:first-of-type {
        margin-right: 8px;
      }
    }
  }

  .submit-button-container {
    display: flex;
    justify-content: center;

    button {
      margin: 12px 0;
      padding: 4px 60px;
      border: none;
      border-radius: 6px;
      background: #00a400;
      color: white;
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

interface SignupModalProps {
  show: boolean;
  toggleShow: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({
  show,
  toggleShow,
}: SignupModalProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleClose = () => {
    toggleShow();
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      for (let pair of formData.entries()) {
        console.log(pair);
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <ModalHeader closeButton={true}>
        <div css={modalHeader}>
          <div className={"title"}>가입하기</div>
          <div className={"description"}>빠르고 쉽습니다.</div>
        </div>
      </ModalHeader>
      <ModalBody>
        <form ref={formRef}>
          <div css={divStyle}>
            <div className="name-container">
              <AlertInput name={"lastName"} placeholder="성(姓)" tabIndex={0} />
              <AlertInput name={"firstName"} placeholder="이름(성은 제외)" />
            </div>
            <AlertInput name={"email"} placeholder="휴대폰 번호 또는 이메일" />
            <AlertInput name={"password"} placeholder="새 비밀번호" />
            <BirthdayContainer />
            <GenderContainer />
            <div className={"submit-button-container"}>
              <button type="button" onClick={handleButtonClick}>
                가입하기
              </button>
            </div>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default SignupModal;
