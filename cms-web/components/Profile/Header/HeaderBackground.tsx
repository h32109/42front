/** @jsxImportSource @emotion/react */

import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useReactiveVar } from "@apollo/client";
import CommonButton from "components/Common/CommonButton";

import imageVar, { setBackgroundImg } from "store/profile/backgroundStore";
import isShowPopupVar, { setIsShowPopupVar } from "store/profile/popupStore";

import Icon from "@mdi/react";
import { mdiCamera, mdiImageMultiple, mdiUpload } from "@mdi/js";
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
  const image: string = useReactiveVar(imageVar);
  const isShowPopup: boolean = useReactiveVar(isShowPopupVar);

  const clickOutSide = useCallback(() => {
    if (isShowPopup) {
      setIsShowPopupVar(false);
    }
  }, [isShowPopup]);

  useEffect(() => {
    document.addEventListener("click", clickOutSide);
    return () => document.removeEventListener("click", clickOutSide);
  }, [clickOutSide]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsShowPopupVar(true);
  };

  return (
    <>
      <div css={HeaderBackgroundWrapper}>
        {image ? <img src={image} alt="background" /> : null}
        <div
          id="profile-header-add-cover-btn-wrapper"
          className="profile-header-add-cover-btn-wrapper"
        >
          <CommonButton theme="light" onClick={handleButtonClick}>
            <Icon className="icon" path={mdiCamera} size={0.8} />
            <span>커버 사진 추가</span>
          </CommonButton>
        </div>
      </div>
      {isShowPopup && <HeaderBackgroundPopup />}
    </>
  );
};

const HeaderBackgroundPopupWrapper = css`
  position: absolute;
  right: 0;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 3px 5px 2px rgba(0, 0, 0, 0.2);
  padding: 8px;
  width: 340px;
  z-index: 5;
`;

const HeaderBackgroundPopup: React.FC = () => {
  const handlePhotoSelectButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.stopPropagation();
  };

  const handlePhotoUploadInputClick = (
    e: React.MouseEvent<HTMLInputElement>,
  ) => {
    e.stopPropagation();
    e.currentTarget.value = "";
  };

  const handlePhotoUploadInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundImg(e.target.files[0]);
    setIsShowPopupVar(false);
  };

  const Popup = (
    <div css={HeaderBackgroundPopupWrapper}>
      <CommonButton
        theme="light"
        width="100%"
        ftWeight="normal"
        onClick={handlePhotoSelectButtonClick}
      >
        <Icon className="icon" path={mdiImageMultiple} size={0.8} />
        <span>사진 선택</span>
      </CommonButton>
      <CommonButton
        theme="light"
        width="100%"
        ftWeight="normal"
        isUpload={true}
        isExcept={true}
        onClickInput={handlePhotoUploadInputClick}
        onChangeInput={handlePhotoUploadInput}
      >
        <Icon className="icon" path={mdiUpload} size={0.8} />
        <span>사진 업로드</span>
      </CommonButton>
    </div>
  );

  return ReactDOM.createPortal(
    Popup,
    document.getElementById("profile-header-add-cover-btn-wrapper"),
  );
};

export default HeaderBackground;
