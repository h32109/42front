/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Header from "../components/Dashboard/header";
import VerifyContainer from "../components/VerifyContainer";

const verifyStyle = css`
  height: 100%;
  width: 100%;
`;

const verify: React.FC = () => {
  return (
    <>
      <div css={verifyStyle}>
        <Header />
        <VerifyContainer />
      </div>
    </>
  );
};

export default verify;
