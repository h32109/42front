/** @jsxImportSource @emotion/react */

import React, { useCallback, useState } from "react";
import { useReactiveVar } from "@apollo/client";
import CommonButton from "components/Common/CommonButton";

import imageVar, { setProfileImg } from "store/profile/profileImgStore";
import {
  ftXXXLarge,
  ftLarge,
  ftMedium,
  ftSmall,
  FBmain,
  FBsecondary,
  FBdark,
  FBlight,
  FBlightgray,
} from "components/Common/CommonStyle";

import Icon from "@mdi/react";
import { mdiCamera } from "@mdi/js";

import { css } from "@emotion/react";

const HeaderProfileWrapper = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  .profile-header-profile-img-wrapper {
    position: absolute;
    top: -160px;

    img {
      width: 168px;
      height: 168px;
      border-radius: 50%;
      padding: 5px;
      background-color: ${FBlight};
    }

    button {
      color: ${FBdark};
      position: absolute;
      bottom: 4px;
      right: 20px;
      border-radius: 50%;
      border: none;
      padding: 0;

      svg {
        z-index: 5;
        background-color: ${FBsecondary};
        border-radius: 50%;
        width: 35px;
        height: 35px;
        padding: 5px;
      }
    }
  }

  h1 {
    margin-top: 10px;
    font-weight: bold;
    font-size: ${ftXXXLarge};
  }

  .profile-header-add-intro-btn {
    color: ${FBmain};
    border: none;
    background-color: rgba(0, 0, 0, 0);
    font-weight: 600;
    font-size: ${ftMedium};

    :hover {
      text-decoration: underline;
    }
  }
`;

const HeaderProfile: React.FC = () => {
  const image: string = useReactiveVar(imageVar);

  const [introduce, setIntroduce] = useState<boolean>(false);

  const handleAddIntroClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIntroduce(true);
  };

  const handlePhotoUploadInputClick = (
    e: React.MouseEvent<HTMLInputElement>,
  ) => {
    e.currentTarget.value = "";
  };

  const handlePhotoUploadInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileImg(e.currentTarget.files[0]);
  };

  return (
    <div css={HeaderProfileWrapper}>
      <div className="profile-header-profile-img-wrapper">
        <img
          src={image ? image : "/images/profile.jpg"}
          alt="default-profile"
        />
        <CommonButton
          theme="light"
          isUpload={true}
          onClickInput={handlePhotoUploadInputClick}
          onChangeInput={handlePhotoUploadInput}
        >
          <Icon className="icon" path={mdiCamera} />
        </CommonButton>
      </div>
      <h1>김철수</h1>
      {!introduce ? (
        <button
          type="button"
          className="profile-header-add-intro-btn"
          onClick={handleAddIntroClick}
        >
          소개 추가
        </button>
      ) : (
        <HeaderProfileIntroduceFragment setIntroduce={setIntroduce} />
      )}
    </div>
  );
};

const HeaderProfileIntroduceFragmentWrapper = css`
  font-size: ${ftSmall};
  font-weight: bold;

  textarea {
    resize: none;
    border: 1px solid ${FBlightgray};
    border-radius: 5px;
    background-color: ${FBsecondary};
    text-align: center;

    ::placeholder {
      font-size: ${ftLarge};
    }
  }

  p {
    text-align: end;
    margin-bottom: 5px;
  }
`;

const CommonButtonWrapper = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  div {
    display: flex;
    justify-content: flex-end;

    button:first-of-type {
      margin-right: 10px;
    }
  }
`;

interface HeaderProfileIntroduceFragmentProps {
  setIntroduce: (bool: boolean) => void;
}

const HeaderProfileIntroduceFragment: React.FC<HeaderProfileIntroduceFragmentProps> = (
  props: HeaderProfileIntroduceFragmentProps,
) => {
  const { setIntroduce } = props;

  const [introduceLength, setIntroduceLength] = useState<number>(0);
  const [timer, setTimer] = useState<any>();
  const [introduceText, setIntroduceText] = useState<string>("");

  const reset = useCallback(() => {
    setIntroduce(false);
    setTimer(undefined);
    setIntroduceText("");
  }, []);

  const handleIntroTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduceLength(+e.currentTarget.value.length);

    // e.currentTarget.value를 그대로 쓰면 아래 setIntroduceText에서 null 에러 발생
    const tempText: string = e.currentTarget.value;
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        setIntroduceText(tempText);
      }, 500),
    );
  };

  const handleClickCancelBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset();
  };

  const handleClickSaveBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("introduceText with debouncing", introduceText);
    // reset 전에 소개 저장 로직 들어가야함
    reset();
  };

  return (
    <div css={HeaderProfileIntroduceFragmentWrapper}>
      <textarea
        name="profile-text"
        cols={45}
        rows={3}
        placeholder="회원님에 대해 소개해주세요"
        onChange={handleIntroTextChange}
      ></textarea>
      <p>{`${101 - introduceLength}자 남음`}</p>
      <div css={CommonButtonWrapper}>
        <span>전체 공개</span>
        <div>
          <CommonButton
            theme="secondary"
            width="50px"
            onClick={handleClickCancelBtn}
          >
            취소
          </CommonButton>
          <CommonButton
            theme="secondary"
            width="50px"
            onClick={handleClickSaveBtn}
            disabled={introduceText.length === 0 ? true : false}
          >
            저장
          </CommonButton>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
