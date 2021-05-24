/** @jsxImportSource @emotion/react */

import React from "react";

import HeaderBackground from "components/Profile/Header/HeaderBackground";
import HeaderProfile from "components/Profile/Header/HeaderProfile";
import { css } from "@emotion/react";

const ProfileWrapper = css`
  width: 1250px;

  @media screen and (max-width: 1250px) {
    width: 100%;
  }
`;

const ProfileHeader: React.FC = () => {
  return (
    <header css={ProfileWrapper}>
      <HeaderBackground />
      <HeaderProfile />
    </header>
  );
};

export default ProfileHeader;
