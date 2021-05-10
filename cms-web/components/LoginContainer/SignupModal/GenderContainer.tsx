/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { ChangeEvent, useState } from "react";
import Icon from "@mdi/react";
import { mdiAlertCircle } from "@mdi/js";
import CustomGenderContainer from "./CustomGenderContainer";
import { Gender, SignUpInputName } from "../../../constant/SignUp";

const divStyle = css`
  .gender-header {
    display: flex;
    justify-content: space-between;
  }
  .gender-list {
    display: flex;
    flex-direction: row;
    margin: 4px 0;

    label {
      flex: 1 0 auto;
      font-size: 12px;
      height: 40px;
      border: 1px solid #ccd0d5;
      border-radius: 5px;
      overflow: hidden;
      padding: 0 10px;
      display: flex;
      align-items: center;

      &.alert-border {
        border-color: red;
      }

      span {
        flex: 8;
      }

      input {
        flex: 1;
      }

      &:not(:first-of-type) {
        margin-left: 12px;
      }
    }
  }
`;

interface GenderContainerProps {
  showAlert: boolean;
  setShowAlert: (value: boolean) => void;
  showCustomAlert: boolean;
  setShowCustomAlert: (value: boolean) => void;
}

const GenderContainer: React.FC<GenderContainerProps> = props => {
  const {
    showAlert,
    setShowAlert,
    showCustomAlert,
    setShowCustomAlert,
  } = props;
  const [showCustom, setShowCustom] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowAlert(false);
    if (e.target.value === Gender.Custom) {
      setShowCustom(true);
    } else {
      setShowCustom(false);
    }
  };

  return (
    <div css={divStyle}>
      <div className={"gender-header"}>
        <div>
          성별
          <i />
        </div>
        {showAlert && (
          <Icon path={mdiAlertCircle} color={"red"} size={"1.7em"} />
        )}
      </div>
      <span className={"gender-list"} onChange={handleChange}>
        <label htmlFor="female" className={showAlert ? "alert-border" : ""}>
          <span>여성</span>
          <input
            id="female"
            type="radio"
            name={SignUpInputName.Gender}
            value={Gender.Male}
          />
        </label>
        <label htmlFor="male" className={showAlert ? "alert-border" : ""}>
          <span>남성</span>
          <input
            id="male"
            type="radio"
            name={SignUpInputName.Gender}
            value={Gender.Female}
          />
        </label>
        <label htmlFor="custom" className={showAlert ? "alert-border" : ""}>
          <span>직접 지정</span>
          <input
            id="custom"
            type="radio"
            name={SignUpInputName.Gender}
            value={Gender.Custom}
          />
        </label>
      </span>
      {showCustom && (
        <CustomGenderContainer
          showAlert={showCustomAlert}
          setShowAlert={setShowCustomAlert}
        />
      )}
    </div>
  );
};

export default GenderContainer;
