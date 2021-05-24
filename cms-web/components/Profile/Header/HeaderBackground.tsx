/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import CommonButton from "components/Common/CommonButton";

import Icon from "@mdi/react";
import { mdiCamera } from "@mdi/js";

import { css } from "@emotion/react";

const HeaderBackgroundWrapper = css`
  position: relative;
  max-height: 460px;
  height: 50vh;
  background-color: gray;
  background: linear-gradient(#f0f2f5, 85%, #6e6f70);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  img {
    height: 100%;
    width: 100%;
  }

  .profile-header-add-cover-btn-wrapper {
    position: absolute;
    right: 40px;
    bottom: 20px;
  }
`;

const HeaderBackground: React.FC = () => {
  const [backgroundImg, setBackgroundImg] = useState<string | undefined>(
    undefined,
  );

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("click add cover image", e.currentTarget);
    setBackgroundImg(
      backgroundImg === undefined ? "/images/test.png" : undefined,
    );
  };

  return (
    <div css={HeaderBackgroundWrapper}>
      {backgroundImg ? <img src={backgroundImg} alt="background" /> : null}
      <div className="profile-header-add-cover-btn-wrapper">
        <CommonButton theme="light" onClick={handleButtonClick}>
          <Icon className="icon" path={mdiCamera} size={0.8} />
          <span>커버 사진 추가</span>
        </CommonButton>
      </div>
    </div>
  );
};

export default HeaderBackground;
