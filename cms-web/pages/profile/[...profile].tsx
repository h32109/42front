/** @jsxImportSource @emotion/react */

import React from "react";

import Header from "components/Dashboard/header";
import ProfileHeader from "components/Profile/Header";
import LNB from "components/Profile/LNB";

import { FBsecondary } from "components/Common/CommonStyle";
import { css } from "@emotion/react";

const ProfileLNBWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${FBsecondary};
  box-shadow: 5px 3px 5px 1px ${FBsecondary};
`;

const Profile: React.FC = () => {
  return (
    <div>
      <Header />
      <div css={ProfileLNBWrapper}>
        <ProfileHeader />
        <LNB />
      </div>
    </div>
  );
};

export default Profile;
