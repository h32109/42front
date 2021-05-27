/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoginContainer from "../components/LoginContainer";
import { css } from "@emotion/react";

const homeStyle = css`
  height: 100%;
  width: 100%;
`;

const Home: React.FC = () => {
  return (
    <div css={homeStyle}>
      <LoginContainer />
    </div>
  );
};

export default Home;
