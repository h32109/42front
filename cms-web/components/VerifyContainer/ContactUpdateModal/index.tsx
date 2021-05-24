/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  Form,
  FormControl,
  Modal,
  ModalBody,
  ModalFooter,
} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import styled from "@emotion/styled";
import ContactWarningModal from "../ContactWarningModal";

const contactUpdateModalStyle = css`
  background-color: rgba(255, 255, 255, 0.7);
  padding-top: 200px;

  div {
    max-width: 580px;
    border: none;
  }
  div > .modal-content {
    background-color: #fff;
    border-radius: 3px;
    border-radius: 8px 8px 8px 8px;
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

const contactUpdateModalHeaderStyle = css`
  font-size: 20px;
  font-weight: bold;
  line-height: 36px;
  border: none;
`;

const contactUpdateModalBodyStyle = css`
  border: none;
`;

const contactUpdateModalFooterStyle = css`
  padding-top: 0;
  border: none;
`;

const emailInputStyle = css`
  background-color: transparent;
  border: 1px solid #ccd0d5;
  border-radius: 6px;
  box-sizing: border-box;
  color: #1c1e21;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.25;
  text-align: inherit;
  width: 100%;
  height: 55px;
`;

type ContactUpdateModalProps = {
  show: boolean;
  toggleShow: () => void;
};

const cancelAStyle = css`
  align-items: center;
  background: transparent;
  border: none;
  box-sizing: border-box;
  color: #216fdb;
  display: flex;
  font-size: 15px;
  height: 36px;
  justify-content: center;
  line-height: 20px;
  cursor: pointer;
  margin: 0;
  padding: 0;
  :link {
    text-decoration: none;
  }
  :visited {
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
  }
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

const ContactUpdateModal: React.FC<ContactUpdateModalProps> = ({
  show,
  toggleShow,
}) => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [showChildModal, setShowChildModal] = useState(false);

  const handleClose = () => {
    toggleShow();
  };
  const handleCancelAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleShow();
  };
  const toggleChildShow = () => {
    setShowChildModal(prev => !prev);
  };
  const handleAcceptButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowChildModal(true);
  };

  return (
    <>
      <Modal css={contactUpdateModalStyle} show={show} onHide={handleClose}>
        <ModalHeader css={contactUpdateModalHeaderStyle} closeButton={true}>
          이메일 주소를 추가하세요
        </ModalHeader>
        <ModalBody css={contactUpdateModalBodyStyle}>
          <div className={'form-floating'}>
            <Form.Control
                id="floatingInput"
                as={'input'}
                placeholder={'새 이메일'}
                bsPrefix={'form-control'}
                type='email'
                css={emailInputStyle}
                ref={emailInputRef}
            />
          </div>
        </ModalBody>
        <ModalFooter css={contactUpdateModalFooterStyle}>
          <a css={cancelAStyle} onClick={handleCancelAClick}>
            취소
          </a>
          <FacebookPrimaryButton
            className="float-right"
            varient={"light"}
            size={"sm"}
            onClick={handleAcceptButtonClick}
          >
            추가
          </FacebookPrimaryButton>
        </ModalFooter>
      </Modal>
      <ContactWarningModal show={showChildModal} toggleShow={toggleChildShow} />
    </>
  );
};

export default ContactUpdateModal;
