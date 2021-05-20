/** @jsxImportSource @emotion/react */

import React from "react";

import {
  FBmain,
  FBsecondary,
  FBdarkgray,
  ftLarge,
} from "components/Common/CommonStyle";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const DynamicStyle = props => css`
  ${props.theme.isFocus &&
  `color: ${FBmain}; border-radius: 0 !important; border-bottom: 3px solid ${FBmain};`};
`;

// FIXME: 같은 page가 아니면 :focus가 풀림
const LinkAButtonStyle = styled.a`
  ${DynamicStyle}
  border-radius: 5px;
  padding: 15px 20px;
  color: ${FBdarkgray};
  font-size: ${ftLarge};
  font-weight: bold;

  :hover {
    background-color: ${FBsecondary};
    text-decoration: none;
    color: ${FBdarkgray};
  }
`;

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  isFocus?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = (props: LinkButtonProps) => {
  const { children, href, onClick, isFocus } = props;

  return (
    <LinkAButtonStyle
      href={href}
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => onClick(e)}
      theme={{ isFocus: isFocus }}
    >
      {children}
    </LinkAButtonStyle>
  );
};

export default LinkButton;
