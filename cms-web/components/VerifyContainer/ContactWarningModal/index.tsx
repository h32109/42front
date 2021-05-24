/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import styled from "@emotion/styled";

const contactWarningModalStyle = css`
  background-color: rgba(255, 255, 255, 0.7);
  padding-top: 205px;

  div {
    max-width: 580px;
    border: none;
  }
  div > .modal-content {
    background-color: #fff;
    border-radius: 3px;
    border-radius: 8px 8px 8px 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  }
  button.close > span {
    background-color: #e4e6eb;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
    border-radius: 50%;
    display: block;
    height: 36px;
    width: 36px;
    line-height: 30px;
  }
`;

const contactWarningModalHeaderStyle = css`
  font-size: 20px;
  font-weight: bold;
  line-height: 36px;
  border: none;
`;

const contactWarningModalBodyStyle = css`
  border: none;
`;

const contactWarningModalFooterStyle = css`
  padding-top: 0;
  border: none;
`;

const FacebookPrimaryButton = styled(Button)`
  align-items: center;
  background-color: #216fdb;
  border-radius: 6px;
  box-sizing: border-box;
  display: flex;
  font-size: 15px;
  height: 36px;
  justify-content: center;
  line-height: 20px;
  margin-left: 20px;
  width: 121px;

  :hover {
    border-color: #365899;
    background-color: #365899;
    color: #ccd0d5;
    outline: 0 !important;
    outline-offset: unset !important;
  }
  :focus {
    border-color: #365899;
    background-color: #365899;
    color: #ccd0d5;
    outline: 0 !important;
    outline-offset: unset !important;
  }
  :not(:disabled):not(.disabled):active {
    border-color: #365899;
    background-color: #365899;
    color: #ccd0d5;
    outline: 0 !important;
    outline-offset: unset !important;
  }
  :disabled {
    background-color: #365899;
    color: #ccd0d5;
  }
`;

type ContactWarningModalProps = {
  show: boolean;
  toggleShow: () => void;
};

const ContactWarningModal: React.FC<ContactWarningModalProps> = ({
  show,
  toggleShow,
}) => {
  const handleClose = () => {
    toggleShow();
  };
  return (
    <Modal
      css={contactWarningModalStyle}
      show={show}
      onHide={handleClose}
    >
      <ModalHeader css={contactWarningModalHeaderStyle} closeButton={true}>
        잘못된 이메일 또는 전화번호
      </ModalHeader>
      <ModalBody css={contactWarningModalBodyStyle}>
        올바른 이메일 주소 또는 휴대폰 번호를 입력하세요.
      </ModalBody>
      <ModalFooter css={contactWarningModalFooterStyle}>
        <FacebookPrimaryButton
          className="float-right"
          varient={"light"}
          size={"sm"}
          onClick={handleClose}
        >
          닫기
        </FacebookPrimaryButton>
      </ModalFooter>
    </Modal>
  );
};

export default ContactWarningModal;
