/** @jsxImportSource @emotion/react */

import React, { useMemo } from "react";

import {
  FBmain,
  FBsuccess,
  FBlight,
  FBdark,
  FBsecondary,
  FBlightgray,
} from "components/Common/CommonStyle";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const DynamicStyle = props => css`
  background-color: ${props.theme.bgColor};
  color: ${props.theme.ftColor};
  width: ${props.theme.width};
  height: ${props.theme.height};
  font-weight: ${props.theme.ftWeight};
  border-radius: ${props.theme.bdRadius};

  & input[type="file"] {
    opacity: ${props.theme.isExcept ? 0 : 1};
  }
`;

const CommonButtonStyle = styled.button`
  ${DynamicStyle};
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  display: flex;
  align-items: center;
  font-size: 15px;

  & span {
    margin-left: 5px;
  }

  :disabled {
    color: ${FBlightgray};
  }

  > label {
    margin: 0;
    cursor: pointer;
  }

  & input[type="file"] {
    position: absolute;
    opacity: 0;
    z-index: 10;
    cursor: pointer;
  }
`;

type TTheme = "main" | "success" | "light" | "dark" | "secondary";

type TFtWeight = "lighter" | "normal" | "bold" | "bolder";

/**
 * children : button에서 보여질 텍스트 ( icon 포함 가능 )
 * theme : 색 테마 설정 ( ex. "main", "success", "light" ... )
 * width : 버튼 너비 설정 ( ex. "100px", "10rem" ... )
 * height : 버튼 높이 설정 ( ex. "100px", "10rem" ... )
 * ftWeight : 글씨체 굵기 설정 ( ex. "lighter, "normal" ... )
 * bdRadius : 테두리 radius 설정 ( ex. 50%, 5px ... )
 * disabled : 비활성화 설정 ( ex. true, false )
 * isUpload : 파일 업로드 활성화 설정 ( ex. true, false )
 * isMultiple : 다중 업로드 활성화 설정. isUpload가 true일때 적용됨 ( ex. true, false )
 * onClick : button 클릭 이벤트
 * onClickInput : input 업로드 클릭 이벤트
 * onChangeInput : input 업로드 이벤트
 */
interface ICommonButtonProps {
  children: React.ReactNode;
  theme?: TTheme;
  width?: string;
  height?: string;
  ftWeight?: TFtWeight;
  bdRadius?: string;
  disabled?: boolean;
  isUpload?: boolean;
  isMultiple?: boolean;
  isExcept?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickInput?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommonButton = (props: ICommonButtonProps) => {
  const {
    children,
    theme,
    width,
    height,
    ftWeight = "bold",
    bdRadius,
    disabled,
    isUpload = false,
    isMultiple = false,
    isExcept = false,
    onClick,
    onClickInput,
    onChangeInput,
  } = props;

  const bgColor: string = useMemo(() => {
    if (theme === "main") return FBmain;
    else if (theme === "success") return FBsuccess;
    else if (theme === "light") return FBlight;
    else if (theme === "dark") return FBdark;
    else if (theme === "secondary") return FBsecondary;
  }, [theme]);

  const ftColor: string = useMemo(() => {
    if (theme === "main") return FBlight;
    else if (theme === "success") return FBlight;
    else if (theme === "light") return FBdark;
    else if (theme === "dark") return FBlight;
    else if (theme === "secondary") return FBdark;
  }, [theme]);

  return (
    <CommonButtonStyle
      type="button"
      className={[`common-btn`].join(" ")}
      theme={{
        bgColor: bgColor,
        width: width,
        ftColor: ftColor,
        height: height,
        ftWeight: ftWeight,
        bdRadius: bdRadius,
        isExcept: isExcept,
      }}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        !isUpload && onClick(e);
      }}
      disabled={disabled}
    >
      {!isUpload ? (
        children
      ) : (
        <>
          <label htmlFor="common-button-file-input">{children}</label>
          <input
            id="common-button-file-input"
            name="common-button-file-input"
            type="file"
            accept="image/*"
            multiple={isUpload && isMultiple}
            onClick={(e: React.MouseEvent<HTMLInputElement>) => onClickInput(e)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeInput(e)
            }
            hidden={isExcept ? false : true}
          />
        </>
      )}
      {/* {children} */}
    </CommonButtonStyle>
  );
};

export default CommonButton;
