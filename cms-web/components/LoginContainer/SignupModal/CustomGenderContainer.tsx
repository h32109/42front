/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PreferredPronoun, SignUpInputName } from "constant/signup";

import React from "react";
import { AlertInputStyle } from "./AlertInput";
import Icon from "@mdi/react";
import { mdiAlertCircle } from "@mdi/js";

const divStyle = css`
  > div {
    margin-bottom: 10px;
  }

  .select-container {
    position: relative;
    
    select {
      width: 100%;
      font-size: 12px;
      height: 40px;
      border: 1px solid #ccd0d5;
      border-radius: 5px;
      overflow: hidden;
      margin: 4px 0;
      padding: 0 4px;

      &.alert-border {
        border-color: red;
      }
    }

    svg {
      position: absolute;
      right: 5%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

interface CustomGenderContainerProps {
  showAlert: boolean;
  setShowAlert: (value: boolean) => void;
}

const CustomGenderContainer: React.FC<CustomGenderContainerProps> = props => {
  const { showAlert, setShowAlert } = props;

  const handleFocus = () => {
    setShowAlert(false);
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!(e.target as HTMLSelectElement).value) {
      setShowAlert(true);
    }
  };

  return (
    <div css={divStyle}>
      <div>
        <div className={"select-container"}>
          <select
            className={showAlert ? "alert-border" : ""}
            name={SignUpInputName.PreferredPronoun}
            defaultValue="0"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <option value="0" disabled>
              회원님을 어떻게 지칭할지 선택하세요
            </option>
            <option value={PreferredPronoun.Female}>
              여성: &quot;생일을 축하해주세요!&quot;
            </option>
            <option value={PreferredPronoun.Male}>
              남성: &quot;생일을 축하해주세요!&quot;
            </option>
            <option value={PreferredPronoun.Multiple}>
              여러 명: &quot;생일을 축하해주세요!&quot;
            </option>
          </select>
          {showAlert && (
            <Icon path={mdiAlertCircle} color={"red"} size={"1.7em"} />
          )}
        </div>
        <div>선택한 항목이 모든 사람에게 공개됩니다.</div>
      </div>
      <div css={AlertInputStyle}>
        <input
          name={SignUpInputName.CustomGender}
          placeholder="성별(선택 사항)"
        />
      </div>
    </div>
  );
};

export default CustomGenderContainer;
