import React from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Icon from "@mdi/react";

import {
  mdiMagnify,
  mdiHome,
  mdiTelevisionPlay,
  mdiAccountGroup,
  mdiGamepadSquare,
  mdiPlus,
  mdiMessage,
  mdiBell,
  mdiChevronDown,
} from "@mdi/js";

const Header = () => {
  return (
    <HeaderDiv>
      <LogoAndSearch>
        <HeaderLogo>
          <img
            src="/images/f_logo_RGB-Blue_250.png"
            alt="Facebook"
            className={css`
              width: 42px;
              height: 42px;
            `}
          />
        </HeaderLogo>
        <HeaderSearch>
          <Icon path={mdiMagnify} color="rgb(101, 103, 107)" size={1} />
          <input type="text" placeholder="Facebook 검색" />
        </HeaderSearch>
      </LogoAndSearch>

      <HeaderApps>
        <IconWrapperActive>
          <Icon path={mdiHome} color="rgb(24, 119, 242)" size={1.1} />
        </IconWrapperActive>
        <IconWrapper>
          <Icon path={mdiTelevisionPlay} color="rgb(101, 103, 107)" size={1} />
        </IconWrapper>
        <IconWrapper>
          <Icon path={mdiAccountGroup} color="rgb(101, 103, 107)" size={1} />
        </IconWrapper>
        <IconWrapper>
          <Icon path={mdiGamepadSquare} color="rgb(101, 103, 107)" size={1} />
        </IconWrapper>
      </HeaderApps>

      <HeaderBtns>
        <LoginUser>
          <Avatar />
          <UserName>김철수</UserName>
        </LoginUser>

        <BtnWrapper>
          <Icon path={mdiPlus} color="black" size={0.8} />
        </BtnWrapper>
        <BtnWrapper>
          <Icon path={mdiMessage} color="black" size={0.7} />
        </BtnWrapper>
        <BtnWrapper>
          <Icon path={mdiBell} color="black" size={0.7} />
        </BtnWrapper>
        <BtnWrapper>
          <Icon path={mdiChevronDown} color="black" size={0.7} />
        </BtnWrapper>
      </HeaderBtns>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  width: 100%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  z-index: 1;
`;

const LogoAndSearch = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 80%;
  margin-left: 15px;
`;
const HeaderLogo = styled.div``;

const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  height: 90%;
  padding: 0 10px;
  margin-left: 10px;

  border-radius: 20px;
  background-color: rgb(240, 242, 245);

  input {
    width: 100%;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    font-size: 0.9rem;

    &:focus {
      outline: none;
    }
  }
`;

const HeaderApps = styled.div`
  display: flex;
  width: 520px;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgb(242, 242, 242);
    border-radius: 10px;
  }
`;

const IconWrapperActive = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 100%;
  cursor: pointer;

  border-bottom: 3px solid rgb(24, 119, 242);
`;

const HeaderBtns = styled.div`
  display: flex;
  width: 310px;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(228, 230, 235);
`;

const LoginUser = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: skyblue;
`;
const UserName = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 10px;
`;

export default Header;
