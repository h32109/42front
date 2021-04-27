import React from "react";
import AlertInput from "./AlertInput";
import GenderContainer from "./GenderContainer";
import CustomGenderContainer from "./CustomGenderContainer";
import BirthdayContainer from "./BirthdayContainer";

const SignupContainer: React.FC = () => {
  return (
    <div>
      <div>
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
