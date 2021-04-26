import React from "react";

const CustomGenderContainer: React.FC = () => {
  return (
  <div>
    <div>
      <select>
        <option>회원님을 어떻게 지칭할지 선택하세요</option>
        <option>여성: "생일을 축하해주세요!"</option>
        <option>남성: "생일을 축하해주세요!"</option>
        <option>여러 명: "생일을 축하해주세요!"</option>
      </select>
    </div>
    <div>선택한 항목이 모든 사람에게 공개됩니다.</div>
    <div>
      <div>성별(선택 사항)</div>
      <input />
    </div>
  </div>
  );
};

export default CustomGenderContainer;