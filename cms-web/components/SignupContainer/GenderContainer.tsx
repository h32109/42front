/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useState } from "react";

const divStyle = css`
  .gender-list {
    display: flex;
    flex-direction: row;

    label {
      flex: 1;
      font-size: 12px;
      height: 40px;
      line-height: 40px;
      border: 1px solid gray;
      border-radius: 5px;
      overflow: hidden;
    }
  }
`;

const GenderContainer: React.FC = () => {
  const [alert, setAlert] = useState(false);

  const handleClick = (e: React.MouseEvent) => {};

  return (
    <div css={divStyle}>
      <div>
        <div>
          성별
          <i />
        </div>
        {alert && <i />}
      </div>
      <span className={'gender-list'}>
        <label htmlFor="female">
          여성
          <input id="female" type="radio" name="gender" value="1" onClick={handleClick} />
        </label>
        <label htmlFor="male">
          남성
          <input id="male" type="radio" name="gender" value="2" onClick={handleClick} />
        </label>
        <label htmlFor="custom">
          직접 지정
          <input id="custom" type="radio" name="gender" value="-1" onClick={handleClick} />
        </label>
      </span>
    </div>
  );
};

export default GenderContainer;
