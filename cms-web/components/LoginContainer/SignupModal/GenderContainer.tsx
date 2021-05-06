/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { ChangeEvent, useState } from "react";
import Icon from "@mdi/react";
import { mdiAlertCircle } from "@mdi/js";
import CustomGenderContainer from "./CustomGenderContainer";

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

enum Gender {
  Male = "1",
  Female = "2",
  Custom = "-1",
}

const GenderContainer: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showCustom, setShowCustom] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        <label htmlFor="female">
          <span>여성</span>
          <input id="female" type="radio" name="gender" value={Gender.Male} />
        </label>
        <label htmlFor="male">
          <span>남성</span>
          <input id="male" type="radio" name="gender" value={Gender.Female} />
        </label>
        <label htmlFor="custom">
          <span>직접 지정</span>
          <input id="custom" type="radio" name="gender" value={Gender.Custom} />
        </label>
      </span>
      {showCustom && <CustomGenderContainer />}
    </div>
  );
};

export default GenderContainer;
