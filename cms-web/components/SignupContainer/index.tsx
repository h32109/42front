/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import AlertInput from "./AlertInput";
import GenderContainer from "./GenderContainer";
import CustomGenderContainer from "./CustomGenderContainer";
import BirthdayContainer from "./BirthdayContainer";

const divStyle = css`
  font-size: 12px;
  width: 432px;

  > div {
    margin-bottom: 10px;
  }
  
  .name-container {
    display: flex;
    flex-direction: row;

    > div {
      flex: 1;
    }
  }
`;

const SignupContainer: React.FC = () => {
  return (
    <div css={divStyle}>
      <div className="name-container">
        <AlertInput placeholder="성(姓)" tabIndex={0} />
        <AlertInput placeholder="이름(성은 제외)" />
      </div>
      <AlertInput placeholder="휴대폰 번호 또는 이메일" />
      <AlertInput placeholder="새 비밀번호" />
      <BirthdayContainer />
      <GenderContainer />
      {
        // some boolean &&
        <CustomGenderContainer />
      }
      <div>
        <button type="submit">가입하기</button>
      </div>
    </div>
  );
};

export default SignupContainer;
