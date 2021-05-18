/** @jsxImportSource @emotion/react */

import React, { useMemo } from "react";

import {
  FBmain,
  FBsuccess,
  FBlight,
  FBdark,
  FBsecondary,
} from "components/Common/CommonStyle";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const DynamicStyle = props => css`
  background-color: ${props.theme.bgColor};
  color: ${props.theme.ftColor};
  width: ${props.theme.width};
`;

const CommonButtonStyle = styled.button`
  ${DynamicStyle};
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;

  & span {
    margin-left: 5px;
  }
`;

type TTheme = "main" | "success" | "light" | "dark" | "secondary";

interface ICommonButtonProps {
  children: React.ReactNode;
  theme?: TTheme;
  width?: string;
  font?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CommonButton = (props: ICommonButtonProps) => {
  const { children, theme, width, onClick } = props;

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
      theme={{ bgColor: bgColor, width: width, ftColor: ftColor }}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick(e)}
    >
      {children}
    </CommonButtonStyle>
  );
};

export default CommonButton;
