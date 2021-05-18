/** @jsxImportSource @emotion/react */

import React from "react";

import Header from "components/Dashboard/header";
import ProfileHeader from "components/Profile/Header";

import { css } from "@emotion/react";

const ProfileWrapper = css`
  display: flex;
  justify-content: center;
`;

const Profile: React.FC = () => {
  return (
    <div>
      <Header />
      <div css={ProfileWrapper}>
        <ProfileHeader />
      </div>
    </div>
  );
};

export default Profile;
