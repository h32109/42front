/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { AlertInputStyle } from "./AlertInput";

const divStyle = css`
  > div {
    margin-bottom: 10px;
  }

  select {
    width: 100%;
    font-size: 12px;
    height: 40px;
    border: 1px solid #ccd0d5;
    border-radius: 5px;
    overflow: hidden;
    margin: 4px 0;
    padding: 0 4px;
  }
`;

const CustomGenderContainer: React.FC = () => {
  return (
    <div css={divStyle}>
      <div>
        <select defaultValue="0">
          <option value="0" disabled>
            회원님을 어떻게 지칭할지 선택하세요
          </option>
          <option value="1">여성: &quot;생일을 축하해주세요!&quot;</option>
          <option value="2">남성: &quot;생일을 축하해주세요!&quot;</option>
          <option value="6">여러 명: &quot;생일을 축하해주세요!&quot;</option>
        </select>
        <div>선택한 항목이 모든 사람에게 공개됩니다.</div>
      </div>
      <div css={AlertInputStyle}>
        <input placeholder="성별(선택 사항)" />
      </div>
    </div>
  );
};

export default CustomGenderContainer;
