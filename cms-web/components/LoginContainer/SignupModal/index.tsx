/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useRef, useState } from "react";
import AlertInput from "./AlertInput";
import GenderContainer from "./GenderContainer";
import BirthdayContainer from "./BirthdayContainer";
import { Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import { Gender, SignUpInputName } from "../../../constant/SignUp";
import AuthRepository from "../../../api/rest/AuthRepository";
import { useRouter } from "next/router";

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

const SignupModal: React.FC<SignupModalProps> = ({ show, toggleShow }: SignupModalProps) => {
  const router = useRouter();

  const [lastNameAlert, setLastNameAlert] = useState(false);
  const [firstNameAlert, setFirstNameAlert] = useState(false);
  const [emailOrPhoneAlert, setEmailOrPhoneAlert] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [birthdayAlert, setBirthdayAlert] = useState(false);
  const [genderAlert, setGenderAlert] = useState(false);
  const [preferredPronounAlert, setPreferredPronounAlert] = useState(false);

  const resetAlert = () => {
    setLastNameAlert(false);
    setFirstNameAlert(false);
    setEmailOrPhoneAlert(false);
    setPasswordAlert(false);
    setBirthdayAlert(false);
    setGenderAlert(false);
    setPreferredPronounAlert(false);
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleClose = () => {
    toggleShow();
  };

  const birthdayInvalidCondition = (year: number, month: number, day: number) => {
    return year > 2016;
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);

      const lastName = formData.get(SignUpInputName.LastName);
      const firstName = formData.get(SignUpInputName.FirstName);
      const emailOrPhone = formData.get(SignUpInputName.EmailOrPhone);
      const password = formData.get(SignUpInputName.Password);
      const day = +formData.get(SignUpInputName.Birthday_Day);
      const month = +formData.get(SignUpInputName.Birthday_Month);
      const year = +formData.get(SignUpInputName.Birthday_Year);
      const gender = formData.get(SignUpInputName.Gender);
      const preferredPronoun = formData.get(SignUpInputName.PreferredPronoun);
      const customGender = formData.get(SignUpInputName.CustomGender);

      resetAlert();

      let invalid = false;
      if (!lastName) {
        setLastNameAlert(true);
        invalid = true;
      }
      if (!firstName) {
        setFirstNameAlert(true);
        invalid = true;
      }
      if (!emailOrPhone) {
        setEmailOrPhoneAlert(true);
        invalid = true;
      }
      if (!password) {
        setPasswordAlert(true);
        invalid = true;
      }
      if (birthdayInvalidCondition(year, month, day)) {
        setBirthdayAlert(true);
        invalid = true;
      }
      if (!gender) {
        setGenderAlert(true);
        invalid = true;
      } else if (gender === Gender.Custom && !preferredPronoun) {
        setPreferredPronounAlert(true);
        invalid = true;
      }

      if (invalid) {
        return;
      }

      AuthRepository.assignUser({
        lastName: lastName.toString(),
        firstName: firstName.toString(),
        identifier: emailOrPhone.toString(),
        password: password.toString(),
        birthday: new Date(year, month - 1, day),
        gender: gender.toString(),
      })
        .then(() => {
          console.log("success");
          router.push("/auth");
        })
        .catch(err => {
          console.log(err);
        });
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
              <AlertInput
                name={SignUpInputName.LastName}
                placeholder="성(姓)"
                tabIndex={0}
                showAlert={lastNameAlert}
                setShowAlert={setLastNameAlert}
              />
              <AlertInput
                name={SignUpInputName.FirstName}
                placeholder="이름(성은 제외)"
                showAlert={firstNameAlert}
                setShowAlert={setFirstNameAlert}
              />
            </div>
            <AlertInput
              name={SignUpInputName.EmailOrPhone}
              placeholder="휴대폰 번호 또는 이메일"
              showAlert={emailOrPhoneAlert}
              setShowAlert={setEmailOrPhoneAlert}
            />
            <AlertInput
              name={SignUpInputName.Password}
              placeholder="새 비밀번호"
              showAlert={passwordAlert}
              setShowAlert={setPasswordAlert}
            />
            <BirthdayContainer
              showAlert={birthdayAlert}
              setShowAlert={setBirthdayAlert}
              invalidCondition={birthdayInvalidCondition}
            />
            <GenderContainer
              showAlert={genderAlert}
              setShowAlert={setGenderAlert}
              showCustomAlert={preferredPronounAlert}
              setShowCustomAlert={setPreferredPronounAlert}
            />
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
